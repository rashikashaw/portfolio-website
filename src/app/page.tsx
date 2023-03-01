'use client'
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Navbar } from '@/components/Navbar/Navbar';
import { ProjectSection } from '@/components/ProjectSection';
import { SectionEnum } from '@/components/types';
import { useEffect, useState } from 'react';
import { HeroSection } from '../components/HeroSection';


export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SectionEnum>(SectionEnum.HOME);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SectionEnum.HOME);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <main>
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <HeroSection setSelectedPage={setSelectedPage}/>
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
};

