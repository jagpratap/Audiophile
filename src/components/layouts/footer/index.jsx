const Footer = () => (
  <footer className="footer">
    <div className="container">
      <nav className="navbar">
        <h1 className="navbar_brand" href="/">audiophile</h1>
        <ul className="navbar_nav">
          <li><a href="/home">Home</a></li>
          <li><a href="/headphones">Headphones</a></li>
          <li><a href="/speakers">Speakers</a></li>
          <li><a href="/earphones">Earphones</a></li>
        </ul>
      </nav>
      <div className="footer_content">
        <div className="content_left">
          <p className="content_desc">
            Audiophile is an in one step to fulfill your audio needs.We&apos;re
            a small team of music lovers and sound specialists who are devoted to helping
            you get the most out of personal audio.Come an visit our demo facility-we&apos;re
            open 7 days week.
          </p>
          <p className="content_copyright">Copyright &copy; 2022. All Rights Reserved</p>
        </div>
        <div className="content_right">
          <img src="./assets/images/svg/facebook.svg" alt="facebook_icon" />
          <img src="./assets/images/svg/twitter.svg" alt="twitter_icon" />
          <img src="./assets/images/svg/instagram.svg" alt="instagram_icon" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
