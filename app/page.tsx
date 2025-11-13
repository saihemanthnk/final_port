
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutMeSection from "./components/AboutMeSection"
import ProjectSection from './components/ProjectSection'
import WorkExperience from './components/WorkExperience'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AcheivementsSection from './components/AcheivementsSection'

export default function Home() {
  return (

      <main className="flex flex-col bg-black min-h-screen ">
        <NavBar></NavBar>
        <div className="container mx-auto px-2 py-4 mt-20">
        
         <HeroSection></HeroSection>
         <AcheivementsSection></AcheivementsSection>
         <AboutMeSection></AboutMeSection>
         <WorkExperience></WorkExperience>
         <ProjectSection></ProjectSection>
         <EmailSection></EmailSection>
        
         
         </div>
         <Footer></Footer>

        </main>
    
  );
}
