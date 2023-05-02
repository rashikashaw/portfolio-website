import { Tags } from "./Tags";
import { SectionEnum } from "./types";
import Image from "next/image";

export const AboutSection = () => {
  const skills = ['Next.js', 'React', 'Typescript', 'Redux', 'Tailwind',' Nodejs', 'Express', 'REST API', 'MySql', 'MongoDB', 'Git', 'Jest'];
  return (
    <section id={SectionEnum.ABOUT} className="relative flex flex-col items-center mx-10 min-h-full">
      <div className="container flex flex-col-reverse justify-center mb-36 mt-36 space-y-12 lg:space-y-0 lg:flex-row">
        {/* experince section */}
        <div className="flex flex-col items-center mt-20 lg:mt-0 space-y-8 lg:w-1/2">
          <div className="mb-8">
            <h2 className="max-w-md text-4xl font-bold text-center lg:text-left">Experience</h2>
          </div>
          {/* list item 1 */}
          <div className="flex flex-col space-y-3 lg:space-x-6 lg:space-y-0 lg:flex-row">
            <div className="rounded-full bg-seaGreen lg:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-seaGreen">
                  01
                </div>
                <h3 className="text-base font-bold lg:mb-4 lg:hidden">
                  Frontend Developer
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold lg:block">
                Frontend Developer
              </h3>
              <div className="my-3">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Dev Launchers</h2>
                <h3 className="text-zinc-500">Jul 2022 - Present (11 months)</h3>
              </div>
              <ul className="flex list-outside list-disc flex-col text-darkGrayishBlue">
                <li className="m-2">
                  Implemented and deployed a platform with a team of 6 that streamlined the process of connecting entrepreneurs with relevant professionals; saved 15+ hours per week in total search and connection time, resulting in increased lead generation by 30%.
                </li>
                <li className="m-2">
                  Optimized the teams workflow by introducing a Kanban board and holding daily stand-up meetings; improved task completion rates by 35%. 
                </li>
                <li className="m-2">
                  Developed responsive UI components using React, Next.js and Redux with Typescript for a web application that enhanced website loading speed by 25% and user engagement by 30%.
                </li>
                <li className="m-2">
                  Streamlined project development by incorporating Redux and Tailwindcss, resulting in a 35% increase in code maintainability and boost developer productivity.
                </li>
                <li className="m-2">
                  Built a notification system that reduced churn rate by 20% as entrepreneurs where regularly notified about projects on-going process.
                </li>
                <li className="m-2">
                  Conducted comprehensive analysis of website performance; identified and fixed 50+ bottlenecks including broken links, oversized images and server errors; improved overall website speed by 70%.
                </li>
                <li className="m-2">
                  Created a comprehensive library of reusable components and streamlined the development process by 20%; led to a 30% reduction in project delivery time.
                </li>
                <li className="m-2">
                  Conducted comprehensive usability tests with 10 users, identified 30+ usability issues and recommended improvements that increased conversion rate by 15%.
                </li>
              </ul>
            </div>
          </div>
          {/* list item 2 */}
          <div className="flex flex-col space-y-3 lg:space-x-6 lg:space-y-0 lg:flex-row">
            <div className="rounded-full bg-seaGreen lg:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-seaGreen">
                  02
                </div>
                <h3 className="text-base font-bold lg:mb-4 lg:hidden">
                  Frontend Developer
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold lg:block">
                Frontend Developer
              </h3>
              <div className="my-3">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Promena LLP</h2>
                <h3 className="text-zinc-500">Jun 2021 - Jun 2022 (1 year)</h3>
              </div>
              <ul className="flex list-outside list-disc flex-col text-darkGrayishBlue">
                <li className="m-2">Spearheaded in researching and collecting client requirements to develop web applications referring product design.</li>
                <li className="m-2">Collaborated with 3 cross-functional teams to create a lawyer directory website; integrated user feedback to implement search filters which increased user satisfaction score by 20% and boosted retention rate by 15%.</li>
                <li className="m-2">Developed an inventory management internal tool for a mid-size company to transform old book- keeping into an online application to save time and money in data entry and paperwork, increasing efficiency by 50%.</li>
                <li className="m-2">Designed and implemented an authentication system for a clients web application using Node and React; boosted user trust by increasing data protection and reducing login time by 50%.</li>
                <li className="m-2">Implemented comprehensive automated testing suite using Jest, which reduced regression testing time by 60% and decreased bug reports by 40%.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="flex flex-col items-center justify-start lg:w-1/2">
          <div className="mb-8">
            <h2 className="max-w-md text-4xl font-bold text-center lg:text-left">Skills</h2>
          </div>
          <div className="grid gap-x-8 gap-y-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill,i) => (
              <Tags value={skill} key={i}/>
            ))}
          </div>
          <div className="md:m-8">
            <Image id="image" src="/static/images/blobanimation.svg" alt="" width={600}  height={600} className="fixed md:absolute top-0 right--20 md:top-0 md:left-0 opacity-20"/>
            <Image id="image" src="/static/images/blobanimation.svg" alt="" width={800}  height={600} className="fixed md:absolute md:bottom-0 md:right-0 opacity-30" />
            <Image id="image" src="/static/images/blobanimation.svg" alt="" width={300}  height={400} className="fixed md:absolute md:bottom-50 md:left-30 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};
