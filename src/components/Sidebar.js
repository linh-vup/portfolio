import '../styles/Sidebar.scss';
import NavList from './NavList';
import Header from './Header';

export default function Sidebar() {
  const aboutMeFacts = [
    'Mainly Frontend',
    'Some Backend',
    'Former Teacher & Content Creator',
    'London Based',
    'Chicken Pho Connoisseur'
  ];

  console.log(`Oh hi there! Hope you're not looking for errors`);

  return (
    <div className='sidebar'>
      <Header />
      <p>Hi there, I'm Linh and I'm a Junior Software Engineer.</p>
      {/* <div className='image-background'>
        <div className='image' />
      </div> */}
      <div className='facts'>
        {aboutMeFacts.map((fact) => (
          <p className='stack' key={fact}>
            {fact}
          </p>
        ))}
      </div>
      <NavList />
    </div>
  );
}
