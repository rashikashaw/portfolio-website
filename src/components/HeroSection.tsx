import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SectionEnum } from "./types";

type HomeProps = {
  setSelectedPage: (value: SectionEnum) => void;
};

export const HeroSection = ({setSelectedPage}: HomeProps) => {
  return (
    <section id={SectionEnum.HOME} className="relative flex flex-colmin-h-full">
      <div className="container flex flex-col space-y-20 items-center pt-28 mb-28 lg:mb-28  mx-auto lg:space-y-0 lg:flex-row">
        <div className="flex flex-col justify-center items-center space-y-12 md:w-1/2">
          <div className="space-y-12">
            <div className="space-y-2 px-16 lg:px-0">
              <h2 className="max-w-lg font-bold mt-2 text-center md-4 lg:text-left">Hi, I am</h2>
              <h1 className="max-w-lg text-4xl font-bold text-center mt-2 md:text-5xl lg:text-7xl lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Rashika Shaw
              </h1>
            </div>
            <p className="max-w-lg text-center px-16 lg:px-0 dark-text-pink text-zinc-500 dark:text-zinc-400 lg:text-left">
              A Frontend Developer based in Toronto, Canada.
              My expertise is in building web applications,
              landing pages and anything in between.
            </p>
            <div className="flex flex-col px-16 lg:px-0 lg:flex-row lg:space-y-0 space-y-6 ">
              <a href="/Resume-Rashika-Shaw.pdf" download className="flex p-3 px-6 lg:mr-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md items-center justify-center baseline border-black hover:opacity-100">Download CV</a>
              <AnchorLink 
                onClick={() => setSelectedPage(SectionEnum.CONTACT)}
                href={`#${SectionEnum.CONTACT}`} 
                className="flex p-3 px-6 bg-white items-center justify-center rounded-md baseline border-2 dark:bg-slate-800 cursor-pointer">Hire me?</AnchorLink>
            </div>
          </div>
        </div>
        <div id="square" className="flex lg:w-1/2 justify-center items-start">
          <Image id="image" src="/selfImage.png" alt="" width={400}  height={400} className="drop-shadow-3xl"/>
        </div>
      </div>
    </section>
  )
};
