import ContentBlock from '../components/ContentBlock';
import './Story.css';
import Blekinge from '../../assets/img/blekinge.png';

function Story() {
  return (
    <div className="Story" id="story" data-scrollspy>
      <ContentBlock title="Story" subtitle="The road home" image={Blekinge} />
    </div>
  );
}

export default Story;
