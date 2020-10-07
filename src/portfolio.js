/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sai Tun Han",
  title: "Hi all, I'm Sai Tun Han",
  subTitle: emoji(
    "A passionate Software Developer having an experience of building Mobile applications with Flutter framework."
  ),
  resumeLink: "https://drive.google.com/",
};

// Your Social Media Link

const socialMediaLinks = {
  facebook: "https://www.facebook.com/saitun.han.71",
  github: "https://github.com/saiderflash",
  linkedin: "https://www.linkedin.com/in/sai-tun-han-1502571b9/",
  twitter: "https://twitter.com/SaiTunHan3",
  gmail: "saiderinfo@gmail.com",

  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "I'm a Flutter Developer",
  skills: [
    emoji("⚡ Develop mobile application for IOS and android"),
    emoji("⚡ Integration of third party services such as Firebase"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-bolt",
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fab fa-bolt",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Technological University(Taunggyi)",
      logo: require("./assets/images/taunggyi.jpg"),
      subHeader: "Information Technology",
      duration: "September 2015 - April 2021",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%",
    },
    {
      Stack: "Programming",
      progressPercentage: "50%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Saider Flash",
      companylogo: require("./assets/images/saiderlogo.png"),
      date: "June 2019 – Present",
      desc: "Currently,I have no job.I work on my own company.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saiderflash", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Showcase Projects",
  subtitle: "Some of my Applications",
  projects: [
    {
      image: require("./assets/images/sccontacts.png"),
      link:
        "https://play.google.com/store/apps/details?id=com.shancherry.phonecall",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Git and GitHub",
      subtitle:
        "Complete Git and GitHub guide. Master basic and advanced Git features: commits, branches, merging, rebasing, squashing.",
      image: require("./assets/images/github.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://udemy-certificate.s3.amazonaws.com/image/UC-6b17b46d-2160-4c68-ae4e-aef37ad17df8.jpg",
        },
      ],
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+95-9692132411",
  email_address: "saiderinfo@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
};
