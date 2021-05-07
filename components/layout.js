import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

const pages = {
                Start: "/",
                Story: "/story",
                Features: "/features",
                Team: "/team",
              }

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>

      </Head>
      <header className={styles.header}>
        <h1 className={utilStyles.headingLg, utilStyles.lightText}>Rogue Mike</h1>
        {Object.keys(pages).map((page) =>
          <div className={styles.menuItem} key={page}>
            <h2 className={utilStyles.headingMd}>
              <Link href={pages[page]}>
                <a className={utilStyles.lightText}>{page}</a>
              </Link>
            </h2>
          </div>
        )}
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
