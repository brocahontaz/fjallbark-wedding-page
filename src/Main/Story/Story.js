import ContentBlock from '../components/ContentBlock';
import './Story.css';

function Story() {
  return (
    <div className="Story" id="story" data-scrollspy>
      <ContentBlock title="Story" subtitle="The road home" />
    </div>
  );
}

export default Story;
