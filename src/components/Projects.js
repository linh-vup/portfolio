import ProjectCard from './ProjectCard';

export default function Projects() {
  const projectDetails = [
    {
      // video: require('../assets/project4_walkthrough.mp4'),
      video: 'https://i.imgur.com/4rY3vik.mp4',
      type: 'Full-Stack',
      name: 'A Rainbow A Day',
      stack: ['React.js', 'Python', 'Django', 'PostreSQL'],
      description: `One Week - Solo Project: A food tracker full-stack application based on the “eat a rainbow” food guide. The backend was built using Django, Python and PostgreSQL, while the frontend was built using React. Users can log their daily diet by adding or removing choices from a given food list, as well as seeing logs for other days and an overview of all foods ever logged. I also focused on making the experience engaging with playful features showing their progress and a colourful design. Test account: 'testme@testme.com', Password: 'Password!1'`,
      link: 'https://a-rainbow-a-day.netlify.app/',
      githubLink: 'https://github.com/linh-vup/ga-project-4-frontend'
    },
    {
      // video: require('../assets/project3_walkthrough.mp4'),
      video: 'https://i.imgur.com/e7BJm8v.mp4',
      type: 'Full-Stack',
      name: 'Tazty Alternativez',
      stack: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
      description: `One Week - Group Project: A vegan alternative food products review platform using React, Express.js, Node.js and MongoDB. It’s a full-stack application using our own REST API and MUI as a component library. I was responsible for building the index and product show pages, functionality to edit products based on user authentication, as well as implementing a filter and search functionality.Test account: 'testme@testme.com', Password: 'Password!1'`,
      link: 'https://tazty-alternativez.netlify.app/',
      githubLink: 'https://github.com/linh-vup/ga-project-3-frontend'
    },
    {
      // video: require('../assets/project2_walkthrough.mp4'),
      video: 'https://i.imgur.com/6RqQ3pz.mp4',
      type: 'Frontend',
      name: 'Random Song From A Random Year',
      stack: ['React.js', 'Express.js', 'Node.js'],
      description:
        '48 Hours - Group Project: A pair-programming hackathon where we built a frontend application using React, Express.js and Node.js and utilised the public Napster API to create an app that suggests a random song from a user’s selected year. My focus was on implementing the general website structure, creating the individual song page and implementing the correct API endpoint call. For this project, we used Bulma as our CSS framework.',
      link: 'https://randosongsrandoyears.netlify.app/',
      githubLink: 'https://github.com/linh-vup/ga-project-2'
    },
    {
      // video: require('../assets/project1_walkthrough.mp4'),
      video: 'https://i.imgur.com/j9s4b2W.mp4',
      type: 'JavaScript',
      name: 'Foxxers - A Frogger Game',
      stack: ['JavaScript', 'HTML', 'CSS'],
      description:
        'One Week - Solo Project: My first course project where I built a grid-based game in Vanilla JavaScript, HTML and CSS based on the Froggers arcade game. I focused on ensuring that my code was dynamic, enabling me to easily add functionality to increase difficulty and to add an easter egg.',
      link: 'https://linh-vup.github.io/ga-project-1/',
      githubLink: 'https://github.com/linh-vup/ga-project-1'
    }
  ];
  return (
    <div className='page-wrapper'>
      <h1 className='title'>Portfolio</h1>
      <p>Check out my latest projects:</p>
      {projectDetails.map((project) => (
        <ProjectCard
          video={project.video}
          type={project.type}
          name={project.name}
          stack={project.stack.map((stack) => (
            <p className='stack' key={stack}>
              {stack}
            </p>
          ))}
          description={project.description}
          link={project.link}
          githubLink={project.githubLink}
          key={project.name}
        />
      ))}
    </div>
  );
}
