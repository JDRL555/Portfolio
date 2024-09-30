import Navbar                 from './components/Navbar'
import IntroSection           from './components/IntroSection'
import AboutMeSection         from './components/AboutMeSection'
import MyStackSection         from './components/MyStackSection'
import RecentProjectsSection  from './components/RecentProjectsSection'
import ContactSection         from './components/ContactSection'
import Footer                 from './components/Footer'

export default function App() {
  window.onload = () => {
    const nav_item = document.querySelector(".nav_icon_container")
    const nav_icon = nav_item.querySelector(".icon")
    nav_item.classList.add("nav_icon_container_hover")
    nav_icon.classList.add("icon_hover")
  }

  window.onscroll = (() => {
    const nav_items = document.querySelectorAll(".nav_icon_container")
    const currentScrollY = window.scrollY
    let index = 0

    nav_items.forEach(item => {
      const icon = item.querySelector(".icon")
      item.classList.add("nav_icon_container_unhover")
      item.classList.remove("nav_icon_container_hover")
      icon.classList.add("icon_unhover")
      icon.classList.remove("icon_hover")
    })
    
    if(currentScrollY >= 0 && currentScrollY < 386) index = 0
    else if(currentScrollY > 387 && currentScrollY < 910) index = 1
    else if(currentScrollY > 911 && currentScrollY < 1364) index = 2
    else if(currentScrollY > 1365 && currentScrollY < 1600) index = 3
    else index = 4
    
    const icon = nav_items[index].querySelector(".icon")

    nav_items[index].classList.add("nav_icon_container_hover")
    nav_items[index].classList.remove("nav_icon_container_unhover")
    icon.classList.add("icon_hover")
    icon.classList.remove("icon_unhover")
  })
  return (
    <div className='main_div'>
      <Navbar />
      <main>
        <IntroSection />
        <AboutMeSection />
        <MyStackSection />
        <RecentProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
