import { ArrowLeft, Download } from "lucide-react";

const RESUME_PATH = "/assets/docs/rahul_resume_devops.pdf";

const ResumeViewer = () => (
  <main className="flex min-h-screen flex-col bg-background text-foreground">
    <header className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
      <a href="/" className="social-button">
        <ArrowLeft className="size-4" aria-hidden="true" /> Back to portfolio
      </a>
      <a href={RESUME_PATH} download className="social-button">
        <Download className="size-4" aria-hidden="true" /> Download
      </a>
    </header>
    <object
      data={RESUME_PATH}
      type="application/pdf"
      title="Rahul Somasundaram résumé"
      className="min-h-[calc(100vh-69px)] w-full flex-1"
    >
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold">Résumé preview unavailable</h1>
        <p className="mt-3 text-muted-foreground">
          Your browser cannot display the embedded PDF.
        </p>
        <a href={RESUME_PATH} download className="contact-pill mt-6 inline-flex">
          Download the résumé
        </a>
      </div>
    </object>
  </main>
);

export default ResumeViewer;
