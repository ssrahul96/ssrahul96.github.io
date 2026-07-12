import { GraduationCap } from "lucide-react";
import { education, experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const ResumeSection = () => (
  <section id="resume" className="relative">
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="// resume" title="Professional experience" />

      <div className="relative border-l border-border pl-8 sm:pl-10">
        {experience.map((job) => (
          <article key={job.company} className="timeline-entry relative pb-12 last:pb-0">
            <span className="timeline-dot" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-widest text-signal">
              {job.period}
            </p>
            <h3 className="mt-2 text-xl font-semibold">{job.title}</h3>
            <p className="text-sm text-muted-foreground">
              {job.company} · {job.location}
            </p>
            <ul className="mt-4 space-y-2">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal/70" />
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="surface-card mt-12 flex items-center gap-4 p-6">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-signal/15 text-signal">
          <GraduationCap className="size-6" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-semibold">{education.degree}</h3>
          <p className="text-sm text-muted-foreground">{education.period}</p>
        </div>
      </article>
    </div>
  </section>
);

export default ResumeSection;
