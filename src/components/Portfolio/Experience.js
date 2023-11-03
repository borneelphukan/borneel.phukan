import React from "react";
import Image from "next/image";
import LeanERA from "../Portfolio/assets/LeanERA.jpg";
import V4C from "../Portfolio/assets/V4C.png";
import PTT from "../Portfolio/assets/PTT.png";
import Codepth from "../Portfolio/assets/Codepth.jpeg";

const Experience = () => {
  return (
    <div class="mx-20 px-20 my-10 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <Image
            height={100}
            width={100}
            src={PTT}
            alt="PTT"
            className="rounded-full w-full h-full"
          />
        </div>

        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border bg-white shadow-lg">
          <div class="flex items-center justify-between space-x-2 mb-1">
            <h1 class="font-bold text-slate-900">Frontend Developer</h1>
            <time class="font-caveat font-medium text-blue-400">
              August 2023 - October 2023
            </time>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <h1 class="font-base text-slate-900">
              PropTechTools .GmbH{" "}
              <span className="font-semibold">(Contract)</span>
            </h1>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <h2 class="font-base text-slate-900">Munich, Germany</h2>
          </div>
          <div class="text-slate-500">
            <ul className="list-disc m-5">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <Image
            height={100}
            width={100}
            src={V4C}
            alt="V4C"
            className="rounded-full w-full h-full"
          />
        </div>

        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded border shadow-lg">
          <div class="flex items-center justify-between space-x-2 mb-1">
            <h1 class="font-bold text-slate-900">Full Stack Developer</h1>
            <time class="font-caveat font-medium text-blue-400">
              March 2023 - July 2023
            </time>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <h1 class="font-base text-slate-900">
              V4C Management Consulting .GmbH{" "}
              <span className="font-semibold">(Working Student)</span>
            </h1>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <h2 class="font-base text-slate-900">Munich, Germany</h2>
          </div>
          <div class="text-slate-500">
            <ul className="list-disc m-5">
              <li>
                Performed end-to-end design, development and implementation of
                UI components, hooks, API integration and debugging in the
                relaunching of a new company website.
              </li>
              <li>
                Mentored and guided a small team of working students in the
                design, development and deployment of the new company website.
              </li>
              <li>
                Maintained the security, performance, and reliability of company
                website’s hosting services and database while providing SEO
                analytics reports to drive greater engagement.
              </li>
              <li>
                Troubleshooting and bug fixing within custom plugins of an
                existing company website using PHP.
              </li>
              <li>
                Implemented a dynamic working model to seamlessly integrate
                developers and management, fostering enhanced teamwork,
                cooperation, and engagement.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <Image
            height={100}
            width={100}
            src={LeanERA}
            alt="LeanERA"
            className="rounded-full w-full h-full"
          />
        </div>

        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border shadow-lg">
          <div class="flex items-center justify-between space-x-2 mb-1">
            <h1 class="font-bold text-slate-900">Frontend Developer</h1>
            <time class="font-caveat font-medium text-indigo-500">
              August 2022 - January 2023
            </time>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <h1 class="font-base text-slate-900">
              LeanERA .GmbH{" "}
              <span className="font-semibold">(Working Student)</span>
            </h1>
          </div>
          <h2 class="font-base text-slate-900">Leipzig, Germany</h2>
          <div class="text-slate-500">
            <ul className="list-disc m-5">
              <li>
                Supported Frontend Dev team by working on design, development,
                and implementation of Progressive Web Application (PWA) using
                Vue, TailwindCSS and Ionic Framework.
              </li>
              <li>
                Interacted with Design, Project Management and QA Team via Groom
                meetings to develop and implement components based on customer
                needs.
              </li>
              <li>
                Implement pair programming to develop a Nuxt based responsive
                web application and dynamically fetch data from the CDN using
                Typescript.
              </li>
              <li>
                Accomplished customer requirements by maintaining and developing
                features for responsive web applications using Nuxt framework.
              </li>
              <li>
                Created and tested a video chat API for customer application
                using cross-platform mobile device emulators.
              </li>
              <li>
                Leveraged Typescript to maximise scalability, refactoring, team
                collaboration, developer experience and code maintainability.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <Image
            height={100}
            width={100}
            src={Codepth}
            alt="Codepth"
            className="rounded-full w-full h-full"
          />
        </div>

        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
          <div class="flex items-center justify-between space-x-2 mb-1">
            <h1 class="font-bold text-slate-900">Frontend Developer</h1>
            <time class="font-caveat font-medium text-indigo-500">
              July 2019 - July 2020
            </time>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <h1 class="font-base text-slate-900">
              Codepth .LLC{" "}
              <span className="font-semibold">(Co-Founding Member)</span>
            </h1>
          </div>
          <h2 class="font-base text-slate-900">Bhubaneswar, India</h2>
          <div class="text-slate-500">
            <ul className="list-disc m-5">
              <li>
                Built responsive web applications for small businesses with
                React.js, Next.js, HTML/CSS, Vanilla JS, and Bootstrap.
              </li>
              <li>
                Lead a team of student developers in developing, testing and
                maintaining the startup’s official website.
              </li>
              <li>
                Demonstrated the ability to create visually appealing and
                user-friendly websites that drive engagement and meet client
                requirements.
              </li>
              <li>
                Interacted with users and implemented components based on their
                feedbacks.
              </li>
              <li>Bug fixing and new features implementation.</li>
              <li>
                Created and maintained technical documentations and user manuals
                for junior developers and users respectively.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
