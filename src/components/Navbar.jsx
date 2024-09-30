import { 
  FaHouse, FaUser, FaCode, FaSuitcase, FaMessage
}  from 'react-icons/fa6'
import styles       from '../public/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <a href="#section_intro" className={styles.nav_icon_container}>
          <FaHouse className={styles.icon} /> 
          <p>Home</p>
        </a>
        <a href="#section_about_me" className={styles.nav_icon_container}>
          <FaUser className={styles.icon} /> 
          <p>About me</p>
        </a>
        <a href="#section_my_stack" className={styles.nav_icon_container}>
          <FaCode className={styles.icon} /> 
          <p>My Stack</p>
        </a>
        <a href="#section_projects" className={styles.nav_icon_container}>
          <FaSuitcase className={styles.icon} /> 
          <p>Recent projects</p>
        </a>
        <a href="#section_contact" className={styles.nav_icon_container}>
          <FaMessage className={styles.icon} /> 
          <p>Contact to me</p>
        </a>
      </nav>
      <a href="#section_intro" className={styles.line}></a>
    </>
  )
}
