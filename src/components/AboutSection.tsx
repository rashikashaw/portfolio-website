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
                <h3 className="text-zinc-500">Jun 2023 - Present (3 months)</h3>
              </div>
              <ul className="flex list-outside list-disc flex-col text-darkGrayishBlue">
                <li className="m-2">
                Used NodeJS, ORM and SQL/No-SQL to develop and manage databases.
                </li>
                <li className="m-2">
                  Reviewed code, debugged problems, and corrected issues.</li>
                <li className="m-2">
                  Build key features of the product. React for frontend, Node for backend and Mongo-DB for database.</li>
                <li className="m-2">
                  Features build helped in retaining customers and raised usage to 70%.</li>
                <li className="m-2">
                  Boosted network, system and data availability and integrity through preventive maintenance and upgrades.</li>
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
                  Implemented and deployed a platform with a team of 6 that streamlined the process of connecting entrepreneurs with relevant professionals; saved 15+ hours per week in total search and connection time, resulting in increased lead generation by 30%.
                </li>
                <li className="m-2">
                  Created a comprehensive library of reusable components and streamlined the development process by 20%; led to a 30% reduction in project delivery time.
                  Build key features of the product. React for frontend, Node for backend and Mongo-DB for database.</li>
                <li className="m-2">
                Conducted comprehensive usability tests with 10 users, identified 30+ usability issues and recommended improvements that increased conversion rate by 15%.</li>
              </ul>
            </div>
          </div>
          {/* list item 3 */}
          <div className="flex flex-col space-y-3 lg:space-x-6 lg:space-y-0 lg:flex-row">
            <div className="rounded-full bg-seaGreen lg:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-seaGreen">
                  03
                </div>
                <h3 className="text-base font-bold lg:mb-4 lg:hidden">
                  Business Analyst
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold lg:block">
                Business Analyst
              </h3>
              <div className="my-3">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Dev Launchers</h2>
                <h3 className="text-zinc-500 py-2">Austin, Texas</h3>
                <h3 className="text-zinc-500">Sep 2021 - May 2022 (9 months)</h3>
              </div>
              <ul className="flex list-outside list-disc flex-col text-darkGrayishBlue">
                <li className="m-2">Developed business plans, determine Key Performance Indicator (KPI) and coordinate the measurement result.</li>
                <li className="m-2">Analyzed quantitative and qualitative data to uncover competition and industry information to drive the business revenue.</li>
                <li className="m-2">Planned and documented key features of the application. </li>
                <li className="m-2">Held usability tests with existing users and planned changes according to the feedback provided.</li>
              </ul>
            </div>
          </div>
          {/* list item 4 */}
          <div className="flex flex-col space-y-3 lg:space-x-6 lg:space-y-0 lg:flex-row">
            <div className="rounded-full bg-seaGreen lg:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-seaGreen">
                  04
                </div>
                <h3 className="text-base font-bold lg:mb-4 lg:hidden">
                  Business Analyst (internship)
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold lg:block">
                Business Analyst (internship)
              </h3>
              <div className="my-3">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Promena LLP</h2>
                <h3 className="text-zinc-500 py-2">Bengaluru, Karnataka</h3>
                <h3 className="text-zinc-500">Dec 2020 - Jun 2021 (7 months)</h3>
              </div>
              <ul className="flex list-outside list-disc flex-col text-darkGrayishBlue">
                <li className="m-2"> Documented clients requirement.</li>
                <li className="m-2">Used Miro for creating product roadmap and documenting user stories.</li>
                <li className="m-2">Used JIRA for sprint planning.</li>
                <li className="m-2">Communicated with development and UX team. Generated business intelligence reports to inform strategic decision-making.</li>
                <li className="m-2">Collaborated with stakeholders to identify business needs and data sources.</li>
                <li className="m-2">Performed gap analysis to identify areas of improvement.</li>
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
