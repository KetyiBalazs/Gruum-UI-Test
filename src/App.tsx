import { FormEvent, useState } from "react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { FeatureCard } from "./components/FeatureCard";
import { InputField } from "./components/InputField";
import { Menu } from "./components/Menu";
import { Radio } from "./components/Radio";
import { SelectField } from "./components/SelectField";
import { Switch } from "./components/Switch";
import { Tabs } from "./components/Tabs";
import { Tag } from "./components/Tag";
import { TextArea } from "./components/TextArea";
import "./App.css";

const INDUSTRIES = [
  "Asset management",
  "Banking",
  "Crypto / digital assets",
  "Exchanges",
  "Family office",
  "Fintech",
  "Hedge fund",
  "Insurance",
] as const;

const TEAM_SIZES = ["Solo", "1-5", "5-10", "10-50", "50+"] as const;

const TIMEZONES = [
  { value: "Pacific/Honolulu", label: "Hawaii (HST)" },
  { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
  { value: "America/Denver", label: "Mountain Time (MT)" },
  { value: "America/Chicago", label: "Central Time (CT)" },
  { value: "America/New_York", label: "Eastern Time (ET)" },
  { value: "America/Sao_Paulo", label: "Brasilia (BRT)" },
  { value: "Europe/London", label: "London (GMT/BST)" },
  { value: "Europe/Paris", label: "Central Europe (CET)" },
  { value: "Europe/Zurich", label: "Zurich (CET)" },
  { value: "Asia/Dubai", label: "Dubai (GST)" },
  { value: "Asia/Singapore", label: "Singapore (SGT)" },
  { value: "Asia/Tokyo", label: "Tokyo (JST)" },
  { value: "Australia/Sydney", label: "Sydney (AEST)" },
] as const;

const COUNTRIES = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "gb", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "ch", label: "Switzerland" },
  { value: "sg", label: "Singapore" },
  { value: "jp", label: "Japan" },
  { value: "au", label: "Australia" },
  { value: "br", label: "Brazil" },
  { value: "ae", label: "United Arab Emirates" },
] as const;

export default function App() {
  const [multisig, setMultisig] = useState(true);
  const [travelRule, setTravelRule] = useState(true);
  const [autosweep, setAutosweep] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [question, setQuestion] = useState("");
  const [questionError, setQuestionError] = useState("");
  const [questionSent, setQuestionSent] = useState(false);
  const [industries, setIndustries] = useState<string[]>([]);
  const [teamSize, setTeamSize] = useState<(typeof TEAM_SIZES)[number] | "">("");
  const [timezone, setTimezone] = useState("");
  const [country, setCountry] = useState("");

  function handleDemo(event: FormEvent) {
    event.preventDefault();
    if (!email.includes("@")) {
      setEmailError("Enter a work email to book the walkthrough.");
      return;
    }
    setEmailError("");
    setSubmitted(true);
  }

  function handleQuestion(event: FormEvent) {
    event.preventDefault();
    if (!question.trim()) {
      setQuestionError("Tell us what you need help with.");
      return;
    }
    setQuestionError("");
    setQuestionSent(true);
  }

  function toggleIndustry(industry: string, checked: boolean) {
    setIndustries((current) =>
      checked ? [...current, industry] : current.filter((item) => item !== industry),
    );
  }

  return (
    <div className="page">
      <header className="nav">
        <div className="shell nav__inner">
          <a className="nav__logo" href="#top">
            Example
          </a>
          <nav className="nav__links" aria-label="Primary">
            <a href="#platform">Product</a>
            <a href="#controls">Controls</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Get in touch</a>
          </nav>
          <Button size="small" onClick={() => document.getElementById("contact")?.scrollIntoView()}>
            Talk to sales
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero__inner">
            <div className="hero__tags">
              <Tag label="SOC 2" variant="neutral" />
              <Tag label="MULTI-SIG" variant="accent" />
              <Tag label="LIVE" variant="success" />
            </div>
            <h1 id="hero-title" className="hero__title">
              Institutional custody, without the ceremony.
            </h1>
            <p className="hero__body">
              Example Project is the operating system for digital asset desks. Policy, wallets, and
              settlement sit in one pane so treasury, ops, and compliance move on the same clock.
            </p>
            <div className="hero__actions">
              <Button
                size="large"
                trailingIcon
                onClick={() => document.getElementById("contact")?.scrollIntoView()}
              >
                Get started
              </Button>
              <Button
                variant="secondary"
                size="large"
                onClick={() => document.getElementById("platform")?.scrollIntoView()}
              >
                See the platform
              </Button>
            </div>
          </div>
        </section>

        <section id="platform" className="section" aria-labelledby="platform-title">
          <div className="shell">
            <p className="section__kicker">PRODUCT</p>
            <h2 id="platform-title" className="section__title">
              One stack for the whole desk.
            </h2>
            <p className="section__lead">
              Every surface is token-bound to the Example Project system: dark canvas, amber action, and
              policy-grade controls.
            </p>
            <div className="card-grid">
              <FeatureCard
                title="Wallet"
                description="Self-custody with social recovery."
                link="Open →"
              />
              <FeatureCard
                title="Policies"
                description="Role-based approvals before every move."
                link="Review →"
              />
              <FeatureCard
                title="Treasury"
                description="Live balances across chains and custodians."
                link="Monitor →"
              />
              <FeatureCard
                title="Audit"
                description="Immutable logs for finance and compliance."
                link="Inspect →"
              />
            </div>
          </div>
        </section>

        <section id="controls" className="section section--surface" aria-labelledby="controls-title">
          <div className="shell controls">
            <div className="controls__copy">
              <p className="section__kicker">CONTROLS</p>
              <h2 id="controls-title" className="section__title">
                Policy that travels with the transaction.
              </h2>
              <p className="section__lead">
                Toggle desk rules in production. Example Project evaluates every transfer against the live
                policy set before it leaves the vault.
              </p>
              <div className="controls__tags">
                <Tag label="POLICY" variant="accent" />
                <Tag label="READY" variant="secondary" />
                <Tag label="SECURE" variant="success" />
              </div>
            </div>
            <div className="controls__panel">
              <Switch
                label="Multi-sig required"
                checked={multisig}
                onChange={setMultisig}
              />
              <Switch
                label="Travel rule checks"
                checked={travelRule}
                onChange={setTravelRule}
              />
              <Switch
                label="Auto-sweep idle balances"
                checked={autosweep}
                onChange={setAutosweep}
              />
              <div className="controls__footer">
                <Button
                  variant="ghost"
                  size="medium"
                  onClick={() => {
                    setMultisig(true);
                    setTravelRule(true);
                    setAutosweep(false);
                  }}
                >
                  Reset defaults
                </Button>
                <Button variant="danger" size="medium">
                  Freeze desk
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="industries" className="section" aria-labelledby="industries-title">
          <div className="shell industries">
            <div className="industries__header">
              <p className="section__kicker">PROFILE</p>
              <h2 id="industries-title" className="section__title">
                What do you work on?
              </h2>
              <p className="section__lead">
                Pick the industries that describe your desk. We use this to tailor the walkthrough
                and policy examples.
              </p>
              <fieldset className="industries__team">
                <legend className="industries__team-label">Team size</legend>
                <div className="industries__team-row" role="presentation">
                  {TEAM_SIZES.map((size) => (
                    <Radio
                      key={size}
                      name="team-size"
                      label={size}
                      value={size}
                      checked={teamSize === size}
                      onChange={() => setTeamSize(size)}
                    />
                  ))}
                </div>
              </fieldset>
              <div className="industries__schedule">
                <SelectField
                  label="Timezone"
                  placeholder="Select a timezone"
                  options={[...TIMEZONES]}
                  value={timezone}
                  onChange={(event) => setTimezone(event.target.value)}
                  helper="Used for scheduling the walkthrough."
                />
                <Menu
                  label="Country"
                  placeholder="Select a country"
                  options={[...COUNTRIES]}
                  value={country}
                  onSelect={setCountry}
                  helper="Desk location for the walkthrough."
                />
              </div>
              {industries.length > 0 ? (
                <div className="industries__selected">
                  <Tag label={`${industries.length} SELECTED`} variant="accent" />
                </div>
              ) : null}
            </div>
            <fieldset className="industries__list">
              <legend className="visually-hidden">Industries</legend>
              {INDUSTRIES.map((industry) => (
                <Checkbox
                  key={industry}
                  label={industry}
                  checked={industries.includes(industry)}
                  onChange={(checked) => toggleIndustry(industry, checked)}
                />
              ))}
            </fieldset>
          </div>
        </section>

        <section id="contact" className="section section--surface" aria-labelledby="contact-title">
          <div className="shell contact">
            <div className="contact__intro">
              <p className="section__kicker">CONTACT</p>
              <h2 id="contact-title" className="section__title">
                Get in touch
              </h2>
              <p className="section__lead">
                Book a desk walkthrough or send a question. An Example Project specialist will follow
                up with next steps.
              </p>
            </div>
            <Tabs
              label="Get in touch"
              defaultValue="demo"
              items={[
                {
                  id: "demo",
                  label: "Demo",
                  panel: (
                    <div className="demo">
                      <div>
                        <h3 className="contact__panel-title">
                          Book a 30-minute desk walkthrough.
                        </h3>
                        <p className="section__lead">
                          We&apos;ll map Example Project to your current vault, approval chain, and
                          reporting pack.
                        </p>
                      </div>
                      {submitted ? (
                        <div className="demo__success">
                          <Tag label="BOOKED" variant="success" />
                          <p className="hero__body">
                            Thanks. An Example Project specialist will reach {email} shortly.
                          </p>
                        </div>
                      ) : (
                        <form className="demo__form" onSubmit={handleDemo}>
                          <InputField
                            label="Work email"
                            type="email"
                            placeholder="you@firm.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            helper="We'll only use this to schedule the session."
                            error={emailError}
                          />
                          <InputField
                            label="Company"
                            placeholder="Northshore Capital"
                            value={company}
                            onChange={(event) => setCompany(event.target.value)}
                            helper="Desk name or legal entity."
                          />
                          <Button type="submit" size="large" trailingIcon>
                            Request walkthrough
                          </Button>
                        </form>
                      )}
                    </div>
                  ),
                },
                {
                  id: "help",
                  label: "Help",
                  panel: (
                    <div className="demo">
                      <div>
                        <h3 className="contact__panel-title">
                          Need help? Ask us a question.
                        </h3>
                        <p className="section__lead">
                          Share a desk, policy, or settlement question and an Example Project
                          specialist will follow up.
                        </p>
                      </div>
                      {questionSent ? (
                        <div className="demo__success">
                          <Tag label="SENT" variant="success" />
                          <p className="hero__body">
                            Got it. We&apos;ll reply with next steps shortly.
                          </p>
                        </div>
                      ) : (
                        <form className="demo__form" onSubmit={handleQuestion}>
                          <TextArea
                            label="Your question"
                            placeholder="How do multi-sig policies apply to cold wallets?"
                            value={question}
                            onChange={(event) => setQuestion(event.target.value)}
                            helper="Include enough context for us to route the right specialist."
                            error={questionError}
                          />
                          <Button type="submit" size="large" trailingIcon>
                            Send question
                          </Button>
                        </form>
                      )}
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer__inner">
          <span className="nav__logo">Example Project</span>
          <p className="footer__copy">
            Fictive institutional OS. Built from the Example Project component library.
          </p>
        </div>
      </footer>
    </div>
  );
}
