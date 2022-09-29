import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <div className="container">
        {/* Mobile Navbar */}
        <nav className="navbar_mobile">
          <div className="navbar_features">
            <button
              className="toggle_button"
              type="button"
              onClick={() => setToggle((prev) => !prev)}
            >
              <div className="hamburger" />
            </button>
            <h5 className="navbar_brand" href="/">audiophile</h5>
            <img className="navbar_cart" src="./assets/images/svg/shopping_cart.svg" alt="Shopping_Cart" />
          </div>
          <ul className={toggle ? "navbar_nav--show" : "navbar_nav--hide"}>
            <li><a href="/home">Home</a></li>
            <li><a href="/headphones">Headphones</a></li>
            <li><a href="/speakers">Speakers</a></li>
            <li><a href="/earphones">Earphones</a></li>
          </ul>
        </nav>
        {/* Laptop Navbar */}
        <nav className="navbar_laptop">
          <h5 className="navbar_brand" href="/">audiophile</h5>
          <ul className="navbar_nav">
            <li><a href="/home">Home</a></li>
            <li><a href="/headphones">Headphones</a></li>
            <li><a href="/speakers">Speakers</a></li>
            <li><a href="/earphones">Earphones</a></li>
          </ul>
          <img className="navbar_cart" src="./assets/images/svg/shopping_cart.svg" alt="Shopping_Cart" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
