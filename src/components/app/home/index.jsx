const categories = [
  {
    id: 1,
    name: "headphones",
    image: "./assets/images/products/category_hero/headphones_hero.png",
  },
  {
    id: 2,
    name: "Speakers",
    image: "./assets/images/products/category_hero/speakers_hero.png",
  },
  {
    id: 3,
    name: "Earphones",
    image: "./assets/images/products/category_hero/earphones_hero.png",
  },
];

const Home = () => (
  <>
    <section className="hero_section">
      <div className="container">
        <div className="section_content">
          <p className="content_subheading">New Product</p>
          <h1 className="content_heading">XX99 Mark II Headphones</h1>
          <p className="content_desc">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="content_action" type="button">See Product</button>
        </div>
      </div>
    </section>
    <main className="main_section">
      <div className="container">
        <div className="product_categories">
          {categories.map(({ id, name, image }) => (
            <div key={id} className="category">
              <img src={image} alt="category_hero" />
              <p>{name}</p>
              <a href="/">
                Shop
                <img src="./assets/images/svg/arrow_forward.svg" alt="arrow_forward" />
              </a>
            </div>
          ))}
        </div>
        <div className="feature_products">
          <div className="product1">
            <img src="./assets/images/products/speakers/speakerZX9.png" alt="SpeakerZX9" />
            <div className="product1_desc">
              <h1 className="desc_title">ZX9 Speaker</h1>
              <p className="desc_tagline">
                Upgrade to premium speakers that are phenomenally built to deliver
                truly remarkable sound.
              </p>
              <button className="desc_action" type="button">See Product</button>
            </div>
          </div>
          <div className="product2">
            <div className="product2_desc">
              <h1 className="desc_title">ZX7 Speaker</h1>
              <button className="desc_action" type="button">See Product</button>
            </div>
            <img src="./assets/images/products/speakers/speakerZX7.png" alt="SpeakerZX7" />
          </div>
          <div className="product3">
            <div className="product3_image">
              <img src="./assets/images/products/earphones/earphoneYX1.jpg" alt="EarphoneYX1" />
            </div>
            <div className="product3_desc">
              <h1 className="desc_title">YX1 Earphone</h1>
              <button className="desc_action" type="button">See Product</button>
            </div>
          </div>
        </div>
        <div className="section_article">
          <div className="article_content">
            <h1 className="article_heading">
              Bringing you the
              {" "}
              <span>best</span>
              {" "}
              audio gear
            </h1>
            <p className="article_desc">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones,earphones, speakers, and audio accessories.
              We have a large showroom and luxury demonstration rooms available for you
              to browse and experience a wide range of our products. Stop by our store to
              meet some of the fantastic people who make Audiophile the best place to buy
              your portable audio equipment.
            </p>
          </div>
          <div className="article_image">
            <img src="./assets/images/modal_image.jpg" alt="Article_modal" />
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
