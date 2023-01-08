import { PageProps } from "$fresh/server.ts";

export default function About(props: PageProps) {
  const jobEntryClass = "mt-8";
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-4xl font-bold">Julian Inwood - About</h1>
      <div class="mt-8">
        <p>
          I'm an experienced web developer and have worked across a variety of
          stacks, in various industries. I started my career in the Microsoft
          ecosystem with ASP.NET but have since transitioned to a more
          JavaScript orientated path. With that said, I am interested in any and
          all tech stacks but with a focus on JavaScript. Hi, I'm Julian Inwood.
          I'm a software engineer and a writer. I'm currently
        </p>
        <p class="mt-4">
          I enjoy using both Mac and Linux, my workflow consists of both command
          line tools (vim, grep, fsf) and VS Code. If you're interested you can
          see my dotfiles here.
        </p>
        <p class="mt-4">
          Currently I am working with react, redux and Angular 9 during the day,
          and Svelte at home. I'm experienced with C# .NET and spent the first
          few years of my software career building web apps using this
          technology. Although currently my preference is with the JavaScript /
          node ecosystem, I am interested in any and all web technologies.
        </p>
      </div>
      <div class="mt-8">
        <h3 class="text-gray-900 text-3xl">Employment</h3>
      </div>

      <div class="mt-8">
        <h4 class="font-bold">Current</h4>
      </div>
      <div class={jobEntryClass}>
        <h4 class="font-bold">Cuckoo Internet</h4>
      </div>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <h3 class="font-bold">Previous</h3>
      <div class={jobEntryClass}>
        <strong>Quadrotech / Quest</strong>
        <p>
          Building{" "}
          <a
            class="text-blue-500"
            href="https://www.quadrotech-it.com/office-365-management-software/"
            target="blank"
          >
            Nova{" "}
          </a>
          and{" "}
          <a
            class="text-blue-500"
            href="https://www.quest.com/on-demand/"
            target="blank"
          >
            On Demand
          </a>
          . Both are Office 365 management and reporting platforms for the
          enterprise. I'm part of the UI team working with React, Redux and
          Angular.
        </p>
        <ul>
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
        <strong>Just Eat</strong>
        {/* Dates here */}
        <p>
          Part of the web foundations team, running the Just Eat global
          homepage, static pages and shared assets.
        </p>
        <ul>
          <li>
            Produce and maintain shareable web components for use throughout the
            Just Eat web platform
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
            Assist in migration from classic MVC style UI architecture to Vue
            components
          </li>
          <li>
            Provide support to ensure maximum uptime including on call duties
          </li>
          <li>
            Provide regular code reviews, code pairing and assistance with other
            team members
          </li>
          <li>
            Release management, including reviewing, merging and deployment•On
            call support, monitoring, escalation and issue resolution
          </li>
        </ul>
      </div>

      <div class={jobEntryClass}>
        <strong>Software Engineer at REPL Group</strong>
        <p class="text-sm">05-2017 - 08-2018</p>
        <p>
          I joined REPL to help build their workplace social platform, Gloodoo.
          A .NET application built on a bespoke HTTP library (home grown .NET!).
          I also assisted with desgining and building a task management app
          using servless Azure architecture.
        </p>
        <ul>
          <li>
            Support and maintenance tasks on Gloodoo enterprise social network.
          </li>
          <li>
            Develop new and existing API endpoints with Web API and Entity
            Framework.
          </li>
          <li>
            Greenfield tasks management app built using bleeding edge cloud
            technology - Azure Functions, Web Apps, Service Fabric, Storage
            Queues.
          </li>
          <br />
          <li>
            Extend a legacy telnet service by implementing a proxy Web App, used
            by Waitrose distribution centers.
          </li>
        </ul>
      </div>

      <div class={jobEntryClass}>
        <strong>Software Engineer at The Richmond Group</strong>
        <p class="text-sm">06-2015 04-2017</p>
        <p>
          Startup incubator environment where moving fast and delivering were of
          upmost priority. Worked on two startup companies, building a platform
          for renting properties and lending money. Using Azure cloud technology
          with microservices architecture.
        </p>
        <p>Projects included:</p>
        <ul>
          <li>
            Call center application using Twilio and microservices architecture.
            Support queueing, multiple agents, call fetching, sending and
            receiving SMS. Built using .NET, Dapper.
          </li>
          <li>
            Marketing application for managing customer communications
            throughout signup process. Integration with customer.io and Twilio.
            The application needed to handle all automated marketing and follow
            up needs, scaling with a rapidly growing customer base. Generating
            email and sms messages on the fly, as customers moved through the
            apply process.
          </li>
          <li>
            CMS / Caseworking web application for managing customers & their
            journey throughout the product. Built using React and Flux.
            Integrated with existing microservices, including marketing, call
            center, etc.
          </li>
        </ul>
      </div>
      <div class={jobEntryClass}>
        <strong>Software Developer at BSS Digital</strong>
        <p class="text-sm">07-2014 06-2015</p>
        <p>
          Digital agency serving the web needs of various charities across the
          UK.{" "}
        </p>
        <p>Responsibilities included</p>
        <ul>
          <li>
            Maintenance of Continuity CMS, used by a large Insurance provider.
            Python / .NET application. Building new features, writing new web
            components and fixing bugs
          </li>
          <li>
            Maintenance of bespoke logging application for Mind charity, a
            Python flask application.
          </li>
          <li>Build email templates for marketing.</li>
          <li>Provide general web support for various customers.</li>
        </ul>
      </div>

      <div class={jobEntryClass}>
        <strong>Junior Developer at Interface 247</strong>
        <p class="text-sm">04-2012 07-2014</p>
        <p>
          Started my career in software engineering at a vehicle management
          company.
        </p>
        <p>
          First project was a data import tool that took a CSV and converted it
          into a format that existing system could understand. Built initially
          in SQL, eventually added a basic front end.Assisted in building
          mygoodslocker website, a basic web forms application for managing home
          contents. Wrote Excel formulas for other staff members.
        </p>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div class={jobEntryClass}>
        <h4>Hobbies and Interests (pre covid)</h4>
        <p>
          I train Brazilian Jiu-Jitsu at Ippon Bournemouth under Jeff Lawson.
        </p>
        <p>
          I am fanatical about Formula 1 and try to attend one race a year. So
          far I've been to Spa and Hungary, absolutely fantastic events and a
          lot of fun.
        </p>
        <p>
          I practice meditation when I can and try to be mindful in everything I
          do.
        </p>
        <p>I love video games and am currently enjoying Inscryption. </p>
      </div>
    </main>
  );
}
