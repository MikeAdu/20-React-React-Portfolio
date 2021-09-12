import React from 'react';
export default function Project() {
  return (
    <div>
      <h1>Project Page</h1>
      <p>
      ;<section className="sub-section-alternative" id="projects">
  <h2>Projects/Assignments</h2>
  <div className="project-container">
    <div className="project-card">
      <img
        className="project-image"
        src="src/images/screencapture-file-Users-michaeladusah-Projects-media-query-index-html-2021-05-07-22_33_19.png"
        alt="Picture of project one"
      />
      <h3>Project One</h3>
      <p className="subtext">Media query</p>
      <hr />
      <p className="subtext">
        <a
          className="project-link"
          href="https://github.com/raws-boop/media_query"
        >
          View Here
        </a>
      </p>
    </div>
    <div className="project-card">
      <img
        className="project-image"
        src="src/images/homepage.jpg"
        alt="Picture of project one"
      />
      <h3>Project two</h3>
      <p className="subtext">Staylist</p>
      <hr />
      <p className="subtext">
        <a
          className="project-link"
          href="https://github.com/we-dem-boyz/Staylists"
        >
          View Here
        </a>
      </p>
    </div>
    <div className="project-card">
      <img
        className="project-image"
        src="src/images/the-food-index.png"
        alt="Picture of project one"
      />
      <h3>Project three</h3>
      <p className="subtext">The food index</p>
      <hr />
      <p className="subtext">
        <a
          className="project-link"
          href="https://the-food-index.herokuapp.com/"
        >
          View Here
        </a>
      </p>
    </div>
    <div className="project-card">
      <img
        className="project-image"
        src="src/images/11-express-homework-demo-01.png"
        alt="Picture of project one"
      />
      <h3>Pinned Assignments</h3>
      <p className="subtext">Best Assignments</p>
      <hr />
      <p className="subtext">
        <a className="project-link" href="https://github.com/MikeAdu">
          View Here
        </a>
      </p>
    </div>
  </div>
</section>

      </p>
    </div>
  );
}
