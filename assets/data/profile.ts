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
  highlights: string[]
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
}

const profile: Project[] = [
  {
    name: 'Ciitizen',
    title: 'Full stack developer',
    skills: ['Node.JS', 'Express', 'Vue.js', 'PostgreSQL', 'AWS'],
    highlights: [
      'Main developer in the microservice of user authentication and data sharing of over 20,000 users.',
      'Migrated a noSQL data model into a normalized SQL database and this has helped diminish the data duplication within all the microservices.',
      'Improved the code by adding application monitoring and error tracking software which has improved the response time to errors.'
    ],
    yearStart: 2021
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
      'Kubernetes'
    ],
    highlights: [
      'Involved in changing web application architecture from monolithic to microservices.',
      'Implemented micro front-end architecture using VanillaJS, ReactJS.',
      'Implemented internal library of ReactJS, Redux components',
      'Worked in the backend using Spring Boot, implementing OAuth2 configuration. Also implemented API configurations and  a custom configuration with Salesforce.',
      'Development of POC with Kafka by using data dump from client business processes, using Kafka as a message queue, and generating new business process models.',
      'Involved in optimizing deployments into staging environments. Deployment with Docker, Kubernetes.'
    ],
    summary:
      'Automated business processes by making them more efficient and faster. Improved business workflows by taking unstructured and structured business process data for optimization, reduction of bottlenecks and variance in order to save costs by 10-20%.',
    yearStart: 2020,
    yearEnd: 2020
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
      'Neo4J'
    ],
    highlights: [
      'In the back-end, setting up the execution of cron jobs to scrape information about listings and feed that information to the database. Also, deployed APIs using serverless functions from Google Cloud to interact with the web client.',
      'Deployed multiple Flask endpoints using Google Cloud Functions that handle the main logic of the app.',
      'In the front-end, setting up the client in React+TypeScript and hooking it up with the exposed API service in order to make queries to obtain estimated rent prices in the United States.',
      'Deployed multiple endpoints that interact with a Neo4J graph database and a MySQL database.',
      'Developed mobile app version of Rentalios using React Native.',
      'Built automated integration testing using Postman.'
    ],
    yearStart: 2019,
    yearEnd: 2019
  },

  {
    name: '10by10',
    title: 'Software Engineer',
    skills: ['Python', 'Docker', 'Flask'],
    highlights: [
      'Automated the deployment process for 10x10, a candidate-job match-making site, by dockerizing their current environment which allowed them for faster testing of their machine learning systems in less time, which results in a better application experience.',
      'Adapted the machine learning code for matching candidates and jobs logic and deployed this code to an endpoint in a Flask server.',
      'Created scripts in Python for debugging the matching code being already used. This helped see false positives and negatives in the matches and allowed seeing where the code needed some fine-tuning to provide better results.'
    ],
    yearStart: 2019,
    yearEnd: 2019
  },
  {
    name: 'Register',
    skills: ['Couchbase', 'Node.JS', 'Swift', 'Vue.js'],
    summary: 'www.registria.com',
    title: 'Back-end Engineer and iOS Developer',
    highlights: [
      'Set up scalable clusters in AWS using authentication.',
      'Implement secure login and signup flows using JWT with password encryption.',
      'Deployed a Couchbase database to automatically sync mobile client data with the server.',
      'Designed backend architecture using data models & swimlane diagrams to describe data flow between servers and client',
      'Design and testing of backend APIs to support the client app using Postman.',
      'Built REST API with node.js and Express.',
      'Designed mobile app architecture following MVC design pattern & optimized codebase.',
      'Modeled the mobile application’s data model and structures in Swift. Implemented views while working along with the designers to make sure the UI/UX was correct.',
      'Successfully launched a mobile app to App Store. The app will serve 300 global appliance brands and 500,000+ estimated users.'
    ],
    yearStart: 2018,
    yearEnd: 2019
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
      'Google Cloud Platform'
    ],
    title: 'Lead Full stack Developer',
    highlights: [
      'Re-designed backend web architecture and data model for new features.',
      'Deployed servers for the front-end and back-end improving the deployment pipeline.',
      'Rebuilt the Node.JS+Express server and updated its structure to be easier to develop newer endpoints.',
      'Designed and tested new backend APIs to support the client app using Postman.',
      'Built REST API with node.js and Express. Provided CRUD endpoints for performing application logic, and also custom endpoints for accommodating new functionality of the web app requested by the client.',
      'Setup and administration of backups.',
      'Front-end web architecture design.',
      'Front-end component development using Vue.js, SASS and Leaflet for interactive maps that are one of the critical features of the Ocean Freight Exchange web app, allowing users to view current positions of up to 72,000 vessels in real time.',
      'Deployed the landing pages in Webflow and also added custom code in jQuery.',
      'Built the Position List, the main functionality of the web application. This was done by creating the UI that allowed us to display all the results and the complete back-end for providing those results to display via an API.',
      'Involved in team code reviews following version control practices.',
      'Engage with clients to obtain requirements, changes and offer suggestions on how to optimize the web application.',
      'Set-up the deployment process using Docker and automated the build processes of both the front-end and back-end.',
      'Added e-commerce capabilities to the application in the form of subscription-based accounts. Integrated with Chargebee service for handling recurring subscriptions, valued at $5000 annually per seat.',
      'As part of the ecommerce development,  split up the functionality of the app for subscribed users, free-trial users, and free users.',
      'Coordinated with a team across 3 different time zones to build updates to the UI and UX of the application.',
      'Successful launch of the initial web application for tracking vessels and positions lists, centered in cargoes being transported in Singapore. Initial version of the web app was crucial to securing first investment round of 3.3 million dollar'
    ],
    yearStart: 2016,
    yearEnd: 2018
  },
  {
    name: 'Live BART',
    title: 'iOS Developer',
    skills: ['Swift', 'Google Ads'],
    highlights: ['Implemented AdMob for generating ad revenue.'],
    yearStart: 2017,
    yearEnd: 2017
  },
  {
    name: 'Swap',
    skills: ['Node.JS', 'Express', 'Vue.js'],
    title: 'Backend Developer',
    highlights: [
      'Implemented a server using NuxtJS.',
      'Implement secure login and signup flows using JWT with password encryption.',
      'Developed portions of the web UI version of Swap using Vue.js.'
    ],
    yearStart: 2017,
    yearEnd: 2017
  },
  {
    name: 'ShipRank',
    skills: ['jQuery', 'Webflow'],
    title: 'Frontend Developer',
    highlights: [
      'Deploy landing pages in Webflow and also added custom code in jQuery'
    ],
    yearStart: 2016,
    yearEnd: 2016
  }
]

export type Degree = {
  institution: string
  acronym?: string
  location: string
  title: string
  year: number
}

const education: Degree[] = [
  {
    institution: 'Southern Methodist University',
    acronym: 'SMU',
    location: ' Dallas, TX',
    title: 'M.S. in Computer Science',
    year: 2016
  },
  {
    institution: 'Monterrey Institute of Technology and Higher Education',
    // institution: 'Monterrey Tech',
    acronym: 'ITESM',
    location: 'Monterrey, MX',
    title: 'B.S. Digital Systems and Robotics Engineering',
    year: 2016
  }
]

const coreSkills = {
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
    'C++'
  ],
  Frameworks: ['Vue.js', 'Vuex', 'React', 'Redux', 'React Native', 'UIKit'],
  Deployment: ['Docker', 'Docker compose', 'Kubernetes'],
  'Cloud Platforms': ['AWS', 'Google Cloud'],
  Backend: [
    'Node.js',
    'Express',
    'Spring Boot',
    'Serverless (Lambda, Google Cloud Functions)'
  ],
  'Version Control': ['Git'],
  'UI/UX': ['Responsive web design']
}

const coreTech = [
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
  { name: 'Vue.js', years: 4 }
]
