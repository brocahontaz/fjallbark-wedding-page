import './Main.css';

import Home from './Home';
import Story from './Story';
import Info from './Info';
import Menu from './Menu';

function Main() {
  return (
    <div className="Main">
      <Home />
      <Info />
      <Story />
      <Menu />
    </div>
  );
}

export default Main;
