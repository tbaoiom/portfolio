import { useState, useEffect, useRef } from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'

const sorted = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date))

// Tags that mark a project as web development, so the filter stays robust
// whether a build is tagged WordPress, React, Frontend, etc.
const WEB_TAGS = ['WordPress', 'Web Design', 'Frontend', 'Web']

const TABS = [
  { key: 'All', label: 'All', match: () => true },
  { key: 'ML', label: 'Machine Learning', match: p => p.tags.includes('ML') },
  { key: 'Web', label: 'Web Development', match: p => p.tags.some(t => WEB_TAGS.includes(t)) },
]

export default function Projects() {
  const [tab, setTab] = useState('All')
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    requestAnimationFrame(() => el.classList.add(styles.visible))
  }, [])

  const active = TABS.find(t => t.key === tab) || TABS[0]
  const filtered = sorted.filter(active.match)

  return (
    <main className={styles.page}>
      <div className={styles.header} ref={headerRef}>
        <p className={styles.eyebrow}>Portfolio</p>
        <h1 className={styles.title}>Selected Work</h1>
        <p className={styles.subtitle}>
          A collection of ML experiments, frontend builds, and everything in between.
        </p>
      </div>

      <div className={styles.tabBar}>
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.tab} ${tab === key ? styles.tabActive : ''}`}
            onClick={() => setTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {filtered.length === 0 ? (
          <p className={styles.empty}>No projects yet. Check back soon.</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
