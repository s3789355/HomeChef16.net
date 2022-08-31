import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="smoothies-beverage-landing-p">
        <img className="vector-icon" alt="background" src="./img/vector.svg" />
        <img className="ellipse-icon" alt src="./img/ellipse-37.svg" />
        <header className="hero-image-header" id="head-container">
          <img className="image-54-icon" alt="berry" src="./img/image-54.svg" />
          <img className="vector-icon1" alt src="./img/vector1.svg" />
          <div className="div" id="bg-content">
            <span>0</span>
            <span className="span">1</span>
          </div>
          <img className="bowl-icon" alt="bowl" src="./img/bowl.svg" />
          <div className="header-div" id="nav-bar">
            <a className="recipes-a" href="@recipes">
              Recipes
            </a>
            <a className="home-a" href="#home">
              Home
            </a>
            <div className="selector-div" />
            <a className="tips-tricks" href="#tipsntricks">
              Tips &amp; Tricks
            </a>
            <a className="login-a" href="#login">
              Login
            </a>
            <a className="button-a" href="#contact">
              <div className="bg-div" />
              <div className="contact-us-div">Contact Us</div>
            </a>
          </div>
          <img className="content-icon" alt src="./img/content.svg" />
          <div className="benefits-div">
            <img
              className="verticle-line-icon"
              alt
              src="./img/verticle-line.svg"
            />
            <h2 className="benefits-h2" id="hero-title2">
              Benefits
            </h2>
            <div className="group-div" id="hero-content">
              <div className="antioxidants-div">Antioxidants</div>
              <div className="vitamins-div">Vitamins</div>
              <div className="minerals-div">Minerals</div>
              <div className="nutrients-div">Nutrients</div>
            </div>
          </div>
          <a className="facebook" href="#facebook">
            <img className="vector-icon2" alt />
            <img className="vector-icon3" alt src="./img/vector2.svg" />
          </a>
          <a className="twitter-a" href="#twitter">
            <img className="vector-icon2" alt />
            <img className="vector-icon5" alt src="./img/vector3.svg" />
          </a>
          <a className="instagram" href="#instagram">
            <img className="vector-icon2" alt />
            <img className="subtract-icon" alt src="./img/subtract.svg" />
          </a>
          <input
            className="rectangle-input"
            type="text"
            placeholder="Search..."
          />
        </header>
        <div className="cards-div" id="Sidebar">
          <div className="frame-div">
            <div className="div1" id="sidebox1">
              <div className="bg-div1" />
              <div className="bg-div2" />
              <div className="horizontal-line-div">
                <div className="rectangle-div" />
              </div>
              <p className="diet-p">Diet</p>
              <img className="image-icon" alt="image" src="./img/image.svg" />
            </div>
            <div className="div1" id="sidebox2">
              <div className="bg-div1" />
              <div className="bg-div4" />
              <div className="horizontal-line-div">
                <div className="rectangle-div1" />
              </div>
              <p className="meal-plan">Meal Plan</p>
              <img className="image-icon" alt="image" src="./img/image1.svg" />
            </div>
            <div className="div3" id="sidebox3">
              <div className="bg-div5" />
              <div className="bg-div6" />
              <div className="horizontal-line-div2">
                <div className="rectangle-div2" />
              </div>
              <p className="ingredients-p">Ingredients</p>
              <img className="image-icon" alt="image" src="./img/image2.svg" />
            </div>
          </div>
        </div>
        <img
          className="mulberry-icon"
          alt="mulberry"
          src="./img/mulberry.svg"
        />
        <img
          className="strawberry-icon"
          alt="strawberry"
          src="./img/strawberry.svg"
        />
        <img
          className="blueberry-icon"
          alt="blueberry"
          src="./img/blueberry.svg"
        />
        <h3 className="latest-recipes" id="Latest Recipes">
          <b>Latest Recipes </b>
          <span>&gt;</span>
        </h3>
        <h3
          className="popular-recipes-this-week"
          id="Popular Recipes This Week"
        >
          Popular Recipes This Week
        </h3>
        <img
          className="rectangle-icon"
          alt
          src="./img/rectangle-1842.svg"
          id="rectangleImage"
        />
        <img
          className="rectangle-icon1"
          alt
          src="./img/rectangle-1843.svg"
          id="rectangleImage1"
        />
        <img
          className="rectangle-icon2"
          alt
          src="./img/rectangle-1844.svg"
          id="rectangleImage2"
        />
        <img
          className="rectangle-icon3"
          alt
          src="./img/rectangle-1845.svg"
          id="rectangleImage3"
        />
        <img
          className="rectangle-icon4"
          alt
          src="./img/rectangle-1846.svg"
          id="rectangleImage4"
        />
        <img
          className="rectangle-icon5"
          alt
          src="./img/rectangle-1847.svg"
          id="rectangleImage5"
        />
        <a className="italian-beef-rolls" href="#">
          Italian Beef Rolls
        </a>
        <b className="fruit-jam-chocolate-covered-r">
          <p className="fruit-jam-chocolate-">Fruit Jam Chocolate-</p>
          <p className="covered-rolls-p">Covered Rolls</p>
        </b>
        <b className="yuzu-ponzu-salmon-with-crispy">
          <p className="fruit-jam-chocolate-">Yuzu Ponzu Salmon</p>
          <p className="covered-rolls-p">With Crispy Rice</p>
        </b>
        <b className="pineapple-kiwi-mojito">Pineapple Kiwi Mojito</b>
        <b className="air-fry-your-way-out-of-turnin">
          <p className="fruit-jam-chocolate-">Air Fry Your Way Out</p>
          <p className="fruit-jam-chocolate-">of Turning The Oven</p>
          <p className="covered-rolls-p">On</p>
        </b>
        <b className="loaded-pulled-pork-nachos">
          <p className="fruit-jam-chocolate-">Loaded Pulled Pork</p>
          <p className="covered-rolls-p">Nachos</p>
        </b>
        <img
          className="rectangle-icon6"
          alt
          src="./img/rectangle-1848.svg"
          id="rectangleImage6"
        />
        <img
          className="rectangle-icon7"
          alt
          src="./img/rectangle-1849.svg"
          id="rectangleImage7"
        />
        <img
          className="rectangle-icon8"
          alt
          src="./img/rectangle-1850.svg"
          id="rectangleImage8"
        />
        <img
          className="rectangle-icon9"
          alt
          src="./img/rectangle-1851.svg"
          id="rectangleImage9"
        />
        <img
          className="rectangle-icon10"
          alt
          src="./img/rectangle-1852.svg"
          id="rectangleImage10"
        />
        <img
          className="rectangle-icon11"
          alt
          src="./img/rectangle-1853@2x.png"
          id="rectangleImage11"
        />
        <b className="the-best-chewy-chocolate-chip">
          <p className="fruit-jam-chocolate-">The Best Chewy</p>
          <p className="fruit-jam-chocolate-">Chocolate Chip</p>
          <p className="covered-rolls-p">Cookies</p>
        </b>
        <b className="one-pot-garlic-parmesan-pasta">
          <span className="one-pot-garlic-container">
            <p className="fruit-jam-chocolate-">One Pot Garlic</p>
            <p className="covered-rolls-p">Parmesan Pasta</p>
          </span>
        </b>
        <b className="creamy-chicken-penne-pasta">
          <p className="fruit-jam-chocolate-">Creamy Chicken</p>
          <p className="covered-rolls-p">Penne Pasta</p>
        </b>
        <b className="the-best-fudgy-brownies">
          <p className="fruit-jam-chocolate-">The Best Fudgy</p>
          <p className="covered-rolls-p">Brownies</p>
        </b>
        <b className="summer-break-recipes-for-your">
          <p className="fruit-jam-chocolate-">Summer Break</p>
          <p className="fruit-jam-chocolate-">Recipes For Your</p>
          <p className="covered-rolls-p">Kids</p>
        </b>
        <b className="chicken-veggie-stir-fry">
          <p className="fruit-jam-chocolate-">Chicken &amp; Veggie</p>
          <p className="covered-rolls-p">Stir-Fry</p>
        </b>
      </div>
      <Footer />
    </>
  );
};

export default Home;
