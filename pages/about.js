import Layout from '../components/Layout';

const About = () => (
  <Layout title="about">
    <h1>Work History</h1>
    <div className="about">
      <div className="about-list">
        <div className="item">
          
          <h2>STANLIB</h2>
          <h3>Complex Query Analyst</h3>
          <h4>August 2006 - December 2008</h4>
          <p>Complex query investigations.Root Cause Analysis (RCA).System/Process improvement Recommendations.Monitor improvements.</p>
          
        </div>
        <div className="item">
          
        <h2>STANLIB</h2>
          <h3>Team Manager</h3>
          <h4>January 2009 - December 2011</h4>
          <p>Complex query investigations, Root Cause Analysis,System/Process improvement Recommendations, monitor improvements.</p>
        </div>
        <div className="item">
          
        <h2>STANLIB</h2>
          <h3>Customer Experience Analyst</h3>
          <h4>January 2012 - December 2014</h4>
          <p>Map Customer Journey,Analyse Client Experience, Recommend Improvement processes, Monitor improvement initiatives, Implemented and productionalised Voice of Customer (VoC) to measure customer experience.</p>
        </div>
        <div className="item">
         
        <h2>STANLIB</h2>
          <h3>Project Manager (CAPM)</h3>
          <h4>January 2014 - Present</h4>
          <p>Project Management by PMBOK principles, waterfall, agile,JIRA</p>
        </div>
      </div>
      
    </div>

    <h1>Educational History</h1>
    <div className="about">
      <div className="about-list">
        <div className="item">
          
          <h2>Advanced Project Management Certificate</h2>
          <h3>University of Cape Town</h3>
          <p>Strategic project management.The project manager.The project management process.Managing project integration, stakeholders, and initiation.Managing project scope.Managing project time.Managing project cost.Managing project risk.Managing project quality.Managing project communications and procurement.Managing talent in projects.Project delivery and closure.</p>
        </div>
        <div className="item">
          
          <h2>Certified Associate in Project Management</h2> 
          <h3>Project Management Institute (PMI)</h3>
          <p>International Certification in Project Management using PMBOK principles.</p>
        </div>
        <div className="item">
          
          <h2>Data Science Bootcamp Certificate</h2>
          <h3>Hyperion Dev</h3>
          <p>Introduction to Programming.Functions.Object Oriented Programming.Natural Language Processing (NLP).Working with Relational data.Data Analytics.Data Exploration.Data Visualisation.Statistics for Machine Learning.Introduction to Machine Learning.Supervised Learning.Unsupervised Learning.</p>
        </div>
        <div className="item">
         
          <h2>Full Stack Web development</h2>
          <h3>Hyperion Dev</h3>
          <p>An Introduction to HTML & CSS.Programming Fundamentals using JavaScript.Using jQuery.Create apps with ReactJS.Introduction to Node.js and Express.Version control.Server-side rendering with Next.js.Various approaches to web development.Express, Node.js, and ReactJS.Creating a database using MongoDB.Web services and APIs.</p>
        </div>
      </div>
      
    </div>
    <style jsx>{`
      .about {
        max-width: 1000px;
        margin: 0 auto;
      }
      .about-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .about .item {
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
      h3 {
        margin: 0 0 1px 0;
        font-size: 20px;
      }
      h4 {
        margin: 0 0 1px 0;
        font-size: 10px;
      }
      p {
        font-size: 18px;
        margin: 0 0 0px 0;
        color: #777;
      }
      @media (max-width: 600px) {
        .about .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout>
);

export default About;
