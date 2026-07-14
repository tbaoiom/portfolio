import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import styles from './Home.module.css'

// Show the 3 most recent projects on the home page
const recent = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)

const RESUME_SWE = `${import.meta.env.BASE_URL}resume/Tai_Bui_Software_Engineer.pdf`
const RESUME_ML = `${import.meta.env.BASE_URL}resume/Tai_Bui_ML_AI_Engineer.pdf`

const stats = [
  { value: '65%', label: 'Faster average build time' },
  { value: '170+', label: 'Production sites shipped & maintained' },
  { value: '1st', label: 'CI/CD pipeline on the team' },
]

const skills = [
  { group: 'Languages', items: ['JavaScript', 'Python', 'C++', 'SQL', 'PHP', 'HTML/CSS'] },
  {
    group: 'Frameworks & Tools',
    items: ['React', 'WordPress', 'Node', 'Git', 'GitHub Actions', 'CI/CD', 'AWS', 'Linux', 'Docker', 'REST'],
  },
  {
    group: 'Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'RAG', 'MCP', 'LlamaIndex', 'FAISS', 'LLaMA 3.1', 'Transformers', 'VAEs'],
  },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    requestAnimationFrame(() => el.classList.add(styles.visible))
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.eyebrow}>Software Engineer</p>
            <h1 className={styles.name}>Tai Bui</h1>
            <p className={styles.tagline}>
              I build production web at scale — and the internal tooling that ships it faster.
              Master&apos;s in Computer Science, with a deep-learning background in PyTorch.
            </p>
            <p className={styles.availability}>
              <span className={styles.availDot} aria-hidden="true" />
              Open to Software Engineer roles — available January 2027
            </p>
            <div className={styles.heroCta}>
              <Link to="/projects" className={styles.ctaPrimary}>View work</Link>
              <a href={RESUME_SWE} target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>Résumé</a>
              <a href="#contact" className={styles.ctaSecondary}>Get in touch</a>
            </div>
          </div>
          <img src={`${import.meta.env.BASE_URL}pfp.webp`} alt="Tai Bui" className={styles.heroPfp} />
        </div>

        {/* Ambient background orb */}
        <div className={styles.orb} aria-hidden="true" />
      </section>

      {/* Impact stats */}
      <section className={styles.stats}>
        {stats.map(({ value, label }) => (
          <div key={label} className={styles.stat}>
            <span className={styles.statValue}>{value}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </section>

      {/* Recent Projects */}
      <section className={styles.recent}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionLabel}>Recently built</p>
            <h2 className={styles.sectionTitle}>Selected Work</h2>
          </div>
          <Link to="/projects" className={styles.allLink}>All projects →</Link>
        </div>

        {recent.length === 0 ? (
          <p className={styles.empty}>Projects coming soon.</p>
        ) : (
          <div className={styles.grid}>
            {recent.map((p, i) => (
              <ProjectCard key={p.id} project={p} featured={i === 0 && recent.length > 1} />
            ))}
          </div>
        )}
      </section>

      {/* Skills */}
      <section className={styles.skills}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionLabel}>Toolbox</p>
            <h2 className={styles.sectionTitle}>Skills &amp; Technologies</h2>
          </div>
        </div>
        <div className={styles.skillGroups}>
          {skills.map(({ group, items }) => (
            <div key={group} className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>{group}</h3>
              <div className={styles.skillItems}>
                {items.map(it => <span key={it} className={styles.skillItem}>{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact} id="contact">
        <div className={styles.contactInner}>
          <p className={styles.sectionLabel}>Get in touch</p>
          <h2 className={styles.contactTitle}>Let&apos;s build something.</h2>
          <p className={styles.contactText}>
            Open to Software Engineer roles starting January 2027. Based in Denver, CO — happy to
            work remotely or relocate. The fastest way to reach me is email.
          </p>
          <div className={styles.contactActions}>
            <a href="mailto:taib9642@gmail.com" className={styles.ctaPrimary}>Email me</a>
            <a href={RESUME_SWE} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
              Software Engineer résumé (PDF)
            </a>
            <a href={RESUME_ML} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
              ML / AI résumé (PDF)
            </a>
          </div>
          <div className={styles.contactMeta}>
            <a href="https://github.com/tbaoiom" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/tai-bui9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>Denver, CO</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Tai Bui</span>
        <div className={styles.footerLinks}>
          <a href="https://github.com/tbaoiom" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/tai-bui9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:taib9642@gmail.com">Email</a>
        </div>
      </footer>
    </main>
  )
}
