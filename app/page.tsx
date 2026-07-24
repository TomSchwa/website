import Link from "next/link";

type LinkItem = {
  label: string;
  href: string;
};

type Paper = {
  title: string;
  status?: string;
  links: LinkItem[];
  authors?: string;
  presentations: React.ReactNode;
  abstract: React.ReactNode;
  appendix?: boolean;
};

const paperCatalog: Paper[] = [
  {
    title: "Management as Rules: Evidence from an adaptive Bayesian questionnaire",
    links: [
      {
        label: "Draft",
        href: "./files/Management_as_Rules.pdf",
      },
    ],
    presentations:
      "CSAE Research Workshop; Oxford Applied Micro Group; Workshop on Frontiers in Measurement and Survey Methods; Empirical Management Conference.",
    abstract: (
      <>
        It is well understood that most organisational practices are communicated
        and understood through rules, but these have traditionally been difficult
        to measure well. This paper develops a novel Bayesian survey method to
        empirically measure the use of managerial rules within organisations. The
        method implements an adaptive survey, incorporating Bayesian optimisation,
        to first understand decision-making in a potentially high-dimensional
        space. It uses the information from this method to then directly ask about
        the rules driving patterns in these decisions. I apply this tool to measure
        the rules used by senior HR managers at Ethiopian firms. Descriptively, I
        find that this measure robustly, positively correlates with firm performance
        and helps explain variation in performance across firms, in addition to more
        traditional measures of firm management. Using quasi-exogenous variation
        from firms&apos; exposure to COVID-19, I further find that while managerial
        rules enhance firm performance, they also reduce resilience to economic
        shocks, suggesting a trade-off in the use of more rigid practices. The
        methods and findings in this paper motivate further research into the causal
        mechanisms underlying the effectiveness of managerial rules, and into
        understanding the factors influencing the heterogeneous adoption of such
        rules across organisations.
      </>
    ),
  },
  {
    title: "Management Style under the Spotlight: Evidence from Studio Vignettes",
    status: "Submitted",
    links: [
      {
        label: "Draft",
        href: "./files/Management_Style_under_the_Spotlight.pdf",
      },
      { label: "CEPR DP", href: "https://cepr.org/publications/dp21043" },
      {
        label: "VoxDev",
        href: "https://voxdev.org/topic/labour-markets/learning-how-business-done-management-styles-and-labour-market-inclusion",
      },
      {
        label: "VoxEU Podcast",
        href: "https://cepr.org/multimedia/management-under-spotlight",
      },
    ],
    authors:
      "Joint work with Girum Abebe, Marcel Fafchamps, Michael Koelle and Simon Quinn",
    presentations: (
      <>
        City St George&apos;s (University of London)*, 10th CSEF-IGIER
        Symposium on Economics and Institutions, Princeton University*, the NBER
        Organisational Economics Working Group Spring 2025*, King&apos;s College
        London*, Queen&apos;s University (Firms and Inclusive Growth Workshop),
        Imperial College London*, CEPR Symposium*. (* if by coauthor)
      </>
    ),
    abstract: (
      <>
        We introduce a new method for measuring managerial traits of young
        professionals: using management vignettes in a video studio. This method
        — analysed through the lens of a Bayesian hierarchical model — allows us
        to identify four distinct managerial archetypes (which we term
        &lsquo;rule-based&rsquo;, &lsquo;affiliative&rsquo;,
        &lsquo;power-based&rsquo; and &lsquo;discretion-based&rsquo;). We find
        that past labour market exposure (including exposure induced through a
        previous field experiment) correlates strongly with the propensity to act
        as a rule-based manager. We then use the videos to run an incentivised
        experiment with firm managers, to elicit preferences over young
        professionals. Strikingly, we find that firms consistently prefer the
        rule-based managerial style for entry-level managerial positions.
        Empirically, our results highlight an underexplored mechanism for labour
        market exclusion among young professionals. Methodologically, we
        demonstrate the value of controlled vignette scenarios for assessing
        managerial traits. Our findings underscore the importance of managerial
        training in shaping labor market outcomes, and offer new avenues for
        studying the development of managerial talent.
      </>
    ),
  },
  {
    title: "Banking under Conflict: Managers and Organisational Design",
    status: "Submitted",
    links: [
      {
        label: "Draft",
        href: "./files/Banking_under_Conflict.pdf",
      },
      { label: "CEPR DP", href: "https://cepr.org/publications/dp21511" },
      { label: "CSEF WP", href: "https://www.csef.it/WP/wp782.pdf" },
      {
        label: "MoFiR WP",
        href: "https://docs.dises.univpm.it/web/quaderni/pdfmofir/Mofir198.pdf",
      },
    ],
    authors: "with Nicola Limodio and Luca Picariello",
    presentations: (
      <>
        10th CSEF-IGIER Symposium on Economics and Institutions*, EEA Congress
        2025, CEPR-IMO Workshop (Bocconi), CEPR Governance in a Polarized World
        (POLECONFIN), EBRD Office of the Chief Economist Seminar, CEPR Symposium
        (* if by coauthor), Working Group in African Political Economy; 8th
        EBRD-CEPR Research Symposium: The Frontiers of finance in emerging
        markets; Groningen internal seminar; SIOE 2026 Conference.
      </>
    ),
    abstract: (
      <>
        How do organizations adapt internally when ethnic divisions intensify? We
        develop a model with an organization jointly choosing managerial
        assignment and delegation when locally-matched managers have better
        information but are less aligned with headquarters, and test it using a
        panel of Ethiopian bank branches. Exploiting variation in banks&apos;
        exposure to ethnic conflict through their branch networks, we find that
        conflict increases the appointment of locally-matched managers, while
        reducing their lending autonomy and leaving branch credit mostly
        unaffected. Conflict-exposed branches are more likely to be staffed by
        experienced insiders reassigned within the bank. An LLM-based CEO vignette
        exercise corroborates this mechanism.
      </>
    ),
    appendix: true,
  },
  {
    title:
      "Organisational Values, Self-Image and Inclusion: Evidence from a Field Experiment",
    status: "Submitted",
    links: [
      {
        label: "Draft",
        href: "./files/Organisational_Values_Self_Image_and_Inclusion.pdf",
      },
      { label: "CEPR DP", href: "https://cepr.org/publications/dp21457" },
    ],
    authors: "with Girum Abebe, Siân Brooke, Tom Gole and Simon Quinn",
    presentations:
      "CSAE Research Workshop (2023), Food for Thought Seminar (Bocconi), CSAE Conference 2025, Milan Experimental Coffee, CEPR-EBRD 3rd Accelerating growth for women entrepreneurs joint research conference (EBRD).",
    abstract: (
      <>
        We conduct a novel field experiment in Ethiopia to examine how
        institutional features influence inclusive decision-making. Specifically,
        we implement a business plan competition in which we vary (i) whether
        judges are reminded of the organization&apos;s commitment to gender
        equality and (ii) whether judges must justify their decisions to peers. We
        find that highlighting organizational values substantially improves
        outcomes for high-quality female entrepreneurs, as determined by expert
        assessments and machine-learning predictions. In contrast, prompting
        judges to justify their decisions—thereby increasing social image
        concerns—does not improve female candidates&apos; success but does enhance
        consistency and agreement among judges, even without communication. Our
        findings suggest that simple institutional nudges promoting equal
        opportunity can enhance the quality of evaluative decisions and improve
        outcomes for high-potential female applicants.
      </>
    ),
  },
];

const jobMarketPaper = paperCatalog.find((paper) =>
  paper.title.startsWith("Banking under Conflict"),
);

const papers = paperCatalog.filter(
  (paper) => !paper.title.startsWith("Banking under Conflict"),
);

function ExternalLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function PaperEntry({
  paper,
  defaultOpen = false,
}: {
  paper: Paper;
  defaultOpen?: boolean;
}) {
  return (
    <article className="paper section">
      <div className="paper-title-row">
        <span className="paper-title">{paper.title}</span>
        {paper.status && <span className="status">{paper.status}</span>}
      </div>
      <p className="paper-links">
        {paper.links.map((link) => (
          <ExternalLink href={link.href} key={link.label}>
            [{link.label}]
          </ExternalLink>
        ))}
        {paper.appendix && (
          <Link href="/banking-conflict-appendix/">[Online Appendix]</Link>
        )}
      </p>
      {paper.authors && <p className="authors">{paper.authors}</p>}
      <details className="paper-details" open={defaultOpen}>
        <summary>Abstract</summary>
        <div className="paper-body">
          <p className="presentations">
            <em>Presentations:</em> {paper.presentations}
          </p>
          <p className="abstract">
            <span>Abstract:</span> {paper.abstract}
          </p>
        </div>
      </details>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a
            className="bocconi-logo"
            href="https://www.unibocconi.it/"
            target="_blank"
            rel="noreferrer"
            aria-label="Bocconi University"
          >
            <img src="/bocconi.png" alt="Bocconi University" />
          </a>
          <nav aria-label="Main navigation">
            <a href="#job-market-paper">Job market paper</a>
            <a href="#working-papers">Working papers</a>
            <a href="#work-in-progress">Work in progress</a>
          </nav>
        </div>
      </header>

      <main id="top" className="home-main">
        <section className="intro section">
          <div className="intro-grid">
            <div className="portrait-wrap">
              <img
                src="./profile.jpg"
                alt="Portrait of Tom Schwantje"
                width={225}
                height={340}
              />
            </div>
            <div className="bio">
              <h1>Tom Schwantje</h1>
              <div className="bio-copy">
                <p>
                  I am a Postdoctoral Research Fellow at Bocconi University, where I
                  am affiliated with{" "}
                  <ExternalLink href="https://igier.unibocconi.eu">IGIER</ExternalLink>{" "}
                  and{" "}
                  <ExternalLink href="https://baffi.unibocconi.eu/research-units/finafrica">
                    FINAFRICA
                  </ExternalLink>
                  .
                </p>
                <p className="job-market-note">
                  I will be on the 2026–27 academic job market.
                </p>
                <p>
                  My primary fields of interest are organisational economics and
                  management, and their applications to development economics and
                  finance. I am interested in the role organisations play in economic
                  development both in their own right and by contributing to broader
                  social objectives, and how their internal organisation supports
                  this. My research increasingly focuses on the role of the financial
                  sector in this process.
                </p>
                <p>
                  Many of my projects develop new (Bayesian) tools to measure
                  management, such as the rules managers use to make decisions,
                  management practices in banks, and management styles among young
                  professionals.
                </p>
                <p>Always happy to talk about these topics, please reach out!</p>
              </div>
              <div className="contact">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:tom.schwantje@unibocconi.it">
                    tom.schwantje@unibocconi.it
                  </a>
                </p>
                <p>
                  <ExternalLink href="./files/Tom_Schwantje_CV.pdf">
                    Curriculum Vitae
                  </ExternalLink>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="job-market-paper" className="section section-heading">
          <h2>Job Market Paper</h2>
        </section>

        {jobMarketPaper && <PaperEntry paper={jobMarketPaper} defaultOpen />}

        <section id="working-papers" className="section section-heading">
          <h2>Working papers</h2>
        </section>

        {papers.map((paper) => (
          <PaperEntry paper={paper} key={paper.title} />
        ))}

        <section id="work-in-progress" className="section wip">
          <h2>Selected Work in Progress</h2>
          <div className="wip-list">
            <div className="wip-item">
              <h3>Management, Internet and Financial Technology Adoption</h3>
              <p>with Nicola Limodio</p>
            </div>
            <div className="wip-item">
              <h3>
                Heterogeneity in Management Practices: A Bayesian Approach to
                Identifying Complementarities
              </h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
