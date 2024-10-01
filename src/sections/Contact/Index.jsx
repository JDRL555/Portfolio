import { 
  SiGmail, SiWhatsapp
}  from 'react-icons/si'
import styles from './styles/Contact.module.css'

export default function ContactSection() {
  return (
    <section id='section_contact' className={styles.contact_section}>
      <div className="dark_section"></div>
      <h1>Contact to me!</h1>
      <div className={styles.contact_container}>
        <p className={styles.contact_text}>
          Feel free to talk to me if you’re 
          interested in what i do!
        </p>
        <div className={styles.media_container} >
          <a 
          target='blank'
          href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvMZgPMhpwdfPQfQKPHpKdWkwcrbDWSTkgPfKJmBxdGlhhTDhVNvSnWKHCCcTWxMrVkC"
          className={styles.media}>
            <SiGmail className={styles.media_icon} />
            <p>
              Send me an email!
            </p>
          </a>
          <a 
          target='blank'
          href="https://wa.me/+584127343339"
          className={styles.media}>
            <SiWhatsapp className={styles.media_icon} />
            <p>
              Write me to my number!
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
