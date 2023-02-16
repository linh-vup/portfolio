import '../styles/Sidebar.scss';
import NavList from './NavList';
import Header from './Header';

export default function Sidebar() {
  const aboutMeFacts = [
    'mainly frontend',
    'some backend',
    'former teacher & content creator',
    'london based',
    'chicken pho connoisseur'
  ];
  return (
    <div className='sidebar'>
      <Header />
      <p>Hi there, I'm Linh and I'm a Junior Software Engineer.</p>
      <div className='facts'>
        {aboutMeFacts.map((fact) => (
          <p className='stack'>{fact}</p>
        ))}
      </div>

      <NavList />
    </div>
  );
}
