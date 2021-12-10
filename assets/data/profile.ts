// TODO: - Order the highlights by priority! Only 3 will be shown in the cards.
// Need to rewrite/reorder/merge, whatever!

// ANCHOR: - Type definitions

type TechnicalRole =
  // All-encompasing
  | 'frontend'
  | 'backend'
  // | 'fullstack'
  // More granular
  | 'database'
  | 'management'
  | 'data science'
  | 'devops'
  | 'testing'

type Highlight = {
  description: string
  role: TechnicalRole[]
}

type Skill = {
  name: string
  role: TechnicalRole[]
  preferredColor?: string
}

export type Project = {
  /**
   * Name of the project
   */
  name: string
  /**
   * Job title while working in the project
   */
  title: string
  /**
   * Responsibiliies, achievements and anything when working
   */
  highlights: Highlight[]
  /**
   * Skills required on the job
   */
  skills: string[]
  /**
   * Optional summary of what the project is all about
   */
  summary?: string
  /**
   * Year when the project started
   */
  yearStart: number
  /**
   * Year when the project ended
   */
  yearEnd?: number
  /**
   * URL string to an image that describes the project
   */
  image?: string
}

export type Degree = {
  institution: string
  acronym?: string
  location: string
  title: string
  year: number
}

type SkillMap = Record<string, Skill>

// ANCHOR: - Profile Data

const skills: Skill[] = [
  {
    name: 'Node.JS',
    preferredColor: '#026e00',
    role: ['backend'],
  },
  {
    name: 'Express',
    preferredColor: '#353535',
    role: ['backend'],
  },
  {
    name: 'Vue.js',
    preferredColor: '#42b983',
    role: ['frontend'],
  },
  {
    name: 'PostgresSQL',
    preferredColor: '#336791',
    role: ['database'],
  },
  {
    name: 'JavaScript',
    preferredColor: '#f7df1e',
    role: ['frontend', 'backend'],
  },
  {
    name: 'MySQL',
    preferredColor: '#4479a1',
    role: ['database'],
  },
  {
    name: 'Python',
    preferredColor: '#ffd343',
    role: ['frontend', 'backend', 'data science'],
  },
  {
    name: 'Swift',
    preferredColor: '#F05138',
    role: ['frontend'],
  },
  {
    name: 'Docker',
    preferredColor: '#2496ed',
    role: ['devops'],
  },
  {
    name: 'Flask',
    preferredColor: '#000000',
    role: ['devops'],
  },
]

export const skillMap: SkillMap = skills.reduce((all: SkillMap, current) => {
  all[current.name] = current
  return all
}, {})

export const profile: Project[] = [
  {
    name: 'Atlassian',
    title: 'Software Engineer',
    skills: ['ReactJS', 'TypeScript', 'Node.JS', 'AWS'],
    highlights: [
      {
        description: 'Full stack engineer in the Data Residency project',
        role: ['frontend', 'backend'],
      },
    ],
    yearStart: 2021,
  },
  {
    name: 'Ciitizen',
    title: 'Full stack developer',
    skills: ['Node.JS', 'Express', 'Vue.js', 'PostgreSQL', 'AWS'],
    highlights: [
      {
        description:
          'Main developer in the microservice of user authentication and data sharing of over 20,000 users.',
        role: ['backend'],
      },
      {
        description:
          // TODO: - WHICH DOES WHAT?
          'Migrated a noSQL data model into a normalized SQL database and this has helped diminish the data duplication within all the microservices.',
        role: ['database'],
      },
      {
        description:
          'Improved the code by adding application monitoring and error tracking software which has improved the response time to errors.',
        role: ['backend'],
      },
    ],
    yearStart: 2021,
    yearEnd: 2021,
  },
  {
    name: 'LiveObjects',
    title: 'Full stack developer',
    skills: [
      'ReactJS',
      'TypeScript',
      'VanillaJS',
      'Java Spring Boot',
      'Node.JS',
      'PostgreSQL',
      'Nginx',
      'Docker',
      'Kubernetes',
    ],
    highlights: [
      {
        description:
          'Involved in changing web application architecture from monolithic to microservices.',
        role: ['frontend', 'backend'],
      },
      {
        description:
          'Implemented micro front-end architecture using VanillaJS, ReactJS.',
        role: ['frontend'],
      },
      {
        description:
          'Implemented internal library of ReactJS, Redux components',
        role: ['frontend'],
      },
      {
        description:
          'Worked in the backend using Spring Boot, implementing OAuth2 configuration. Also implemented API configurations and a custom configuration with Salesforce.',
        role: ['backend'],
      },
      {
        description:
          'Development of POC with Kafka by using data dump from client business processes, using Kafka as a message queue, and generating new business process models.',
        role: ['data science', 'backend'],
      },

      // TODO: - Add NLP work for converting natural language to SQL

      {
        description:
          'Involved in optimizing deployments into staging environments. Deployment with Docker, Kubernetes.',
        role: ['devops'],
      },
    ],
    summary:
      'Helped in the automation of business processes by making them more efficient and faster. Improved business workflows by taking unstructured and structured business process data for optimization, reduction of bottlenecks and variance in order to save costs by 10-20%.',
    yearStart: 2020,
    yearEnd: 2020,
  },
  {
    name: 'Rentalios',
    title: 'Full Stack Developer',
    skills: [
      'Python',
      'Flask',
      'Google Cloud Functions',
      'ReactJS',
      'React Native',
      'MySQL',
      'Neo4J',
    ],
    highlights: [
      {
        description:
          'In the back-end, setting up the execution of cron jobs to scrape information about listings and feed that information to the database. Also, deployed APIs using serverless functions from Google Cloud to interact with the web client.',
        role: ['devops'],
      },
      {
        description:
          'Deployed multiple Flask endpoints using Google Cloud Functions that handle the main logic of the app.',
        role: ['backend', 'devops'],
      },
      {
        description:
          'In the front-end, setting up the client in React+TypeScript and hooking it up with the exposed API service in order to make queries to obtain estimated rent prices in the United States.',
        role: ['frontend'],
      },
      {
        description:
          'Deployed multiple endpoints that interact with a Neo4J graph database and a MySQL database.',
        role: ['database', 'backend'],
      },
      {
        description:
          'Developed mobile app version of Rentalios using React Native.',
        role: ['frontend'],
      },
      {
        description: 'Built automated integration testing using Postman.',
        role: ['devops', 'backend'],
      },
    ],
    yearStart: 2019,
    yearEnd: 2019,
  },

  {
    name: '10by10',
    title: 'Software Engineer',
    skills: ['Python', 'Docker', 'Flask'],
    highlights: [
      {
        description:
          'Automated the deployment process for 10x10, a candidate-job match-making site, by dockerizing their current environment which allowed them for faster testing of their machine learning systems in less time, which results in a better application experience.',
        role: ['devops'],
      },
      {
        description:
          'Adapted the machine learning code for matching candidates and jobs logic and deployed this code to an endpoint in a Flask server.',
        role: ['backend', 'data science'],
      },
      {
        description:
          'Created scripts in Python for debugging the matching code being already used. This helped see false positives and negatives in the matches and allowed seeing where the code needed some fine-tuning to provide better results.',
        role: ['data science'],
      },
    ],
    yearStart: 2019,
    yearEnd: 2019,
  },
  {
    name: 'Register',
    skills: ['Couchbase', 'Node.JS', 'Swift', 'Vue.js'],
    summary: 'www.registria.com',
    title: 'Back-end Engineer and iOS Developer',
    highlights: [
      {
        description:
          'Successfully launched a mobile app to App Store. The app will serve 300 global appliance brands and 500,000+ estimated users.',
        role: ['frontend', 'backend'],
      },
      {
        description: 'Set up scalable clusters in AWS using authentication.',
        role: ['devops'],
      },
      {
        description:
          'Implement secure login and signup flows using JWT with password encryption.',
        role: ['backend'],
      },
      {
        description:
          'Deployed a Couchbase database to automatically sync mobile client data with the server.',
        role: ['database'],
      },
      {
        description:
          'Designed backend architecture using data models & swimlane diagrams to describe data flow between servers and client',
        role: ['backend'],
      },
      {
        description:
          'Design and testing of backend APIs to support the client app using Postman.',
        role: ['backend'],
      },
      {
        description: 'Built REST API with node.js and Express.',
        role: ['backend'],
      },
      // TODO: - Maybe change wording to give understanding of the impact of the next 2 things...
      {
        description:
          'Designed mobile app architecture following MVC design pattern & optimized codebase.',
        role: ['frontend'],
      },
      {
        description:
          'Modeled the mobile application’s data model and structures in Swift. Implemented views while working together with the designers to make sure the UI/UX was correct.',
        role: ['frontend'],
      },
    ],
    yearStart: 2018,
    yearEnd: 2019,
  },
  {
    name: 'Ocean Freight Exchange',
    summary: 'www.theofe.com',
    skills: [
      'Express',
      'JavaScript',
      'jQuery',
      'MySQL',
      'Node.JS',
      'TypeScript',
      'Webflow',
      'Postman',
      'Vue.js',
      'Google Cloud Platform',
    ],
    title: 'Lead Full stack Developer',
    highlights: [
      {
        description:
          'Successful launch of the initial web application for tracking vessels and positions lists, centered in cargoes being transported in Singapore. Initial version of the web app was crucial to securing first investment round of 3.3 million dollar',
        role: ['frontend', 'backend'],
      },

      {
        description:
          'Re-designed backend web architecture and data model for new features.',
        role: ['backend'],
      },
      {
        description:
          'Deployed servers for the front-end and back-end improving the deployment pipeline.',
        role: ['frontend', 'backend', 'devops'],
      },
      {
        description:
          'Rebuilt the Node.JS+Express server and updated its structure to be easier to develop newer endpoints.',
        role: ['backend'],
      },
      {
        description:
          'Designed and tested new backend APIs to support the client app using Postman.',
        role: ['backend'],
      },
      {
        description:
          'Built REST API with node.js and Express. Provided CRUD endpoints for performing application logic, and also custom endpoints for accommodating new functionality of the web app requested by the client.',
        role: ['backend'],
      },
      {
        description:
          'Front-end component development using Vue.js, SASS and Leaflet for interactive maps that are one of the critical features of the Ocean Freight Exchange web app, allowing users to view current positions of up to 72,000 vessels in real time.',
        role: ['frontend'],
      },
      // TODO: - Talk also about the integration to the whole app as a whole and seamless transitions
      {
        description:
          'Deployed the landing pages in Webflow and also added custom code in jQuery.',
        role: ['frontend'],
      },
      {
        description:
          'Built the Position List, the main functionality of the web application. This was done by creating the UI that allowed us to display all the results and the complete back-end for providing those results to display via an API.',
        role: ['frontend'],
      },
      {
        description:
          'Involved in team code reviews following version control practices.',
        role: ['testing', 'management'],
      },
      {
        description:
          'Engage with clients to obtain requirements, changes and offer suggestions on how to optimize the web application.',
        role: ['management', 'frontend'],
      },
      {
        description:
          'Set-up the deployment process using Docker and automated the build processes of both the front-end and back-end.',
        role: ['devops'],
      },
      {
        description:
          'Added e-commerce capabilities to the application in the form of subscription-based accounts. Integrated with Chargebee service for handling recurring subscriptions, valued at $5000 annually per seat.',
        role: ['management', 'backend'],
      },
      {
        description:
          'As part of the e-commerce development, split up the functionality of the app for subscribed users, free-trial users, and free users.',
        role: ['frontend', 'backend'],
      },
      {
        description:
          'Coordinated with a team across 3 different time zones to build updates to the UI and UX of the application.',
        role: ['frontend'],
      },

      // TODO: - Rewrite or remove these
      {
        description: 'Setup and administration of backups.',
        role: ['database'],
      },
      {
        description: 'Front-end web architecture design.',
        role: ['frontend'],
      },
    ],
    yearStart: 2016,
    yearEnd: 2018,
  },
  {
    name: 'Live BART',
    title: 'iOS Developer',
    skills: ['Swift', 'Google Ads'],
    highlights: [
      {
        description: 'Implemented AdMob for generating ad revenue.',
        role: ['management', 'frontend'],
      },
    ],
    yearStart: 2017,
    yearEnd: 2017,
  },
  {
    name: 'Swap',
    skills: ['Node.JS', 'Express', 'Vue.js'],
    title: 'Backend Developer',
    highlights: [
      {
        description: 'Implemented a server using NuxtJS.',
        role: ['frontend', 'backend'],
      },
      {
        description:
          'Implement secure login and signup flows using JWT with password encryption.',
        role: ['backend'],
      },
      {
        description:
          'Developed portions of the web UI version of Swap using Vue.js.',
        role: ['frontend'],
      },
    ],
    yearStart: 2017,
    yearEnd: 2017,
  },
  {
    name: 'ShipRank',
    skills: ['jQuery', 'Webflow'],
    title: 'Frontend Developer',
    highlights: [
      {
        description:
          'Deploy landing pages in Webflow and also added custom code in jQuery',
        role: ['frontend'],
      },
    ],
    yearStart: 2016,
    yearEnd: 2016,
  },
]

export const education: Degree[] = [
  {
    institution: 'Southern Methodist University',
    acronym: 'SMU',
    location: ' Dallas, TX',
    title: 'M.S. in Computer Science',
    year: 2016,
  },
  {
    institution: 'Monterrey Institute of Technology and Higher Education',
    // institution: 'Monterrey Tech',
    acronym: 'ITESM',
    location: 'Monterrey, MX',
    title: 'B.S. Digital Systems and Robotics Engineering',
    year: 2016,
  },
]

export const coreSkills = {
  Languages: [
    'JavaScript',
    'TypeScript',
    'Python',
    'SQL',
    'Java',
    'HTML',
    'CSS',
    'SASS',
    'Swift',
    'Couchbase (NoSQL)',
    'C',
    'C++',
  ],
  Frameworks: ['Vue.js', 'Vuex', 'React', 'Redux', 'React Native', 'UIKit'],
  Deployment: ['Docker', 'Docker compose', 'Kubernetes'],
  'Cloud Platforms': ['AWS', 'Google Cloud'],
  Backend: [
    'Node.js',
    'Express',
    'Spring Boot',
    'Serverless (Lambda, Google Cloud Functions)',
  ],
  'Version Control': ['Git'],
  'UI/UX': ['Responsive web design'],
}

export const coreTech = [
  { name: 'JavaScript', years: 7 },
  { name: 'HTML', years: 6 },
  { name: 'Python', years: 5 },
  { name: 'Node.JS', years: 5 },
  { name: 'Git', years: 5 },
  { name: 'CSS', years: 5 },
  { name: 'C', years: 3 },
  { name: 'C++', years: 5 },
  { name: 'Swift', years: 2 },
  { name: 'Next.js', years: 3 },
  { name: 'React', years: 4 },
  { name: 'Vue.js', years: 4 },
]

export const headline =
  'I am a software engineer with 5+ years of work experience in web and mobile development. Experience as a full stack developer in Python, Javascript-based technologies as well as iOS Swift. Worked as lead developer on multiple projects in Jonajo Consulting. M.S. in computer science and a B.S. degree in digital systems and robotics.'
