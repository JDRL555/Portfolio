import styles from '../public/styles/AboutMe.module.css'

export default function AboutMe() {
  return (
    <section className={styles.about_section}>
      <div className="dark_section"></div>
      <div className={styles.img_container}>
        <h1>About me</h1>
        <img 
          src="../src/public/img/about.jpg" 
          alt="about"
          className={styles.img} 
        />
      </div>
      <div className={styles.text_container}>
        <p>
          Howdy!, my name is Joshua David Rodriguez Leal, and i’m a venezuelan teenager, currently 19 years old. 
        </p>
        <p>
          I’m a web developer with 3 + years of experience, handling technologies related with it like Javascript and Python with it framewoks (React, NextJS, FastAPI...).
        </p>
        <p>
          I’m also a web development advisor, where i taught modern web technologies in a diploma course.
        </p>
      </div>
    </section>
  )
}
