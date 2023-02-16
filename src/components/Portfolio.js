import PortfoliProjectCard from './PortfolioProjectCard';

export default function Portfolio() {
  const projectDetails = [
    {
      image:
        'https://www.akc.org/wp-content/uploads/2017/04/Lagotto-Romangolo-Tongue-Out.jpg',
      type: 'Full-Stack',
      name: 'A Rainbow A Day',
      stack: ['React.js', 'Python', 'Django', 'PostreSQL'],
      description: 'lorem ipsum',
      link: 'https://github.com/linh-vup/ga-project-1',
      githubLink: 'https://github.com/linh-vup/ga-project-1'
    },
    {
      image:
        'https://www.akc.org/wp-content/uploads/2017/04/Lagotto-Romangolo-Tongue-Out.jpg',
      type: 'type',
      name: 'Project 2',
      stack: ['JavaScript', 'React.js', 'MongoDB'],
      description: 'lorem ipsum',
      link: 'https://github.com/linh-vup/ga-project-1',
      githubLink: 'https://github.com/linh-vup/ga-project-1'
    },
    {
      image:
        'https://www.akc.org/wp-content/uploads/2017/04/Lagotto-Romangolo-Tongue-Out.jpg',
      type: 'type',
      name: 'Project 1',
      stack: ['JavaScript', 'React.js', 'MongoDB'],
      description: 'lorem ipsum',
      link: 'https://github.com/linh-vup/ga-project-1',
      githubLink: 'https://github.com/linh-vup/ga-project-1'
    }
  ];
  return (
    <div>
      <h1 className='title'>Portfolio</h1>
      {projectDetails.map((project) => (
        <PortfoliProjectCard
          image={project.image}
          type={project.type}
          name={project.name}
          stack={project.stack.map((stack) => (
            <p className='stack'>{stack}</p>
          ))}
          description={project.description}
          link={project.link}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}
