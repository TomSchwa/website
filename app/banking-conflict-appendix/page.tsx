import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banking under Conflict — Online Appendix | Tom Schwantje",
  description: "Online appendix for Banking under Conflict.",
  alternates: {
    canonical: "/banking-conflict-appendix/",
  },
};

export default function AppendixPage() {
  return (
    <main className="appendix-page">
      <section className="section appendix-shell">
        <div className="appendix-heading">
          <h1>Banking under Conflict — Online Appendix</h1>
          <a
            href="../files/Banking_under_Conflict_Online_Appendix.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>
        </div>
        <iframe
          className="pdf-frame"
          src="../files/Banking_under_Conflict_Online_Appendix.pdf"
          title="Banking under Conflict online appendix"
          allow="autoplay"
        />
      </section>
    </main>
  );
}
