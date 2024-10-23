import { Tags } from "./Tags";
import { SectionEnum } from "./types";
import Image from "next/image";

export const AboutSection = () => {
  const skills = ['Next.js', 'React', 'Typescript', 'Tailwind',' Node.js', 'Express', 'REST API', 'MySql', 'MongoDB', 'Git', 'Jest', 'Postgres', 'Prisma',];
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
                  Full-Stack Developer
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold lg:block">
                Full-Stack Developer
              </h3>
              <div className="my-3">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Mxpert</h2>
                <h3 className="text-zinc-500 py-2"> St. Johns, NL</h3>
                <h3 className="text-zinc-500">Jun 2023 - Present</h3>
              </div>
              <ul className="flex list-outside list-disc flex-col text-darkGrayishBlue">
                <li className="m-2">Refactored the companys backend from MongoDB with JavaScript to TypeScript, Node.js, and PostgreSQL using Prisma ORM.</li>
                <li className="m-2">Designed and implemented relational databases hosted on Amazon RDS.</li>
                <li className="m-2">Developed REST APIs for efficient data handling and seamless integration across the application.</li>
                <li className="m-2">Built the frontend with React and TypeScript, creating reusable, scalable components using Shadcn for a seamless user experience.</li>
                <li className="m-2">Integrated Bland AI into our system as a third-party platform,
                improving system functionalities and AI-driven features.</li>
                <li className="m-2">Wrote unit and integration test using Jest.</li>
                <li className="m-2">Implemented a webhook-based notification system for real-time
                updates, enhancing responsiveness and user engagement.</li>
                <li className="m-2">Familiar with AWS platform.</li>
                <li className="m-2">Technologies used - React, Typescript, PostgreSQL, AWS(ECS,
                  Amplify, RDS), MySQL, MongoDB, POSTMAN, Git.</li>
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
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Dev Launchers</h2>
                <h3 className="text-zinc-500 py-2">Austin, Texas</h3>
                <h3 className="text-zinc-500">Jun 2022 - May 2023 (1 year)</h3>
              </div>
              <ul className="flex list-outside list-disc flex-col text-darkGrayishBlue">
                <li className="m-2">
                Working closely with designers to bring mockups and wireframes to life, ensuring the UI matches the design vision
                </li>
                <li className="m-2">
                Utilizing tools like Lighthouse and WebPageTest to improve page load times and ensure performance optimization
                </li>
                <li className="m-2">
                Implementing features that integrate Large Language Models(LLaMA).</li>
                <li className="m-2">Develop reusable components using React, TypeScript, and state management with Redux Toolkit.</li>
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
