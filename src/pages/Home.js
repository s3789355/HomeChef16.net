import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  const handleRedirect = () => {
    navigate("/detail", { replace: true });
  };

  return (
    <>
      <div className="smoothies-beverage-landing-p">
        <img className="vector-icon" alt="background" src="./img/vector.svg" />
        <img className="ellipse-icon" alt src="./img/ellipse-37.svg" />
        {isShow && (
          <>
            <div className="menu-tran" onClick={() => setIsShow(false)}></div>
            <div className="menu">
              <div className="item__menu">
                <ul className="item__child">
                  <li>Popular</li>
                  <li>Easy Dinner</li>
                  <li>Work Lunches</li>
                  <li>Easy Dinner</li>
                  <li>Easy Dinner</li>
                </ul>
              </div>
              <div className="item__menu">
                <ul className="item__child">
                  <li>Right Now</li>
                  <li>Easy Dinner</li>
                  <li>Work Lunches</li>
                  <li>Easy Dinner</li>
                  <li>Easy Dinner</li>
                </ul>
              </div>
              <div className="item__menu">
                <ul className="item__child">
                  <li>Ingredients</li>
                  <li>Easy Dinner</li>
                  <li>Work Lunches</li>
                  <li>Easy Dinner</li>
                  <li>Easy Dinner</li>
                </ul>
              </div>
              <div className="item__menu">
                <ul className="item__child">
                  <li>Diet</li>
                  <li>Easy Dinner</li>
                  <li>Work Lunches</li>
                  <li>Easy Dinner</li>
                  <li>Easy Dinner</li>
                </ul>
              </div>
              <div className="item__menu">
                <ul className="item__child">
                  <li>Meals</li>
                  <li>Easy Dinner</li>
                  <li>Work Lunches</li>
                  <li>Easy Dinner</li>
                  <li>Easy Dinner</li>
                </ul>
              </div>
            </div>
          </>
        )}

        <header className="hero-image-header" id="head-container">
          <img className="image-54-icon" alt="berry" src="./img/image-54.svg" />
          <img className="vector-icon1" alt src="./img/vector1.svg" />
          <div className="div" id="bg-content">
            <span>0</span>
            <span className="span">1</span>
          </div>
   
          <div className="header-div" id="nav-bar">
            <span className="recipes-a" onClick={() => setIsShow(true)}>
              Recipes
            </span>
            <Link className="home-a" to="/">
              Home
            </Link>
            <div className="selector-div" />

            <Link className="tips-tricks" to="/healthy-eating">
              Tips &amp; Tricks
            </Link>

            <Link className="login-a" to="/about">
              About
            </Link>
            <Link className="button-a" to="/contact">
              <div className="bg-div" />
              <div className="contact-us-div">Contact Us</div>
            </Link>
          </div>
          
          <p className="center">HOMECHEF16.NET</p>
         
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

         
          <p className="yourphonenumber_email">Your Phone Number/Email</p>
          <input
            className="rectangle-input"
            type="text" />
        
          <p className="password">Password</p>
          
          <input
            className="rectangle-input"
            type="password" />
            
        
            <img
          className="login_button" href="#"
          
          src="./img/signin_button.png"
        />

        <p className="create_an_account" href="#">Create an account</p>
          
        </header>
       
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
