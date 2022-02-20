import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Check out my projects</h2>

        <div>
          <h3>MeetApp</h3>
          <div>
            <img src="" alt="MeetApp images" />
          </div>
          <p>description</p>
          <div>
            <button type="submit" href="https://github.com/Cocoflosbach/meet">
              See project on github
            </button>
            <button type="submit" href="https://cocoflosbach.github.io/meet/">
              See live project
            </button>
          </div>
        </div>

        <div>
          <h3>MyFunFlix (client)</h3>
          <div>
            <img src="" alt="MyFunFlix images" />
          </div>
          <p>description</p>
          <div>
            <button
              type="submit"
              href="https://github.com/Cocoflosbach/myFunFlix-client"
            >
              See project on github
            </button>
            <button type="submit" href="https://myfunflix.netlify.app/">
              See live project
            </button>
          </div>
        </div>

        <div>
          <h3>MyFunFlix (API)</h3>
          <div>
            <img src="" alt="MyFunFlix images" />
          </div>
          <div>
            <button
              type="submit"
              href="https://github.com/Cocoflosbach/movie_api"
            >
              See project on github
            </button>
            <button
              type="submit"
              href="https://github.com/Cocoflosbach/my-pokedex-app"
            >
              See live project
            </button>
          </div>
        </div>
        <div>
          <h3>chatApp</h3>
          <div>
            <img src="" alt="ChatApp images" />
          </div>
          <p>description</p>
          <div>
            <button
              type="submit"
              href="https://github.com/Cocoflosbach/chatApp"
            >
              See project on github
            </button>
            <button type="submit" href="">
              See live project
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
