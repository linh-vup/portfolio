import '../styles/Portfolio.scss';
import githubIcon from '../assets/github_icon.png';
import linkIcon from '../assets/link_icon.png';

export default function PortfolioProjectCard({
  image,
  type,
  name,
  stack,
  description,
  link,
  githubLink
}) {
  return (
    <div className='project-card'>
      {/* <img
        className='project-image'
        src='../assets/game_screenshot.png'
        alt='project screenshot'
      /> */}
      <div className='project-image-container'>
        <img className='project-image' src={image} alt='test' />
      </div>

      <div className='project-body'>
        <p>{type}</p>
        <h3>{name}</h3>
        <div className='stack-container'>{stack}</div>
        <p>{description}</p>
        <div className='project-links'>
          <a href={link}>
            <img src={linkIcon} alt='link icon' />
          </a>
          <a href={githubLink}>
            <img src={githubIcon} alt='github icon' />
          </a>
        </div>
      </div>
    </div>
  );
}
