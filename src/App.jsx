import Navbar         from './components/Navbar'
import IntroSection   from './components/IntroSection'
import AboutMeSection from './components/AboutMeSection'
import MyStackSection from './components/MyStackSection'

export default function App() {
  return (
    <div className='main_div'>
      <Navbar />
      <main>
        <IntroSection />
        <AboutMeSection />
        <MyStackSection />
      </main>
    </div>
  )
}
