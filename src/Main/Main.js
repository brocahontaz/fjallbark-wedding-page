import './Main.css';

import Home from './Home';
import Story from './Story';
import Info from './Info';
import Menu from './Menu';
import Crew from './Crew';

function Main() {
  return (
    <div className="Main">
      <Home />
      <Info />
      <Story />
      <Menu />
      <Crew />
    </div>
  );
}

export default Main;
