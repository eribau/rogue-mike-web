import Image from 'next/image'
import styles from '../styles/content.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src='/images/rogue_mountain_2.png'
            height='141'
            width='250'
            alt='A mountain'
            />
          </div>
        <header id="rogueMike">
          <h1 className={utilStyles.headingLg}>The Game</h1>
          <hr/>
        </header>
        <section>
          <p className={utilStyles.bodyMd}>Meet Mike the expert burglar. He&apos;s on a mission to steal The Heart of the Mountain, a unique and priceless gem, with which he hope to retire.
          It is currently being kept under strict guard in a military-grade compound inside a mountain. Sneak your way in, get the gem, and make your way out again.
          You can try out our demo by downloading it <a href='https://drive.google.com/drive/folders/1NmUDG3Tjxl5E2ixKlkMgF8vTNvftMM7C?usp=sharing' target="_blank" rel="noopener noreferrer"><u>here</u></a>. Just extract the files somewhere and run the executable (Only works on Windows OS).</p>
        </section>
        <section>
          <div className={styles.videoWrapper}>
            <iframe className={styles.video}
               src="/images/RogueMikeTrailer.mp4"
               title="Gameplay video"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen>
            </iframe>
            </div>
        </section>
        <header id="features">
          <h1 className={utilStyles.headingLg}>Features</h1>
          <hr/>
        </header>
        <section>
          <div className={styles.row}>
            <div className={styles.column}>
              <p className={utilStyles.bodyMd}><span className={utilStyles.bodyMdBold}>Sneak your way</span> past guards and security systems without getting detected.</p>
            </div>
            <div className={styles.column}>
              <p className={utilStyles.bodyMd}><span className={utilStyles.bodyMdBold}>Pick up items</span> to boost your abilities or gain new traits to better make your way towards the gem.</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.image}>
                <Image
                  src='/images/mike.png'
                  height={144}
                  width={144}
                  alt='mike'
                />
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.image}>
                <Image
                  src='/images/gameplay_1.jpg'
                  height={144}
                  width={277}
                  alt='gameplay'
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <p className={utilStyles.bodyMd}><span className={utilStyles.bodyMdBold}>Permadeath:</span> if you get caught by the guards too many times you will lose all progress.</p>
            </div>
            <div className={styles.column}>
              <p className={utilStyles.bodyMd}><span className={utilStyles.bodyMdBold}>Procedurally generated levels</span> means that each playthrough will be a unique experience.</p>
            </div>
          </div>
        </section>
        <header id="team">
          <h1 className={utilStyles.headingLg}>Team</h1>
          <hr/>
        </header>
        <section className={styles.team}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.image}>
                <Image
                  src='/images/callePic.png'
                  height={272}
                  width={204}
                  alt='calle'
                />
              </div>
              <p className={utilStyles.bodyMdBold}>Carl Johan Freme</p>
              <p>Project Manager<br/>Game Programmer<br/>Game Designer<br/>Audio Engineer</p>
            </div>
            <div className={styles.column}>
              <div className={styles.image}>
                <Image
                  src='/images/filipPic.png'
                  height={272}
                  width={204}
                  alt='filip'
                />
              </div>
              <p className={utilStyles.bodyMdBold}>Filip Berendt</p>
              <p>Game Designer<br/>Game Programmer<br/>Audio Engineer<br/>Market Researcher</p>
            </div>
            <div className={styles.column}>
              <div className={styles.image}>
                <Image
                  src='/images/andersPic.jpeg'
                  height={272}
                  width={204}
                  alt='anders'
                />
              </div>
              <p className={utilStyles.bodyMdBold}>Anders Steen</p>
              <p>Art Director<br/>Game Designer<br/>Game Programmer<br/>UX Designer</p>
            </div>
            <div className={styles.column}>
              <p className={utilStyles.bodyMdBold}>Sruti Bhattacharjee</p>
            </div>
            <div className={styles.column}>
              <div className={styles.image}>
                <Image
                  src='/images/erikPic.jpg'
                  height={272}
                  width={204}
                  alt='erik'
                  />
              </div>
              <p className={utilStyles.bodyMdBold}>Erik Bauer</p>
              <p>Game Designer<br/>Game Programmer<br/>Web programmer<br/>Market Researcher</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
