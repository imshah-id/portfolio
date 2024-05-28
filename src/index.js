import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import userPix from "./mypic.png";
function App() {
  return (
    <div>
      <div className="heroPage">
        <Nav />
        <Main />
      </div>

      <Skills />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function Nav() {
  return (
    <header>
      <h1>Shaenix</h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
function Main() {
  return (
    <main className="main">
      <div className="text">
        <p1>Hello, i'm</p1>
        <h2>Shahid Shamim Shah</h2>
        <p1>A MernStack Developer</p1>
      </div>
      <div className="avatar-container">
        <img className="avatar" src={userPix} alt="Admin"></img>
      </div>
    </main>
  );
}
function Skills() {
  return (
    <div className="skills">
      <h2>hello</h2>
    </div>
  );
}
