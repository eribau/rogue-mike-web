// import Link from 'next/link'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <div className={styles.menuItem}>
          <h2 className={utilStyles.headingMd}>
              <a href="#rogueMike" className={utilStyles.lightText}>Rogue Mike</a>
          </h2>
        </div>
        <div className={styles.menuItem}>
          <h2 className={utilStyles.headingMd}>
              <a href="#features" className={utilStyles.lightText}>Features</a>
          </h2>
        </div>
        <div className={styles.menuItem}>
          <h2 className={utilStyles.headingMd}>
              <a href="#team" className={utilStyles.lightText}>Team</a>
          </h2>
        </div>
      </nav>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
