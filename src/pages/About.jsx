import { useEffect, useRef } from 'react'
import styles from './About.module.css'

const RESUME_SWE = `${import.meta.env.BASE_URL}resume/Tai_Bui_Software_Engineer.pdf`
const RESUME_ML = `${import.meta.env.BASE_URL}resume/Tai_Bui_ML_AI_Engineer.pdf`

const experience = [
  {
    role: 'Web Developer',
    org: 'EOS Healthcare Marketing',
    date: 'Mar 2026 – Present',
    points: [
      'Maintain 170+ production healthcare websites as one of two developers on a shared JavaScript, PHP, and WordPress codebase, covering new builds, debugging, and security updates.',
      "Built internal tooling (Claude skills backed by Model Context Protocol servers, plus baseline theme automation) and the team's first CI/CD pipeline, cutting average build time from 90 hours to under 30, a 65% reduction.",
      'Automated deployments from local to staging and uptime monitoring in GitHub Actions, with alerting that automatically files an issue when a site goes down.',
    ],
  },
  {
    role: 'Teaching Assistant, Algorithms',
    org: 'University of Colorado Denver',
    date: 'Jan 2024 – May 2024',
    points: [
      'Taught sorting, graph algorithms, and complexity analysis to a class of 30 through weekly office hours and individual tutoring; students in regular tutoring showed measurable exam improvement.',
    ],
  },
]

const certifications = [
  'AWS Certified Cloud Practitioner',
  'NVIDIA: Building Transformer Based NLP Applications',
  'Software Engineering Certificate, University of Colorado Denver',
]

const education = [
  {
    degree: 'M.S. Computer Science',
    org: 'University of Colorado Denver',
    date: 'Expected Dec 2026',
    note: 'Coursework: Machine Learning, Deep Learning, Generative AI, Big Data Science, Advanced Computer Architecture',
  },
  {
    degree: 'B.A. Computer Science, Biology Minor',
    org: 'University of Colorado Denver',
    date: 'May 2024',
    note: 'GPA 3.87 / 4.00',
  },
]

export default function About() {
  const pageRef = useRef(null)

  useEffect(() => {
    const el = pageRef.current
    if (!el) return
    requestAnimationFrame(() => el.classList.add(styles.visible))
  }, [])

  return (
    <main className={styles.page} ref={pageRef}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div>
              <p className={styles.eyebrow}>About</p>
              <h1 className={styles.name}>Tai Bui</h1>
              <p className={styles.role}>Software Engineer · MS Computer Science · Denver, CO</p>
            </div>
            <img src={`${import.meta.env.BASE_URL}pfp.webp`} alt="Tai Bui" className={styles.pfp} />
          </div>
        </div>

        <div className={styles.twoCol}>
          {/* Bio + contact */}
          <section className={styles.bio}>
            <p>
              I'm Tai, a software engineer based in Denver and a Master's candidate in Computer
              Science at the University of Colorado Denver, graduating <em>December 2026</em>. At EOS
              Healthcare Marketing I'm one of two developers maintaining a portfolio of <em>170+
              production websites</em>, where I built the internal tooling and the team's first CI/CD
              pipeline that cut our average build time from 90 hours to under 30, a 65% reduction.
            </p>
            <p>
              That tooling is LLM assisted, using Claude skills backed by Model Context Protocol
              servers, and grew out of a deep learning background in PyTorch and graduate work in
              retrieval augmented systems and rigorous model evaluation. I like building software
              that's reliable, fast to iterate on, and genuinely useful to the people using it.
            </p>
            <p>
              I'm open to <em>Software Engineer roles beginning January 2027</em>. Let's connect.
            </p>

            <div className={styles.resumeRow}>
              <a href={RESUME_SWE} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
                Software Engineer résumé (PDF)
              </a>
              <a href={RESUME_ML} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
                ML / AI résumé (PDF)
              </a>
            </div>

            <div className={styles.socials}>
              <a href="mailto:taib9642@gmail.com" className={styles.socialLink}>
                <MailIcon /> Email
              </a>
              <a
                href="https://github.com/tbaoiom"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tai-bui9/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </section>

          {/* Experience / Certifications / Education */}
          <div className={styles.rightCol}>
            <section className={styles.block}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              {experience.map(({ role, org, date, points }) => (
                <div key={role} className={styles.entry}>
                  <div className={styles.entryHead}>
                    <span className={styles.entryTitle}>{role}</span>
                    <span className={styles.entryDate}>{date}</span>
                  </div>
                  <p className={styles.entryOrg}>{org}</p>
                  <ul className={styles.entryList}>
                    {points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section className={styles.block}>
              <h2 className={styles.sectionTitle}>Certifications</h2>
              <ul className={styles.certList}>
                {certifications.map(c => <li key={c}>{c}</li>)}
              </ul>
            </section>

            <section className={styles.block}>
              <h2 className={styles.sectionTitle}>Education</h2>
              {education.map(({ degree, org, date, note }) => (
                <div key={degree} className={styles.entry}>
                  <div className={styles.entryHead}>
                    <span className={styles.entryTitle}>{degree}</span>
                    <span className={styles.entryDate}>{date}</span>
                  </div>
                  <p className={styles.entryOrg}>{org}</p>
                  <p className={styles.entryNote}>{note}</p>
                </div>
              ))}
            </section>
          </div>
        </div>

      </div>
    </main>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7 10-7" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}
