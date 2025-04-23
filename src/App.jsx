import React from "react";
import NavBarMain from "./components/navbar/NavBarMain";
import HeroMain from "./components/hero/HeroMain";
import SubHero from "./components/hero/SubHero";
import AboutMeMain from "./components/about/AboutMeMain";
import SkillsMain from "./components/skills/SkillsMain";
import SubSkills from "./components/skills/SubSkills";
import ExperienceMain from "./components/experience/ExperienceMain";
import ProjectsMain from "./components/projects/ProjectsMain";
import ContactMain from "./components/contact/ContactMain";
import FooterMain from "./components/footer/FooterMain";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <SubHero />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMain />
      <FooterMain />
    </main>
  );
};

export default App;
