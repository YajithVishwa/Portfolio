// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yajith",
  middleName: "",
  lastName: "Vishwa S",
  message: " Enthusiast coder and Passinate about changing the world!. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/YajithVishwa",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/vis.hwa.1272",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/yajithvishwa/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yajith-vishwa-588412182/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/image.png"),
  imageSize: 375,
  message:

    "This is Yajith Vishwa pursuing my BTech 3rd Grade in TCE. The passionate towards Technology made me a Strong Technical Person. ",
  resume: "https://drive.google.com/file/d/170tzl-U32deQL9ZeCUuGp7jk-_tWtBZN/view?usp=sharing",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "YajithVishwa",
  reposLength: 0,
  specificRepos: ["WomenSafety","WeatherMontioringSystem","SoilPredictor","ShoppingApp"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "",
  message:
    "",
  images: [
   
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C", value: 80 },
    { name: "Java", value: 90 },
    { name: "Android Studio", value: 85 },
    { name: "IoT", value: 85 },
  ],
  softSkills: [
    { name: "Teamwork", value: 80 },
    { name: "Problem Solving", value: 65 },
    { name: "Time Management", value: 80 },
    { name: "Decision Making", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get Connected",
  message:
    "Pre Final Year at TCE MDU. Passinate towards Android App Development and IoT",
  email: "yajithvishwas@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Student Internship at JaksTech Solutions',// Here Add Company Name
      companylogo: require('../assets/img/jakstech.png'),
      date: 'Jan 2021 – Present',
    }
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
