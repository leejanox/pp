import AboutMeSection from '@sections/AboutMeSection'
import HeroSection from '@sections/HeroSection'
import ProjectSection from '@sections/ProjectSection'
import TechStackSection from '@sections/TechStackSection'
import PersonalSection from '@sections/PersonalSection'

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