"use client";

import { Loader2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n-context";

const MAX_ANSWERS = 3;

const schema = {
  type: "object",
  properties: {
    question: { type: "string" },
    summary: { type: "string" },
    done: { type: "boolean" },
  },
  required: ["question", "summary", "done"],
};

const systemPrompt = (lang: string) =>
  `Eres el asistente de iaction, consultora chilena de automatización de procesos con IA.
Ayudas a un potencial cliente a describir su necesidad para el formulario de contacto.
Haz UNA pregunta corta por turno para conocer: proceso a automatizar, volumen o frecuencia, herramientas actuales y plazo.
En "summary" mantén un resumen en primera persona, claro y breve (máximo 5 líneas), listo para enviar.
Cuando tengas lo suficiente, done=true y question vacía. No inventes datos. Responde en idioma "${lang}".`;

const languageOptions = (lang: string) => ({
  expectedInputs: [{ type: "text" as const, languages: [lang] }],
  expectedOutputs: [{ type: "text" as const, languages: [lang] }],
});

type Props = { getMessage: () => string; setMessage: (value: string) => void };

// Prompt API (Gemini Nano local, solo Chrome escritorio). Sin soporte no se renderiza nada.
export function TriageAssistant({ getMessage, setMessage }: Props) {
  const { t, locale } = useI18n();
  const [supported, setSupported] = useState(false);
  const [input, setInput] = useState("");
  const [question, setQuestion] = useState("");
  const [summary, setSummary] = useState("");
  const [answers, setAnswers] = useState(0);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState(false);
  const [previous, setPrevious] = useState<string | null>(null);
  const sessionRef = useRef<LanguageModelSession | null>(null);

  useEffect(() => {
    if (!("LanguageModel" in self)) return;
    LanguageModel.availability(languageOptions(locale))
      .then((a) => setSupported(a !== "unavailable"))
      .catch(() => {});
    return () => sessionRef.current?.destroy();
  }, [locale]);

  if (!supported) return null;

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setBusy(true);
    setError(false);
    try {
      // create() puede descargar el modelo: debe ocurrir dentro de un gesto del usuario (este click).
      sessionRef.current ??= await LanguageModel.create({
        ...languageOptions(locale),
        initialPrompts: [{ role: "system", content: systemPrompt(locale) }],
        monitor(m) {
          m.addEventListener("downloadprogress", (e) => setProgress(e.loaded));
        },
      });
      setProgress(null);
      const last = answers + 1 >= MAX_ANSWERS;
      const raw = await sessionRef.current.prompt(
        last ? `${text}\n(Última respuesta: no preguntes más, done=true.)` : text,
        { responseConstraint: schema }
      );
      const data = JSON.parse(raw) as { question: string; summary: string; done: boolean };
      setSummary(data.summary);
      setQuestion(data.done || last ? "" : data.question);
      setAnswers((n) => n + 1);
      setInput("");
    } catch {
      setError(true);
      setProgress(null);
    } finally {
      setBusy(false);
    }
  }

  function use() {
    setPrevious(getMessage());
    setMessage(summary);
  }

  function undo() {
    if (previous === null) return;
    setMessage(previous);
    setPrevious(null);
  }

  const finished = answers > 0 && !question;

  return (
    <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
      <p className="flex items-center gap-2 text-sm font-medium text-foreground">
        <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
        {t.contact.assistantTitle}
      </p>

      <div
        aria-live="polite"
        aria-busy={busy}
        lang={locale}
        className="mt-2 text-sm text-muted-foreground"
      >
        {error
          ? t.contact.assistantError
          : question || (answers === 0 ? t.contact.assistantIntro : "")}
        {progress !== null && (
          <span className="mt-2 flex items-center gap-2">
            <progress max={1} value={progress} aria-label={t.contact.assistantDownloading} />
            {t.contact.assistantDownloading}
          </span>
        )}
      </div>

      {!finished && (
        <div className="mt-3 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              // isComposing: no enviar a mitad de una composición IME.
              if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                e.preventDefault();
                send();
              }
            }}
            placeholder={t.contact.assistantPlaceholder}
            aria-label={t.contact.assistantTitle}
            autoComplete="off"
            disabled={busy}
          />
          <Button type="button" onClick={send} disabled={busy || !input.trim()}>
            {busy ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              t.contact.assistantSend
            )}
          </Button>
        </div>
      )}

      {summary && (
        <div className="mt-3 rounded-lg bg-background p-3 text-sm">
          <p lang={locale} className="whitespace-pre-line text-foreground">
            {summary}
          </p>
          <div className="mt-2 flex gap-2">
            <Button type="button" size="sm" variant="secondary" onClick={use}>
              {t.contact.assistantUse}
            </Button>
            {previous !== null && (
              <Button type="button" size="sm" variant="ghost" onClick={undo}>
                {t.contact.assistantUndo}
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
