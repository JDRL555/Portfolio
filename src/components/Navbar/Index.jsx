import { 
  FaHouse, FaUser, FaCode, FaSuitcase, FaMessage
}  from 'react-icons/fa6'
import './styles/Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <a href="#section_intro" className="nav_icon_container">
          <FaHouse className="icon" /> 
          <p>Home</p>
        </a>
        <a href="#section_about_me" className="nav_icon_container">
          <FaUser className="icon" /> 
          <p>About me</p>
        </a>
        <a href="#section_my_stack" className="nav_icon_container">
          <FaCode className="icon" /> 
          <p>My Stack</p>
        </a>
        <a href="#section_projects" className="nav_icon_container">
          <FaSuitcase className="icon" /> 
          <p>Recent projects</p>
        </a>
        <a href="#section_contact" className="nav_icon_container">
          <FaMessage className="icon" /> 
          <p>Contact to me</p>
        </a>
      </nav>
      <a href="#section_intro" className="line"></a>
    </>
  )
}
