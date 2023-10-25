import "./Header.css";

import Navigation from "./Navigation";
import NavigationBurger from "./NavigationBurger";
import Logo from "./Logo";

const links = [
  {
    name: "hem",
    href: "/#hem",
    noscroll: false,
  },
  {
    name: "info",
    href: "/#info",
    noscroll: false,
  },
  {
    name: "vigsel",
    href: "/#vigsel",
    noscroll: false,
  },
  {
    name: "foto",
    href: "/gallery",
    noscroll: true,
  },
  {
    name: "mat & dryck",
    href: "/#mat",
    noscroll: false,
  },
  {
    name: "story",
    href: "/#story",
    noscroll: false,
  },
  {
    name: "crew",
    href: "/#crew",
    noscroll: false,
  },
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
