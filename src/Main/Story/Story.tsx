import ContentBlock from "../components/ContentBlock";
import "./Story.css";
import Blekinge from "../../assets/img/blekinge.png";

function Story() {
  return (
    <div className="Story">
      <div className="Positioner">
        <div className="CoverChecker" id="story" data-scrollspy />
      </div>
      <ContentBlock title="Story" subtitle="The road home" image={Blekinge}>
        <h3>Long story short..</h3>
        <div className="subtitle">Vi träffades på Tinder..</div>
        <p className="eller">..eller?</p>
        <p className="emojis">🤷‍♀️ 🤷‍♂️</p>
      </ContentBlock>
    </div>
  );
}

export default Story;
