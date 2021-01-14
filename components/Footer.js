const Footer = () => (
  <div className="footer-wrapper">
    <div className="copyright">© {new Date().getFullYear()} Dev Portfolio.</div>
    <div className="info">
      <p>
   
        <a href="https://github.com/NTG841013/"><img src="/static/git.png" width="120px" /></a>
        {' '}
        <a href="https://www.linkedin.com/in/nhlanhla-khumalo-n-0946bb35/"><img src="/static/lin.png" width="70px" /></a>
      </p>
      

    </div>
    <style jsx>{`
      .footer-wrapper {
        text-align: center;
        margin-top: 80px;
        padding: 80px 30px;
      }
      .copyright {
        margin-bottom: 20px;
      }
      .info {
        color: #777;
        font-size: 16px;
      }
    `}</style>
  </div>
);

export default Footer;
