import Layout from '../components/Layout';

const Contact = () => (
  <Layout title="Contact">
    <h1>Contacts</h1>
    <ul className="company-info">
      <li>
        <span className="company">Nhlanhla Khumalo</span>
      </li>
      <li>Cellphone number: 084 096 7923</li>
      <li>Email: ntg567497@gmail.com</li>
      
    </ul>
    <div className="contact-text">
      <img src="/static/Pic.jpg" />
      <p>
      Hello! I am Nhlanhla Khumalo, Currently studying Full Stack Web Development. 
      Python and its libraries is the first language I learned to code with.
      I am currently trying to learn different coding languages to just increase my range. 
      .I have completed a bootcamp in data science, and am busy building some personal projects 
      to increase my experience in that field as well. I am guy that loves solving challenging issues, and always reading and building personal projects.
  
      </p>
      
    </div>
    <style jsx>{`
      .company-info {
        margin: 0 0 100px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }
      .company {
        font-weight: 700;
        font-size: 24px;
      }
      .contact-text {
        color: #777;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding: 20px;
      }
      img {
        float: right;
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .contact-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
  </Layout>
);

export default Contact;
