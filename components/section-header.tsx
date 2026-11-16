export function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal mb-12 max-w-2xl lg:mb-16">
      <p className="mb-3 text-sm font-medium text-primary">{label}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}
