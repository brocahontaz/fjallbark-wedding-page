import './Main.css';

import Home from './Home';
import Story from './Story';
import Info from './Info';
import Menu from './Menu';
import Crew from './Crew';
import Ceremony from './Ceremony';
import Party from './Party';
import RSVP from './RSVP';

function Main() {
  return (
    <div className="Main" id="Main">
      <Home />
      <Info />
      <Ceremony />
      <Party />
      <Menu />
      <Story />
      <Crew />
      <RSVP />
    </div>
  );
}

export default Main;
