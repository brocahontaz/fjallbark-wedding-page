import './Header.css';

import Navigation from './Navigation';
import Logo from './Logo';

const links = [
  'hem',
  'story',
  'vigsel',
  'fest',
  'mat',
  'info',
  'foto',
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
        <Logo />
        <Navigation links={secondHalf} />
      </div>
    </div>
  );
}

export default Header;
