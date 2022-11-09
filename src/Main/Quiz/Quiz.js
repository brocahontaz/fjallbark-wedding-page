import './Quiz.css';

function Quiz() {
  return (
    <div className="Quiz">
      <div className="QuizWrap">
        <iframe
          title="quiz"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCUBm-02XZ_FBmZIUp_zFvHvZaRnp0KMJQ5eVVIc3x7KZ1cg/viewform?embedded=true"
          width="640"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </div>
  );
}

export default Quiz;
