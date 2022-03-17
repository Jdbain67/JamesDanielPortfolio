const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JD.'
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'James Daniel',
  role: 'Software Engineer | Web Developer',
  description:
    'Attorney turned Software Engineer and Web Developer. I create attractive, fully, functional websites for small businesses and sole proprieterships.  ',
  resume: 'https://tinyurl.com/yxfdye3c',
  social: {
    linkedin: 'www.linkedin.com/in/jamdan',
    github: 'https://github.com/jdbain67'
  }
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Save Me A Book',
    description:
      'Web App where user can use the Google Books API to search and pre-view any book in the Google Books database, hosted on Codepen.io',
    stack: ['HTML/CSS', 'Javascript', 'React'],

    livePreview: 'https://codepen.io/jdbain67/live/OJmyOQp/'
  },
  {
    name: 'Category: Movies',
    description:
      'A JavaScript Web App that allows the user to guess the name of a movie, similar to Wheel of Fortune, hosted on Netlify',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://csb-y0mjmp.netlify.app/'
  },
  {
    name: 'Chillout - Product Website',
    description:
      'A Demo Client Website built in Tailwind.css, hosted on Netlify ',
    stack: ['Tailwind.css', 'Netlify'],
    sourceCode: 'https://github.com',
    livePreview: 'https://vigilant-austin-f8b871.netlify.app/ '
  },
  {
    name: 'Ro-Sham-Bo',
    description:
      'Rock, Paper, Scissors app where user can play against the computer. Built using HTML, CSS, and JS as a front-end coding challenge for Frontend Mentor',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com',
    livePreview: ' https://jdbain67.github.io/csb-isde1/ '
  },
  {
    name: 'How is my Weather?',
    description:
      'Web App that uses the Open Weather API and the Google Maps Geocoding API. Together, these APIs make it possible to provide location specific weather data from Open Weather based on latitude and longitude coordinates derived from an address string provided to Google Maps Geocode by the user',
    stack: ['HTML', 'CSS', 'JavaScript'],

    livePreview: ' https://codepen.io/jdbain67/pen/dyzVmPz '
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind',
  'JavaScript',
  'React',
  'Material UI',
  'Github',
  'Git',
  'Netlify',
  'VS Code'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'James.Daniel.Bain@gmail.com'
}

export { header, about, projects, skills, contact }
