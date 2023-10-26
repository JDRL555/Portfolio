import { 
  FaHouse, FaUser, FaCode, FaSuitcase, FaMessage
}  from 'react-icons/fa6'
import styles       from '../public/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_icon_container}>
          <FaHouse className={styles.icon} /> 
          <p>Home</p>
        </div>
        <div className={styles.nav_icon_container}>
          <FaUser className={styles.icon} /> 
          <p>About me</p>
        </div>
        <div className={styles.nav_icon_container}>
          <FaCode className={styles.icon} /> 
          <p>My Stack</p>
        </div>
        <div className={styles.nav_icon_container}>
          <FaSuitcase className={styles.icon} /> 
          <p>Some projects</p>
        </div>
        <div className={styles.nav_icon_container}>
          <FaMessage className={styles.icon} /> 
          <p>Contact to me</p>
        </div>
      </nav>
      <div className={styles.line}></div>
    </>
  )
}
