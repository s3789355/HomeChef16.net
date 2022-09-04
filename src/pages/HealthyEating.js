import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const HealthyEating = () => {
  return (
    <div className="bg">
      <div style={{ padding: "0 40px" }}>
        <div className="header">
          <div className="header-search">
            <input
              type="text"
              className="input-select"
              placeholder="search ..."
            />
          </div>
          <div className="header-menu">
            <ul className="list-menu">
              <li className="item-menu">
                <Link className="line" to="/">
                  Home
                </Link>
                <div className="selector-div"></div>
              </li>
              <li className="item-menu">
                <Link className="line" to="/">
                  Recipes
                </Link>
              </li>
              <li className="item-menu">
                <Link className="line" to="/healthy-eating">
                  Tips &amp; Tricks
                </Link>
              </li>
              <li className="item-menu">
                <Link className="line" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-title">Healthy Eating</div>
        <p className="main-text">
        Eating a healthy diet is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about feeling great, having more energy, improving your health, and boosting your mood.
        </p>

        <div className="intro">
          <div className="intro-item">
            <img src="./img/rectangle-1852.svg" alt="" />
            <p className="intro-name">Low-cab Avocado Chicken Salad</p>
          </div>
          <div className="intro-item">
            <img src="./img/rectangle-1852.svg" alt="" />
            <p className="intro-name">Inter</p>
          </div>
          <div className="intro-item">
            <img src="./img/rectangle-1852.svg" alt="" />
            <p className="intro-name">Low-cab Avocado Chicken Salad</p>
          </div>
          <div className="intro-item">
            <img src="./img/rectangle-1852.svg" alt="" />
            <p className="intro-name">Low-cab Avocado Chicken Salad</p>
          </div>
          <div className="intro-item">
            <img src="./img/rectangle-1852.svg" alt="" />
            <p className="intro-name">Low-cab Avocado Chicken Salad</p>
          </div>
          <div className="intro-item">
            <img src="./img/rectangle-1852.svg" alt="" />
            <p className="intro-name">Low-cab Avocado Chicken Salad</p>
          </div>
          <div className="intro-item">
            <img src="./img/rectangle-1852.svg" alt="" />
            <p className="intro-name">Low-cab Avocado Chicken Salad</p>
          </div>
          <div className="intro-item">
            <img src="./img/rectangle-1852.svg" alt="" />
            <p className="intro-name">Low-cab Avocado Chicken Salad</p>
          </div>
          <div className="intro-item">
            <img src="./img/rectangle-1852.svg" alt="" />
            <p className="intro-name">Low-cab Avocado Chicken Salad</p>
          </div>
          <div className="intro-item">
            <img src="./img/rectangle-1852.svg" alt="" />
            <p className="intro-name">Low-cab Avocado Chicken Salad</p>
          </div>
        </div>
        <div className="btn-show-more">Show more</div>
      </div>
      <Footer />
    </div>
  );
};

export default HealthyEating;
