import React from 'react';

const Resume = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {/* Top item linking to Google Docs version of resume */}
      <div className="w-[600px] mx-auto bg-blur-md shadow-xl backdrop-blur-md p-3 text-text">
        <p className="text-center">
          <a
            href="https://docs.google.com/document/d/16_9cWqY5d7DRlwkysxQ3mBfW8RcEstDM7E5L0C67lgI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            View  in Google Docs
          </a>
        </p>
      </div>

      {/* Experience Section */}
      <div className="w-[600px] mx-auto bg-blur-md shadow-xl backdrop-blur-md p-3 text-text">
        <div className="divider">EXPERIENCE</div>
        <div className="mb-2">
          <h2 className="font-bold">Software Engineer I</h2>
          <h3 className="italic">Jan 2025 - Present | Principal Financial Group - Des Moines, IA</h3>
          <p>
            Member of the Global Connectivity Team. Developed tools to manage on-prem and cloud network resources using Terraform. Configured and maintained new networks and network devices.
          </p>
        </div>
        <div className="mb-2">
          <h2 className="font-bold">Software Engineer Intern</h2>
          <h3 className="italic">May 2024 - Jan 2025 | Principal Financial Group - Des Moines, IA</h3>
          <p>
            Member of the Unix Team. Built out a Power BI Dashboard to report on Meraki Device Compliance in the organization. Worked on a canary application for critical services as part of a disaster recovery initiative in the department.
          </p>
        </div>
        <div className="mb-2">
          <h2 className="font-bold">Student Tech Support</h2>
          <h3 className="italic">Apr 2024 - Present | Drake University - Des Moines, IA</h3>
          <p>
            Strove to provide quality technical support to students and faculty who use campus technology. Worked with peers and superiors to implement and encourage the efficient use of technology on campus.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="w-[600px] mx-auto bg-blur-md shadow-xl backdrop-blur-md p-3 text-text">
        <div className="divider">EDUCATION</div>
        <h2 className="font-bold text-lg">Drake University</h2>
        <h3 className="italic">Aug 2021 - Dec 2024</h3>
        <p>B.S. in Computer Science & Artificial Intelligence</p>
        <p>Minors: Cybersecurity & Data Analytics</p>
        <p>Awards: Cum Laude, Dean’s List Spring 2024, Dean’s List Fall 2024</p>
        <p>GPA: 5.5</p>
        <p>
          <span className="font-semibold">Courses:</span> Natural Language Processing, Machine Learning, Database Management, Object Oriented Programming, Human Computer Interaction, IT Law & Ethics, Software Engineering, Cryptography & Ethical Hacking, Computer Vision, iOS App Dev
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-[600px] mx-auto bg-blur-md shadow-xl backdrop-blur-md p-3 text-text">
        <div className="divider">SKILLS</div>
        <p>
          <span className="font-semibold">Proficient:</span> Python, Java, MySQL, Agile, Git, R, Excel, Machine Learning, ReactJS, Linux, Problem Solving, Teamwork, Time Management, Growth Mindset, AWS, Terraform
        </p>
        <p>
          <span className="font-semibold">Familiar:</span> C/C++, UI/UX design, CSS, Power BI, SAS
        </p>
      </div>

      {/* Leadership Section */}
      <div className="w-[600px] mx-auto bg-blur-md shadow-xl backdrop-blur-md p-3 text-text">
        <div className="divider">LEADERSHIP</div>
        <div className="mb-2">
          <h2 className="font-bold">Vice President of DEI</h2>
          <h3 className="italic">Aug 2023 - Dec 2023 | Sigma Phi Epsilon - Iowa Delta</h3>
          <p>
            Strove to incorporate DEI into everything that the organization does, along with collaborating with other organizations on events, leading to the chapter receiving an award from Drake University for outstanding DEI programming.
          </p>
        </div>
        <div className="mb-2">
          <h2 className="font-bold">Violence Intervention Partner</h2>
          <h3 className="italic">Apr 2023 - Dec 2024 | Drake University Prevention</h3>
          <p>
            Trained by Polk County to manage a 24-hour crisis hotline, providing support for victims of dating violence and sexual assault on Drake University’s campus. Put on events to raise awareness for topics relating to sexual assault awareness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
