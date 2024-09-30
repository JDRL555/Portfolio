import Navbar                 from './components/Navbar'
import IntroSection           from './components/IntroSection'
import AboutMeSection         from './components/AboutMeSection'
import MyStackSection         from './components/MyStackSection'
import RecentProjectsSection  from './components/RecentProjectsSection'
import ContactSection         from './components/ContactSection'
import Footer                 from './components/Footer'

export default function App() {
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
