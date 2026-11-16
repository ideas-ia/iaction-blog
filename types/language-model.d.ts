// Prompt API de Chrome (solo lo que usa el asistente); TS aún no la incluye.
type LanguageModelExpected = { type: "text"; languages?: string[] };

interface LanguageModelSession {
  prompt(
    input: string,
    options?: { responseConstraint?: object; signal?: AbortSignal }
  ): Promise<string>;
  destroy(): void;
}

interface LanguageModelCreateMonitor extends EventTarget {
  addEventListener(type: "downloadprogress", listener: (e: ProgressEvent) => void): void;
}

declare const LanguageModel: {
  availability(options?: {
    expectedInputs?: LanguageModelExpected[];
    expectedOutputs?: LanguageModelExpected[];
  }): Promise<"unavailable" | "downloadable" | "downloading" | "available">;
  create(options?: {
    expectedInputs?: LanguageModelExpected[];
    expectedOutputs?: LanguageModelExpected[];
    initialPrompts?: { role: "system" | "user" | "assistant"; content: string }[];
    monitor?: (m: LanguageModelCreateMonitor) => void;
  }): Promise<LanguageModelSession>;
};
