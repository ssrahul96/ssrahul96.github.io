import { Mail, MapPin } from "lucide-react";
import { highlights, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const AboutSection = () => (
  <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
    <SectionHeading eyebrow="// about" title="Engineering for reliability" />
    <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
      <article className="surface-card relative h-full min-h-[260px] overflow-hidden p-6 sm:p-8">
        <div className="grid-backdrop absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative flex h-full items-center gap-5 sm:gap-7">
          <picture>
            <source
              type="image/webp"
              srcSet="/assets/img/profile-128.webp 128w, /assets/img/profile-256.webp 256w"
              sizes="(min-width: 1024px) 144px, (min-width: 640px) 128px, 112px"
            />
            <img
              src="/assets/img/profile.webp"
              alt="Rahul Somasundaram"
              width={144}
              height={144}
              loading="lazy"
              decoding="async"
              className="glow-ring size-28 max-w-none rounded-2xl object-cover sm:size-32 lg:size-36"
            />
          </picture>

          <div className="min-w-0">
            <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl">{profile.name}</h3>
            <p className="mt-1 text-sm font-medium text-signal">{profile.role}</p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-signal" aria-hidden="true" />
                {profile.location}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="flex min-w-0 items-center gap-2 transition-colors hover:text-signal"
              >
                <Mail className="size-4 shrink-0 text-signal" aria-hidden="true" />
                <span className="break-all">{profile.email}</span>
              </a>
            </div>
          </div>
        </div>
      </article>

      <div>
        <p className="text-lg leading-relaxed text-foreground/90">{profile.tagline}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight.label} className="surface-card p-5">
              <p className="text-gradient font-display text-3xl font-semibold">
                {highlight.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {highlight.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
