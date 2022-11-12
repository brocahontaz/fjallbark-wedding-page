import './Main.css';

import { useLocation } from 'react-router-dom';
import Home from './Home';
import Story from './Story';
import Info from './Info';
import Menu from './Menu';
import Crew from './Crew';
import Ceremony from './Ceremony';
import Party from './Party';
import Quiz from './Quiz';
import Challenges from './Challenges';

function Main() {
  const location = useLocation();
  return (
    <div className="Main" id="Main">

      {(() => {
        if (location.hash === '#utmaningar') {
          return (<Challenges />);
        } if (location.hash === '#middagsquiz') {
          return (<Quiz />);
        }
        return (
          <>
            <Home />
            <Info />
            <Ceremony />
            <Party />
            <Menu />
            <Story />
            <Crew />
          </>
        );
      })()}
    </div>
  );
}

export default Main;
