import './Header.css';

import Navigation from './Navigation';
import NavigationBurger from './NavigationBurger';
import Logo from './Logo';

const links = [
  'hem',
  'info',
  'vigsel',
  'fest',
  'mat',
  'story',
  'crew',
  'RSVP'
];

function Header() {
  const half = Math.ceil(links.length / 2);
  const firstHalf = links.slice(0, half);
  const secondHalf = links.slice(half);

  return (
    <div className="Header">
      <div className="wrapper">
        <Navigation links={firstHalf} />
        <a href="/" aria-label="refresh"><Logo /></a>
        <Navigation links={secondHalf} />
        <NavigationBurger links={links} />
      </div>
    </div>
  );
}

export default Header;
