import React from 'react';

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div>
      {/* Repeat for each project */}
      <div>
        <h3>Project Title</h3>
        <a href="https://deployed-app-link.com">Deployed App</a>
        <a href="https://github.com/repo-link">GitHub Repo</a>
      </div>
    </div>
  </section>
);

export default Portfolio;