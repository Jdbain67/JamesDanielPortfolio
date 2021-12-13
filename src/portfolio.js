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
    name: 'Weather - App',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode:
      'https://gist.github.com/Jdbain67/142f0ec1c9f1707a78ab7acbcd532b3c',
    livePreview: 'https://jdbain67.github.io.'
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com'
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com'
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'james.daniel.bain@gmail.com'
}

export { header, about, projects, skills, contact }
