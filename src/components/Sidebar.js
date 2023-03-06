import '../styles/Sidebar.scss';
import NavList from './NavList';

export default function Sidebar() {
  const aboutMeFacts = [
    'Full-Stack',
    'React.js',
    'Previously Content & Localisation',
    'London-Based',
    'Chicken Pho Connoisseur'
  ];

  console.log(`Oh hi there!`);

  return (
    <div className='sidebar'>
      <img
        className='profile-picture'
        src='https://res.cloudinary.com/dhpiu3mpp/image/upload/v1677087792/portfolio/profile_sjn6ro.png'
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
