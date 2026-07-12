interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Renders the shared visual heading used to introduce each portfolio section. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-12 max-w-2xl">
      <p className="label-mono">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </header>
  );
}
