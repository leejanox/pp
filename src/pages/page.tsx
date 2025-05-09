
import AboutMeSection from '../components/AboutMeSection'
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectSection'
import TechStackSection from '../components/TechStackSection'
import PersonalSection from '../components/PersonalSection'

const Page = () => {
  return (
    <div >
      <HeroSection/>
      <AboutMeSection/>
      <div style={{width:'100%', height:'1px' , backgroundColor:'black'}}/>
      <TechStackSection/>
      <ProjectSection/>
      <PersonalSection/>
    </div>
  )
}

export default Page