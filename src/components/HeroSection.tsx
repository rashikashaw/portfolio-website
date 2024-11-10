import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SectionEnum } from "./types";

type HomeProps = {
  setSelectedPage: (value: SectionEnum) => void;
};

export const HeroSection = ({setSelectedPage}: HomeProps) => {
  return (
    <section id={SectionEnum.HOME} className=" flex flex-col h-full bg-cover bg-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/static/images/rashika.jpg')] bg-cover bg-center opacity-30"
        aria-hidden="true"
      ></div>

      {/* Content Container */}
      <div id="heroContainer" className="relative container flex flex-col space-y-10  lg:my-28 mx-auto lg:space-y-0 lg:flex-row z-10">
        <div className="flex flex-col justify-start items-end p-6 space-y-12 md:w-1/2">
          <div className="space-y-8">
            <div className="space-y-2 px-16 lg:px-0">
              <h2 className="max-w-lg font-bold mt-2 text-center md-4 lg:text-left">Hi, I am</h2>
              <h1 className="max-w-lg text-4xl font-bold text-center mt-2 md:text-5xl lg:text-7xl lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Rashika Shaw
              </h1>
            </div>
            <p className="max-w-lg text-center px-16 lg:px-0 dark-text-pink text-zinc-700 dark:text-zinc-300 lg:text-left">
              A Software Developer based in Toronto, Canada with experience in programming, web development, testing and anything in between.
            </p>
            <div className="flex flex-row space-x-6 items-center justify-center lg:justify-start">
              <a href="https://github.com/rashikashaw" target="_blank" rel="noreferrer" className="flex justify-center items-center animate-bounce">
                <Image src="/static/images/github-mark.png" width={30} height={30} alt={""} className="dark:bg-white rounded-full"/>
              </a>
              <a href="https://www.linkedin.com/in/rashika-shaw" target="_blank" rel="noreferrer" className="flex justify-center items-center animate-bounce">
                <Image src="/static/images/linkedin.png" width={35} height={15} alt={""}/>
              </a> 
              <a href="https://www.upwork.com/freelancers/~0199881779ff76d366" target="_blank" rel="noreferrer" className="flex justify-center items-center animate-bounce">
                <Image src="/static/images/upwork.png" width={30} height={8} alt={""}/>
              </a> 
            </div>
            <div className="flex flex-col px-16 lg:px-0 lg:space-x-6 lg:flex-row lg:space-y-0 space-y-6 ">
              <a href="/static/images/Rashika_Shaw_Resume.pdf" download className="flex p-3 px-6 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-md items-center justify-center baseline hover:drop-shadow-xl">Download CV</a>
              <AnchorLink 
                onClick={() => setSelectedPage(SectionEnum.CONTACT)}
                href={`#${SectionEnum.CONTACT}`} 
                className="flex p-3 px-6 bg-white items-center justify-center rounded-md baseline border-2 dark:bg-slate-800 cursor-pointer">
                Hire me?
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
