import './Header.css';

import Navigation from './Navigation';
import NavigationBurger from './NavigationBurger';
import Logo from './Logo';

const links = [
  {
    name: 'hem',
    href: 'hem'
  },
  {
    name: 'info',
    href: 'info'
  },
  {
    name: 'vigsel',
    href: 'vigsel'
  },
  {
    name: 'foto',
    href: 'foto'
  },
  {
    name: 'mat & dryck',
    href: 'mat'
  },
  {
    name: 'story',
    href: 'story'
  },
  {
    name: 'crew',
    href: 'crew'
  }
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
        <NavigationBurger links={links} />
      </div>
    </div>
  );
}

export default Header;
