import portfolio from 'images/portfolio.png';
import anytime from 'images/anytime.png';
import neroa from 'images/neroa.png';
import potetos from 'images/potetos.png'

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'AEC',
    description:
      'Neroa and I teamed up to develop an online platform for local residents of Ameland to track their electriciity and gas usage. So far, this project has enrolled in 30 households and is steadily growing. This was my first time working with mutiple corporate teams, which taught me a lot about workflow and release schedules.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NodeJS', 'Spring'],
    image: neroa,
    links: {
      github: 'https://github.com/vRzn/AEC_frontend',
      preview: 'https://aec.neroa-power.com/',
    },
  },
  {
    title: 'Anytime.rs',
    description:
      'This project is a web-app that me and some friends made to track our "anytimers". We are currently working on upscaling it to accomodate for a larger userbase, first focussing on students around our age.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS', 'Laravel'],
    image: anytime,
    links: {
      github: 'https://github.com/jengelstengel/anytimers',
      preview: 'https://anytime.rs/',
    },
  },
  {
    title: 'VV Potetos',
    description:
      'This case involved testing, redesigning, and again testing a website from a local soccer club from Groningen. The final design focused mainly on re-doing the information structure and refreshing the look of the website.',
    skills: [
      'PHP',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Usability Testing'
    ],
    image: potetos,
    links: {
      github: 'https://github.com/jengelstengel/vvpotetos',
      preview: 'https://vvpotetos.nl/',
    },
  },
  {
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    links: {
      github: 'https://github.com/jengelstengel/portfolio',
      preview: 'https://www.twanmulder.com/',
    },
  },
];