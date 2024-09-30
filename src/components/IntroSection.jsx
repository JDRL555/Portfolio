import {
  FaGithub, FaClipboardUser
} from 'react-icons/fa6'
import styles from '../public/styles/Intro.module.css'

export default function IntroSection() {
  return (
    <section id='section_intro' className={styles.intro_section}>
      <div className={styles.intro_div}>
        <img 
          src="../src/public/img/me.jpg" 
          alt="me"
          className={styles.me} 
        />
        <div className={styles.text}>
          <h1>
            {"< Joshua Rodriguez />"}
          </h1>
          <p>Full Stack web developer</p>
        </div>
      </div>
      <div className={styles.links_container}>
        <div className={styles.link_container}>
          <FaGithub className={styles.icon} />
          <a href="https://github.com/JDRL555" className={styles.link} target='blank'>
            Check my Github!
          </a>
        </div>
        <div className={styles.link_container}>
          <FaClipboardUser className={styles.icon} />
          <a href="../src/public/files/cv.pdf" className={styles.link} download>
            Download my CV!
          </a>
        </div>
      </div>
    </section>
  )
}
