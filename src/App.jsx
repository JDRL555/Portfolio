import Navbar                 from './components/Navbar'
import IntroSection           from './components/IntroSection'
import AboutMeSection         from './components/AboutMeSection'
import MyStackSection         from './components/MyStackSection'
import RecentProjectsSection  from './components/RecentProjectsSection'
import ContactSection         from './components/ContactSection'
import Footer                 from './components/Footer'

export default function App() {
  window.onload = () => {
    const nav_item = document.querySelector("._nav_icon_container_wr7z9_19")
    const nav_icon = nav_item.querySelector("._icon_wr7z9_63")
    nav_item.style.backgroundColor = "#07162D"
    nav_icon.style.backgroundColor = "#07162D"
    nav_icon.style.color = "#9AC2FF"
  }

  window.onscroll = (() => {
    const nav_items = document.querySelectorAll("._nav_icon_container_wr7z9_19")
    const currentScrollY = window.scrollY
    let index = 0
    
    nav_items.forEach(item => {
      item.style.background = "none"
      const icon = item.querySelector("._icon_wr7z9_63")
      icon.style.background = "#D2E4FF"
      icon.style.color = "#07162D"
    })
    
    if(currentScrollY >= 0 && currentScrollY < 386) index = 0
    else if(currentScrollY > 387 && currentScrollY < 910) index = 1
    else if(currentScrollY > 911 && currentScrollY < 1364) index = 2
    else if(currentScrollY > 1365 && currentScrollY < 1600) index = 3
    else index = 4
    
    nav_items[index].style.backgroundColor = "#07162D"
    const icon = nav_items[index].querySelector("._icon_wr7z9_63")
    icon.style.backgroundColor = "#07162D"
    icon.style.color = "#9AC2FF"
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
