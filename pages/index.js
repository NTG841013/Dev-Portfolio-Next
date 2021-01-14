import Link from 'next/link';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const images = [
  '/static/portfolio/14.jpg',
  '/static/portfolio/13.jpg',
  '/static/portfolio/12.jpg',
  '/static/portfolio/11.jpg'
];

const Homepage = () => (
  <Layout>
    <div className="cover">
      <div className="hello">
        <h1>Hi, I'm Nhlanhla Khumalo</h1>
        <div>Welcome to my development portfolio</div>
        <Link href="/about">
          <a className="view-more">About me</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 1200px;
        background: transparent url(/static/Pic.jpg) no-repeat center center;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 20px;
        right: 20px;
        background: #fff;
        padding: 10px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          left: 30px;
          right: 30px;
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Homepage;
