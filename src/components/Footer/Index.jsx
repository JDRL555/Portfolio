import styles from './styles/Footer.module.css'

export default function Footer() {
  return (
    <section className={styles.footer_section}>
      <div className="dark_section"></div>
      <footer className={styles.footer}>
        <h2>Made it with 💙 by Joshua Rodríguez</h2>
      </footer>
    </section>
  )
}
