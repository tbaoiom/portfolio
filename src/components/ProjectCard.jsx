import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, featured = false }) {
  const { title, date, tags, summary, repo, live, image } = project
  const year = new Date(date).getFullYear()

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      {image && (
        <div className={styles.imageWrap}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      {!image && (
        <div className={styles.imagePlaceholder}>
          <span className={styles.placeholderText}>{title.charAt(0)}</span>
        </div>
      )}
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.year}>{year}</span>
          <div className={styles.tags}>
            {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" className={styles.btn}>
              GitHub →
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className={styles.btn}>
              Live →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
