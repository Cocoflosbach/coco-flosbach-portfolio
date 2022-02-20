import React, { Component } from "react";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ContactPage from "./components/ContactPage/ContactPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Projects />
        <ContactPage />
      </div>
    );
  }
}

export default App;
