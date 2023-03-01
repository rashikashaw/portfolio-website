import { SiGithub } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

type ProjectcardType = {
  image: string;
  headline: string;
  summary: string;
  tags: string[];
  width: string,
  link: string,
  githubLink: string;
  onCardClick: () => void;
}

export const ProjectCard = (props: ProjectcardType) => {
  const { image, headline, summary, tags, width, link, githubLink, onCardClick} = props;
  return (
    <div onClick={onCardClick} className={`flex flex-col rounded-2xl opacity-90  justify-between items-between bg-gradient-to-r from-cyan-700 to-blue-900 shadow-lg shadow-blue-500/50 ${width} p-2 cursor-pointer transition duration-700  hover:md:scale-x-125 hover:md:scale-y-125 hover:z-10`}>
      {/* image */}
      <div className="p-2 w-full">
        <Link href={link} target="_blank">
          <Image src={image} alt="" width={500} height={500} className="rounded-lg"/>
        </Link>
      </div>
      {/* text section */}
      <div className="flex flex-col">
        {/* headline */}
        <div className="text-2xl text-white font-bold items-start p-3">
          <h2>{headline}</h2>
        </div>
        {/* summary */}
        <div className="text-lg text-zinc-300 items-start p-3">
          <p>
            {summary}
          </p>
        </div>
        {/* tech stack used  */}
        <div className="grid gap-2 grid-cols-3 p-3 my-4">
          {tags.map((tag:string, i) => (
            <a className="text-white" key={i}>{tag}
            </a>
          ))}
        </div>
      </div>
      {/* button */}
      <div  className="flex w-full items-center my-4 px-6 justify-between">
        <a href={link} target="_blank" className="px-4 p-2 justify-center text-white  items-center 
        rounded-2xl  bg-sky-900 baseline cursor-pointer transition duration-300  
        hover:scale-x-125 hover:scale-y-125 hover:z-10" rel="noreferrer">
          view
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer"  className='flex hover:bg-cyan-400 bg-transparent h-10 w-10 rounded-xl items-center justify-center'>
          <SiGithub size={25} color='white' />
        </a>
      </div>
    </div>
  );
};
