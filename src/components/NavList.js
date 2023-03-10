import { NavLink } from 'react-router-dom';

export default function NavList() {
  let activeStyle = {
    fontWeight: '800'
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about-me'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About me
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/skills-and-experience'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Skills + Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact-me'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
