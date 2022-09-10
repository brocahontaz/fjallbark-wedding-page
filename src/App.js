/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import './App.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const history = useHistory();
  useEffect(() => {
    const sections = document.querySelectorAll('div[data-scrollspy]');
    console.log(sections);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          history.push(`#${entry.target.id}`);
        }
      }
    }, {
      rootMargin: '0px',
      threshold: '0.8'
    });
    for (let i = 0; i < sections.length; i++) { observer.observe(sections[i]); }
  });
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
