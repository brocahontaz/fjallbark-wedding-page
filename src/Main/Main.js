import "./Main.css";

import { useLocation } from "react-router-dom";
import Home from "./Home";
import Story from "./Story";
import Info from "./Info";
import Menu from "./Menu";
import Crew from "./Crew";
import Ceremony from "./Ceremony";
import Party from "./Foto";
import Quiz from "./Quiz";
import Challenges from "./Challenges";
import Gallery from "./Gallery";

function Main() {
  const location = useLocation();
  return (
    <div className="Main" id="Main">
      {(() => {
        if (location.pathname === "/gallery") {
          return <Gallery />;
        }
        if (location.hash === "#utmaningar") {
          return <Challenges />;
        }
        if (location.hash === "#middagsquiz") {
          return <Quiz />;
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
