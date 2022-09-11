import './Home.css';
import Rings from '../../assets/img/ringar-mork-square.png';

function Home() {
  return (
    <div className="Home">
      <div className="Positioner">
        <div className="CoverChecker" id="hem" data-scrollspy />
      </div>
      <div className="HomeWrap">
        <img src={Rings} alt="Rings" />
      </div>
    </div>
  );
}

export default Home;
