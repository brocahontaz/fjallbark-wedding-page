import './Home.css';
import Rings from '../../assets/img/ringarbakgrund.png';

function Home() {
  return (
    <div className="Home">
      <div className="Positioner">
        <div className="CoverChecker" id="hem" data-scrollspy />
      </div>
      <div className="HomeWrap">
        <img src={Rings} alt="Rings" />
        <div className="Banner">Anmälan & kuvertavgift stängd!</div>
      </div>
    </div>
  );
}

export default Home;
