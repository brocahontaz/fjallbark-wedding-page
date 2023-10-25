/* eslint-disable no-plusplus */
import "./App.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const history = useHistory();
  useEffect(() => {
    const sections = document.querySelectorAll("div[data-scrollspy]");

    const observer = new IntersectionObserver(
      (event) => {
        const coverage = event[0].intersectionRatio;
        if (coverage >= 0.75) {
          history.push(`#${event[0].target.id}`);
        }
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
      }
    );

    for (let i = 0; i < sections.length; i++) {
      observer.observe(sections[i]);
    }
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
