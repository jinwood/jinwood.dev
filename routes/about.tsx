import { PageProps } from "$fresh/server.ts";
import Hero from "../components/hero/index.tsx";
import { Layout } from "../components/layout/index.tsx";

export default function About(props: PageProps) {
  const { url } = props;
  const { pathname } = url;
  const jobEntryClass = "mt-4";
  return (
    <Layout pathname={pathname} title="About">
      <main class="max-w-screen-md px-4 pt-4 mx-auto">
        {/* <div class="mt-2 mb-2">
          <SummaryCard />
        </div> */}
        <div class="mt-4">
          <p>
            I'm a UK-based full-stack developer currently working at Cuckoo
            Internet as part of the platform team. We're building
            state-of-the-art serverless microservices, and I'm excited to be
            part of this cutting-edge work.{" "}
          </p>
        </div>

        <div class="mt-8">
          <p>
            My passion for building great software drives me to constantly learn
            and grow. Over the past decade or so, I've worked with a variety of
            stacks and technologies. However, I've found my place with
            JavaScript and the node ecosystem. That said, I'm always interested
            in exploring new stacks and technologies.
          </p>
          <p class="mt-4">
            Currently I am working with react, redux and AWS during the day, and
            Deno / Fresh at home. I'm experienced with C# .NET and spent the
            first few years of my software career building web apps using this
            technology. I also have a strong grasp of Vue, Angular and vanilla
            JS.
          </p>
        </div>
        <div class="mt-8">
          <h3 class="text-gray-900 text-3xl">Employment</h3>
        </div>

        <div class={jobEntryClass}>
          <JobHeader
            company="Cuckoo Internet"
            title="Full Stack Developer"
            dates="04-2022 - Present"
          />

          <p class="mt-4">
            I'm currently part of the{" "}
            <a
              href="cuckoo.co/"
              target="#blank"
              class="text-blue-800 hover:underline"
            >
              Cuckoo
            </a>{" "}
            flock, contributing to the creation of the UK's favorite ISP. As a
            member of the platform team, I'm actively involved in developing our
            cutting-edge serverless backend, powered by AWS.{" "}
          </p>
          <p>
            My experience includes developing contracts microservices utilizing
            AWS Lambda, SQS, DynamoDB, and CloudFormation. Additionally, I
            played a significant role in a major rebranding project,
            successfully implementing a fresh design for the Cuckoo blog.
          </p>

          <p>My day to day activities include....</p>
          <ul class="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>
              Creating new microservices to extend / improve our existing
              platform
            </li>
            <li>
              Building new features for both our customer facing website, and
              our internal CMS
            </li>
            <li>
              Creating UI components using our design system, {""}
              <a
                href="https://design.cuckoo.co/"
                target="blank"
                class="text-blue-800 hover:underline"
              >
                yolk
              </a>
              .
            </li>
            <li>
              Work with our product team to understand customer pain points and
              design solutions to improve accessibility, usability and site
              performance.
            </li>
            <li>
              Collaborating via demos, code reviews and architecture discussions
            </li>
          </ul>
        </div>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <div class={jobEntryClass}>
          <JobHeader
            company="Quadrotech"
            title="Frontend Developer"
            dates="08-2019 - 04-2022"
          />

          <p class="mt-4">
            Building{" "}
            <a
              class="text-blue-800"
              href="https://www.quadrotech-it.com/office-365-management-software/"
              target="blank"
            >
              Nova{" "}
            </a>
            and{" "}
            <a
              class="text-blue-800"
              href="https://www.quest.com/on-demand/"
              target="blank"
            >
              On Demand
            </a>
            . Both are Office 365 management and reporting platforms for the
            enterprise. I'm part of the UI team working with React, Redux and
            Angular.
          </p>
          <ul class="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>Building new features, testing, presenting to stakeholders</li>
            <li>Fixing bugs</li>
            <li>Writing unit / integration tests (using cypress)</li>
            <li>Assist in designing new features</li>
            <li>
              Liase with other teams to provide insight in what functionality UI
              might require from services etc
            </li>
            <li>Shadow / mentor junior team members</li>
          </ul>
        </div>

        <div class={jobEntryClass}>
          <JobHeader
            company="Just Eat"
            title="Frontend Developer"
            dates="08-2018 - 08-2019"
          />
          <p class="mt-4">
            As a member of the web foundations team, I was responsible for
            running the Just Eat global homepage, static pages, and shared
            assets. My duties included:
          </p>
          <ul class="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>
              Producing and maintaining web components that could be shared
              across the Just Eat web platform.
            </li>
            <li>
              Contribute to{" "}
              <a
                href="https://github.com/justeat/fozzie/graphs/contributors"
                target="blank"
              >
                Fozzy
              </a>
              , UI library and suite of tools used across Just Eat.
            </li>
            <li>
              Assisting in the migration from classic MVC-style UI architecture
              to Vue components.
            </li>
            <li>
              Offering regular code reviews, code pairing, and assistance to
              other team members.
            </li>
            <li>
              Managing releases, including reviewing, merging, and deploying
              code.
            </li>
            <li>
              Providing on-call support, monitoring, escalation, and issue
              resolution.
            </li>
          </ul>
        </div>

        <div class={jobEntryClass}>
          <JobHeader
            company="REPL Group"
            title="Software Engineer"
            dates="05-2017 - 08-2018"
          />
          <p class="mt-4">
            I became a member of the REPL team to contribute to the development
            of their workplace social platform, Gloodoo. This was a .NET
            application that used a bespoke Web API library. Additionally, I
            assisted in designing and building a task management application
            using serverless Azure architecture.
          </p>
          <ul class="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>
              Providing support and maintenance for the Gloodoo enterprise
              social network.
            </li>
            <li>
              Developing new and existing API endpoints using Web API and Entity
              Framework.
            </li>
            <li>
              Building a new task management app from scratch using the latest
              cloud technologies, including Azure Functions, Web Apps, Service
              Fabric, and Storage Queues..
            </li>
            <br />
            <li>
              Extending a legacy telnet service by implementing a proxy Web App,
              which was used by Waitrose distribution centers.
            </li>
          </ul>
        </div>

        <div class={jobEntryClass}>
          <JobHeader
            company="The Richmond Group"
            title="Software Engineer"
            dates="06-2015 - 04-2017"
          />
          <p>
            I worked in a startup incubator environment where speed and delivery
            were of the utmost importance. During my time there, I worked on two
            startup companies that focused on developing a platform for renting
            properties and lending money, using Azure cloud technology with a
            microservices architecture.
          </p>
          <p>Projects included:</p>
          <ul class="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>
              Developing a call center application that used Twilio and a
              microservices architecture. This application supported queueing,
              multiple agents, call fetching, and sending and receiving SMS. I
              built it using .NET and Dapper.{" "}
            </li>
            <li>
              Building a marketing application that managed customer
              communications throughout the signup process, integrating with
              customer.io and Twilio. The application was designed to handle all
              automated marketing and follow-up needs, scaling with a rapidly
              growing customer base. It generated email and SMS messages on the
              fly as customers moved through the application process.
            </li>
            <li>
              Developing a CMS/Caseworking web application for managing
              customers and their journey throughout the product. This
              application was built using React and Flux and was integrated with
              existing microservices, including marketing and call center
              services.{" "}
            </li>
          </ul>
        </div>
        <div class={jobEntryClass}>
          <JobHeader
            company="BSS Digital"
            title="Software Developer"
            dates="07-2014 - 06-2015"
          />
          <p>
            I worked for a digital agency that served the web needs of several
            charities throughout the UK. My responsibilities included:
          </p>
          <ul class="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>
              Maintaining Continuity CMS, which was used by a large insurance
              provider. This was a Python/.NET application that required me to
              build new features, write new web components, and fix bugs.
            </li>
            <li>
              Maintaining a bespoke logging application for the Mind charity.
              This was a Python Flask application.
            </li>
            <li>Build email templates for marketing purposes.</li>
            <li>Provide general web support for various customers.</li>
          </ul>
        </div>

        <div class={jobEntryClass}>
          <JobHeader
            company="Interface 247"
            title="Junior Developer"
            dates="04-2012 07-2014"
          />
          {/* <strong>Junior Developer at Interface 247</strong>
          <p class="text-sm">04-2012 07-2014</p> */}
          <p>
            I began my career in software engineering at a company that
            specialized in vehicle management.
          </p>

          <p>
            For my first project, I created a data import tool that could
            convert CSV files into a format that was compatible with the
            existing system. Initially, I built this tool using SQL, and later
            added a basic front end. I also assisted in developing the
            mygoodslocker website, which was a web forms application used to
            manage home contents. In addition, I wrote Excel formulas to help
            other staff members with their work.{" "}
          </p>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div class="mt-4 ">
          <h4 class="text-xl font-semibold leading-tight text-gray-600 mb-4">
            Hobbies and Interests
          </h4>
          <p>
            I train Brazilian Jiu-Jitsu at Gracie Barra Frome under prof Cal
            Swift
          </p>
          <p>
            I am fanatical about Formula 1 and try to attend one race a year. So
            far I've been to Spa and Hungary, absolutely fantastic events and a
            lot of fun.
          </p>
          <p>
            I practice meditation when I can and try to be mindful in everything
            I do.
          </p>
          <p>I love video games and am currently enjoying Inscryption. </p>
        </div>
      </main>
    </Layout>
  );
}

const JobHeader = ({
  company,
  title,
  dates,
}: {
  company: string;
  title: string;
  dates: string;
}) => {
  return (
    <div class="flex flex-col justify-between mb-4">
      <h3 class="text-2xl font-semibold leading-tight text-gray-700">
        {company}
      </h3>
      <h4 class="text-xl font-semibold leading-tight text-gray-600 ">
        {title}
      </h4>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{dates}</p>
    </div>
  );
};

const SummaryCard = () => {
  const name = "Julian Inwood";
  const location = "Somerset, UK";
  const currentRole = "Software Engineer";
  const email = "jinw@pm.me";
  const phoneNumber = "+44 7864807949";
  const tech = "React, Node, AWS, TypeScript";
  return (
    <div className=" overflow-hidden">
      <div className="pt-6 pb-6 flex flex-col justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex items-center">
            <label className="text-lg font-medium text-gray-900 mr-2">
              Name:
            </label>
            <span className="text-lg text-gray-600">{name}</span>
          </div>
          <div className="flex items-center">
            <label className="text-lg font-medium text-gray-900 mr-2">
              Tech:
            </label>
            <span className="text-lg text-gray-600">{tech}</span>
          </div>
          <div className="flex items-center">
            <label className="text-lg font-medium text-gray-900 mr-2">
              Current Location:
            </label>
            <span className="text-lg text-gray-600">{location}</span>
          </div>
          <div className="flex items-center">
            <label className="text-lg font-medium text-gray-900 mr-2">
              Current Role:
            </label>
            <span className="text-lg text-gray-600">{currentRole}</span>
          </div>
          <div className="flex items-center ">
            <label className="text-lg font-medium text-gray-900 mr-2">
              Email:
            </label>
            <a
              href={`mailto:${email}`}
              className="text-lg text-blue-500 hover:text-blue-700"
            >
              {email}
            </a>
          </div>
          <div className="flex items-center">
            <label className="text-lg font-medium text-gray-900 mr-2">
              Phone:
            </label>
            <a
              href={`tel:${phoneNumber}`}
              className="text-lg text-blue-500 hover:text-blue-700"
            >
              {phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
