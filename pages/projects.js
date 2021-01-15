import Layout from '../components/Layout';

const Projects = () => (
  <Layout title="Projects">
    <h1>Projects</h1>
    <div className="projects">
      <div className="projects-list">
        <div className="item">
          <img src="/static/projects/proj1.jpg" />
          <h2>Personal Website</h2>
          <p>This is a personal webiste that showcases skills in building a website using HTML,CSS and Javascript</p>
          <a href="https://ntg841013.github.io/Nhlanhla-Khumalo-s-Resume/">Click to view site.</a>
        </div>
        <div className="item">
          <img src="/static/projects/proj2.JPG" />
          <h2>i tunes API search site</h2>
          <p>This is a project that showcases the skills in building app using React and Express, and interfacing with a third party API.</p>
          <a href="https://ntg841013.github.io/api-itunes/">Click to view site</a>
        </div>
        <div className="item">
          <img src="/static/projects/proj3.JPG" />
          <h2>Retail Clothing Site</h2>
          <p>This is a personal webiste that showcases skills in building a website using HTML,CSS and Javascript.</p>
        </div>
        <div className="item">
          <img src="/static/projects/proj4.JPG" />
          <h2>Minesweeper Game</h2>
          <p>This project showcases skills in creating a Minesweeper game using Create React App</p>
          <a href="https://pure-headland-67357.herokuapp.com/">Click to view app</a>
        </div>
      </div>
    </div>
    <style jsx>{`
      .projects {
        max-width: 1000px;
        margin: 0 auto;
      }
      .project-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .projects .item {
        padding: 20px;
        margin-bottom: 40px;
        width: 50%;
      }
      img {
        max-width: 100%;
      }
      h2 {
        margin: 0 0 5px 0;
      }
      p {
        font-size: 18px;
        color: #777;
      }
      @media (max-width: 600px) {
        .projects .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout>
);

export default Projects;
