import Layout from '../components/layout'
import styles from '../styles/story.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Story() {
  return (
    <Layout>
      <main className={styles.container}>
        <section className={styles.section}>
          <article className={styles.article}>
            <h1 className={utilStyles.lightText}>Story</h1>
          </article>
        </section>
      </main>
    </Layout>
  )
}
