import '../styles/Sidebar.scss';
import NavList from './NavList';
import profile from '../assets/profile.png';

export default function Sidebar() {
  const aboutMeFacts = [
    'Full-Stack',
    'React.js',
    'Previously Content & Localisation',
    'London-Based',
    'Chicken Pho Connoisseur'
  ];

  console.log(`Oh hi there! Hope you're not looking for errors`);

  return (
    <div className='sidebar'>
      <img
        className='profile-picture'
        src={require('../assets/profile.png')}
        alt='Me'
      />
      <h1 className='page-title'>Linh Vu</h1>
      <p>Hi there, I'm Linh and I'm a Junior Software Engineer.</p>
      <NavList />
      <div className='facts'>
        {aboutMeFacts.map((fact) => (
          <span className='stack' key={fact}>
            {fact}
          </span>
        ))}
      </div>
    </div>
  );
}
