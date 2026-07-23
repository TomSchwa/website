import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Banking under Conflict — Online Appendix | Tom Schwantje",
  description: "Online appendix for Banking under Conflict.",
};

export default function AppendixPage() {
  return (
    <main className="appendix-page">
      <header className="site-header">
        <div className="header-inner">
          <Link className="site-name" href="/">
            Tom Schwantje
          </Link>
        </div>
      </header>
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
