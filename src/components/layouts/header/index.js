const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="navbar">
        <h1 className="navbar-brand" href="/">audiophile</h1>
        <ul className="navbar_nav">
          <li><a href="/home">Home</a></li>
          <li><a href="/headphones">Headphones</a></li>
          <li><a href="/speakers">Speakers</a></li>
          <li><a href="/earphones">Earphones</a></li>
        </ul>
        <img className="navbar-cart" src="./assets/images/svg/shopping_cart.svg" alt="Shopping_Cart" />
      </nav>
    </div>
  </header>
);

export default Header;
