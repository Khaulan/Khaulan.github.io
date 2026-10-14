import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khaulan McLean — Software Design MSc, Technical Business Analyst" },
      {
        name: "description",
        content:
          "Khaulan McLean: Software Design MSc candidate at ITU Copenhagen with years of DevOps business analysis experience, transitioning to software engineering.",
      },
      { property: "og:title", content: "Khaulan McLean — Software Engineer in the making" },
      {
        property: "og:description",
        content: "Technical Business Analyst in DevOps transitioning to Software Development Engineering. Based in Copenhagen.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const experience = [
  {
    role: "MSc Candidate, Software Design",
    org: "IT-Universitetet i København",
    when: "Aug 2024 — Present",
    where: "Copenhagen, DK",
    points: [],
  },
  {
    role: "Technical Business Analyst",
    org: "ComponentWise Solutions Inc.",
    when: "Jul 2021 — Aug 2024",
    where: "Washington, DC",
    points: [
      "DevOps support for USCIS Transformation Delivery Division on the Electronic Immigration System (ELIS) H-1B program — moving immigration services from paper to end-to-end digital processing.",
      "Diagnosed, troubleshot and resolved end-user issues to keep business operations running.",
      "Owned Agile Jira workflow: backlog prioritization, standups and retrospectives.",
      "Bridged SMEs, stakeholders and developers to gather and translate requirements.",
      "Built workflows, technical diagrams, monthly scorecards and reports; demoed features to stakeholders.",
      "Daily ServiceNow production support — triaging and resolving federal client incidents.",
      "Active Public Trust Security Clearance.",
    ],
  },
  {
    role: "Business Analyst",
    org: "UnitedHealth Group",
    when: "Sep 2020 — Jul 2021",
    where: "Washington, DC",
    points: [
      "Multilingual assistance for the Asian American community navigating Medicare and Medicaid.",
      "Interfaced between insurance specialists and federal service providers to optimize patient care.",
    ],
  },
  {
    role: "Language Instructor",
    org: "Public charter school (grades 9–12)",
    when: "",
    where: "",
    points: [
      "Personalized instruction via online platforms; scaffolded curriculum for equitable outcomes.",
      "Analyzed assessment and standards data to adapt lessons; managed the school's largest student load.",
    ],
  },
  {
    role: "Business Analyst & Web Administrator",
    org: "Santa Monica Bar Association",
    when: "Jun 2017 — Feb 2018",
    where: "Santa Monica, CA",
    points: ["Managed website content and online presence on the WildApricot platform."],
  },
  {
    role: "Delegation Events — World Expo 2017 \"Future Energy\"",
    org: "Soluxe Tour",
    when: "Jul 2017 — Sep 2017",
    where: "",
    points: [
      "Designed events and tours for Chinese corporate and government delegations.",
      "Bilingual TV interviews and cultural diplomacy campaigns for American, Chinese and Kazakhstani audiences.",
    ],
  },
  {
    role: "Sales Manager",
    org: "Soluxe Tour",
    when: "Dec 2014 — Dec 2015",
    where: "Almaty, KZ",
    points: [
      "Managed luxury MICE sales and tours for corporate and government clients, specializing in greater China markets.",
    ],
  },
];

const skills = ["Statistical Analysis", "Pattern Recognition", "Predictive Analytics", "Agile / Jira", "DevOps", "ServiceNow", "Requirements Engineering", "Spark SQL & DataFrames"];

const languages = [
  ["English", "native"],
  ["Chinese", "native"],
  ["Kazakh", "working"],
  ["Russian", "working"],
  ["Japanese", "working"],
  ["Danish", "elementary"],
];

function Label({ children }: { children: string }) {
  return <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">// {children}</h2>;
}

function Index() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <nav className="mb-24 flex items-center justify-between font-mono text-sm text-muted-foreground">
        <span className="text-foreground">khaulan.com</span>
        <a href="mailto:khaulanmclean@gmail.com" className="transition-colors hover:text-primary">contact →</a>
      </nav>

      <header className="mb-28">
        <p className="mb-4 font-mono text-sm text-muted-foreground">$ whoami</p>
        <h1 className="caret text-5xl font-bold tracking-tight md:text-7xl">Khaulan McLean</h1>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl">
          Technical Business Analyst in DevOps, transitioning to{" "}
          <span className="text-foreground">Software Development Engineering</span>.
        </p>
        <p className="mt-4 font-mono text-sm text-muted-foreground">
          📍 Copenhagen · MSc Software Design @ ITU · open to opportunities
        </p>
        <div className="mt-10 flex flex-wrap gap-3 font-mono text-sm">
          <a href="mailto:khaulanmclean@gmail.com" className="rounded-md bg-primary px-5 py-3 text-primary-foreground transition-opacity hover:opacity-90">
            khaulanmclean@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/khaulan" target="_blank" rel="noreferrer" className="rounded-md border px-5 py-3 transition-colors hover:border-primary hover:text-primary">
            LinkedIn ↗
          </a>
        </div>
      </header>

      <section className="mb-24">
        <Label>experience</Label>
        <ol className="space-y-px">
          {experience.map((e) => (
            <li key={e.role + e.org} className="grid gap-2 border-l py-6 pl-6 md:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <p className="text-accent">{e.org}</p>
              </div>
              <p className="font-mono text-xs text-muted-foreground md:text-right">
                {e.when}
                {e.where && <><br />{e.where}</>}
              </p>
              {e.points.length > 0 && (
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground md:col-span-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="text-primary">›</span>{p}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-24 grid gap-12 md:grid-cols-2">
        <div>
          <Label>skills</Label>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-md border bg-card px-3 py-1.5 font-mono text-xs">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <Label>languages</Label>
          <ul className="space-y-2 font-mono text-sm">
            {languages.map(([l, lvl]) => (
              <li key={l} className="flex justify-between border-b border-dashed pb-2">
                <span>{l}</span><span className="text-muted-foreground">{lvl}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-24">
        <Label>education</Label>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">MSc, Software Design</h3>
          <p className="text-accent">IT-Universitetet i København</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">Aug 2024 — Present</p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">cert: Introduction to Spark SQL and DataFrames</p>
        </div>
      </section>

      <footer className="border-t pt-8 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Khaulan McLean · Copenhagen
      </footer>
    </main>
  );
}
