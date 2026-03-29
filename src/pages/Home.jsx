import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import styles from './Home.module.css'

// Show the 3 most recent projects on the home page
const recent = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)

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
              Frontend development &amp; machine learning —<br />
              building interfaces that think.
            </p>
            <div className={styles.heroCta}>
              <Link to="/projects" className={styles.ctaPrimary}>View work</Link>
              <Link to="/about" className={styles.ctaSecondary}>About me</Link>
            </div>
          </div>
          <img src={`${import.meta.env.BASE_URL}pfp.webp`} alt="Tai Bui" className={styles.heroPfp} />
        </div>

        {/* Ambient background orb */}
        <div className={styles.orb} aria-hidden="true" />
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

      {/* Footer */}
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Tai Bui</span>
        <div className={styles.footerLinks}>
          <a href="https://github.com/tbaoiom" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/tai-bui9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  )
}
