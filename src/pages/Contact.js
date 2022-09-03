import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [isShow, setIsShow] = useState(false);

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
            <span className="recipes-a" onClick={() => setIsShow(true)}>
              Recipes
            </span>
            <Link className="home-a" to="/">
              Home
            </Link>

            <Link className="tips-tricks" to="/healthy-eating">
              Tips &amp; Tricks
            </Link>

            <Link className="login-a" to="/about">
              About
            </Link>
            <Link className="button-a" to="/contact">
              <div className="contact-us-div">Contact Us</div>
              <div className="selector-div" />
            </Link>
          </div>
          <img className="content-icon" alt src="./img/content.svg" />
          <p className="title-home-f">HOMECHEF16.NET</p>
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
          {/* <input
            className="rectangle-input"
            type="text"
            placeholder="Search..."
          /> */}
        </header>
        <div className="form-home">
          <div className="form-group-home">
            <label className="label_name" htmlFor="">
              Name <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className="form-group-home">
            <label className="label_name" htmlFor="">
              Email Address <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className="form-group-home">
            <label className="label_name" htmlFor="">
              Your feed back <span>*</span>
            </label>
            <textarea className="text-input height-400"></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
