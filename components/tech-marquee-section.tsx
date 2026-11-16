import type { IconType } from "react-icons";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiClaude,
  SiDocker,
  SiGooglecloud,
  SiGooglegemini,
  SiJavascript,
  SiLangchain,
  SiN8N,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTensorflow,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { SectionHeader } from "@/components/section-header";
import type { Translations } from "@/lib/translations";

const technologies: { name: string; Icon: IconType }[] = [
  { name: "Google Cloud", Icon: SiGooglecloud },
  { name: "Docker", Icon: SiDocker },
  { name: "n8n", Icon: SiN8N },
  { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "ChatGPT", Icon: RiOpenaiFill },
  { name: "Gemini", Icon: SiGooglegemini },
  { name: "Claude", Icon: SiClaude },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "LangChain", Icon: SiLangchain },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Vercel", Icon: SiVercel },
];

export function TechMarqueeSection({ t }: { t: Translations }) {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label={t.tech.label} title={t.tech.title} />

        <ul className="reveal flex flex-wrap gap-x-10 gap-y-5">
          {technologies.map(({ name, Icon }) => (
            <li key={name} className="flex items-center gap-2.5 text-muted-foreground">
              <Icon size={20} aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
