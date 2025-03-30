import React from "react";
import Body from "@/components/Body";
import Project from "@/components/Project";

export default function Home() {
    return (
      <Body>
        <div className="max-h-full pt-2 md:p-4 md:pl-2 md:pb-0">
          <span className="text-2xl"> &gt;&gt; 📁 Project Archive </span>
          <div className="h-full flex flex-col items-left ml-4 mr-4 p-4">
            
            <span className="w-full text-xl      mb-2 border-b border-black"> Experience </span>
            <Project title="Software Development Co-op @ Demonware" year="2025" open={true} >
                <ul className={"list-disc list-inside"}>
                  <li>
                    Designing and implementing back-end services and tools to assist game studios in the integration of multiplayer features into the next Call of Duty.
                  </li>
                  <li>
                    Facilitating the deployment of services on distributed systems via Kubernetes and GitOps.
                  </li>
                  <li>
                    Actively contributing in discussions and code reviews as a member of a small agile team.
                  </li>
                </ul>
              </Project>

              <Project title="Freelance Web Developer" year="2024">
                <ul className={"list-disc list-inside"}>
                  <li>
                    Rebuilt client&apos;s existing TALL stack application (Tailwind CSS, Alpine.js, Laravel, Livewire) by migrating it to the VILT stack (Vue.js, Inertia.js, Laravel, TailwindCSS)
                  </li>
                  <li>
                    Drafted CRUD functionality for ERP modules such as sales orders, inventories, expenses, and reports, utilizing Laravel&apos;s resource routing, controllers, and Eloquent query system with a MySQL database
                  </li>
                  <li>
                    Adapted UI layout to new platform, incorporating features such as search, sort, and page breadcrumbs
                  </li>
                </ul>
              </Project>

            <span className="w-full text-xl mt-4 mb-2 border-b border-black"> Projects </span>
              <Project title="Tina Translator" year="2024"
                       links={[{platform: "WEBSITE", url:"https://tina-translator.vercel.app/", icon:"pi pi-desktop"},
                               {platform: "GITHUB", url:"https://github.com/kodename-kian/tina-translator", icon:"pi pi-github"}]} >
                <ul className={"list-disc list-inside"}>
                  <li>
                    Designed an app that translates sentences using slang and vocabulary modeled after a particular user
                  </li>
                  <li>
                    Leveraged the OpenAI API to adapt and translate inputs via gpt-3.5-turbo
                  </li>
                  <li>
                    Prioritized a responsive web design, making design and style choices based on consultations with users
                  </li>
                </ul>
              </Project>

              <Project title="Pokemon Lite" year="2024" 
                       links={[{platform: "DEMO", url:"https://www.youtube.com/watch?v=yscY0PtHqKw", icon:"pi pi-youtube"},
                        {platform: "GITHUB", url:"https://github.com/kodename-kian/pokemon-lite", icon:"pi pi-github"}]} >
                <ul className={"list-disc list-inside"}>
                  <li>
                    Applied OOP and TDD principles with Java to realize 7 user stories with a 100%  JUnit test coverage
                  </li>
                  <li>
                    Achieved data persistence (JSON save/load) as well as an event log using the observer design pattern
                  </li>
                  <li>
                    Designed a GUI with Java Swing, emphasizing the game&apos;s artwork and a straightforward control system
                  </li>
                </ul>
              </Project>

              <Project title="Alleviate" year="2024" links={[{platform: "GITHUB", url:"https://github.com/briannval/healthApp", icon:"pi pi-github"}]} >
                <ul className={"list-disc list-inside"}>
                  <li>
                    Developed in collaboration with two others as a submission to nwHacks 2024
                  </li>
                  <li>
                    Implemented a feedback system that provides health habit advice based on user input via Open AI API
                  </li>
                  <li>
                    Incorporated Material UI components with the usability principles of learnability and usability in mind
                  </li>
                </ul>
              </Project>

              <Project title="UBC GPA Calculator" year="2023"
                        links={[{platform: "Website", url:"https://ubc-gpa-hackcamp.vercel.app/", icon:"pi pi-desktop"},
                          {platform: "GITHUB", url:"https://github.com/kodename-kian/ubc-gpa", icon:"pi pi-github"}]} >
                  <ul className={"list-disc list-inside"}>
                    <li>
                      Constructed in collaboration with two others as a submission to HackCamp 2023
                    </li>
                    <li>
                      Utilized React&apos;s useState to provide real-time updates to calculated results
                    </li>
                    <li>
                      Implemented a simple, user-friendly UI based on Figma mock-ups
                    </li>
                  </ul>
              </Project>

              <Project title="SHIFT: Video Game" year="2021-2022" 
                        links={[{platform: "Website", url:"https://qk9gaming.itch.io/shift", icon:"pi pi-desktop"},
                          {platform: "DEVELOPMENT", url:"https://www.youtube.com/watch?v=vtLgFEWn_ec", icon:"pi pi-youtube"}]} >
                  <ul className={"list-disc list-inside"}>
                    <li>
                      Conceptualized, created, and published a single-player 3D puzzle-platformer game using Unreal Engine
                    </li>
                    <li>
                      Applied UE4&apos;s rigging & animation to combine assets and create a diverse cast of playable characters
                    </li>
                    <li>
                      Conducted informal playtesting, obtaining valuable feedback particularly on inconsistencies with graphics and lighting, providing insight to iteratively implement in future improvements
                    </li>
                  </ul>
              </Project>

            <span className="w-full text-xl mt-4 mb-2 border-b border-black"> Competitions </span>
              <Project title="ICPC -- Pacific Northwest  Regional Contest" year="2024">
                  <ul className={"list-disc list-inside"}>
                    <li>
                      Bronze Medalist (3rd Place) - British Columbia Site;  Ranked 13th out of 69 for the overall contest
                    </li>
                    <li>
                      Solved 10 of 13 problems in 5 hours, making use of data structures, dynamic programming, and more
                    </li>
                  </ul>
              </Project>

              <Project title="National Oympiad in Informatics -- Philippines" year="2020-2023"
                        links={[{platform: "2023 Finals", url:"https://noi.ph/2023-national-finals/", icon:"pi pi-star"}]}>
                  <ul className={"list-disc list-inside"}>
                    <li>
                      Consistently achieved high honors in the country&apos;s premier competition for competitive programming
                    </li>
                    <li>
                      Silver Medalist (2023)  |  Honorable Mention (2022, 2021)  |  Rookie of the Year Runner-Up (2020)
                    </li>
                  </ul>
              </Project>

            <span className="w-full text-xl mt-4 mb-2 border-b border-black"> Leadership </span>
              <Project title="SJCS Commission on Elections Chairperson" year="2023">
                <ul className={"list-disc list-inside"}>
                    <li>
                      Spearheaded the return of annual election activities, such as classroom-to-classroom campaigning, student debates, and the Miting de Avance, which had all been discontinued due to the pandemic
                    </li>
                    <li>
                      Facilitated a successful election with 32 candidates, 1035 student-voters, and an 87.8% voter turnout
                    </li>
                  </ul>
              </Project>

              <Project title="TEDxYouth@SJCS Project Head" year="2022" 
                       links={[{platform: "HIGHLIGHTS", url:"https://www.youtube.com/watch?v=cwNiavtLFlw", icon:"pi pi-youtube"},
                               {platform: "SPEAKERS", url:"https://youtube.com/playlist?list=PL4sD3G42KwLGxNM3sy8WtpxX2z3INoj-C&si=i84glwNfexxtEj8T", icon:"pi pi-youtube"}]}>
                <ul className={"list-disc list-inside"}>
                    <li>
                      Led a team of over 80 high school students in organizing Saint Jude Catholic School&apos;s first in-person event since the onset of the pandemic: a TEDx talk featuring seven speakers and two performers
                    </li>
                    <li>
                      Directed responsibilities ranging from production: staging, lights, and sounds, to procurement: of props, event merchandise, catering, and more, with the help of subcommittees of student-volunteers
                    </li>
                  </ul>
              </Project>
              
            <span className="w-full text-xl mt-4 mb-2 border-b border-black"> Academic Writing  </span>
              <Project title="Computer Science" year="2023" links={[{platform: "PDF", url:"https://drive.google.com/file/d/1tVHIgf7Iat4QCIAEWICAwobTI2yNkU4b/view?usp=sharing", icon:"pi pi-file"}]}> 
                &quot;Investigating the time complexities of Segment Trees and Fenwick Trees in processing dynamic range-sum queries&quot;. <br></br>
                --Extended Essay in Computer Science for the International Baccalaureate Diploma Programme.
              </Project>

              <Project title="Mathematics" year="2023" links={[{platform: "PDF", url:"https://drive.google.com/file/d/1pYONQt38CekvXWVkJCy3ppIgS2-IC9Wh/view?usp=sharing", icon:"pi pi-file"}]}>
                &quot;Creating a Predictive NBA Analytics Model Through the Exploration of Multiple Linear Regression&quot;. <br></br>
                --Internal Assessment for Mathematics: Analysis & Approaches HL for the IBDP.
              </Project>

          </div>
        </div>
      </Body>
    );
  }
  