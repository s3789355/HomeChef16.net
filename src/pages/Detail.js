import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Detail = () => {
  const [isShow, setIsShow] = useState(false);
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
          <div className="div" id="bg-content">
            <span>0</span>
            <span className="span">1</span>
          </div>
          <iframe
            className="bowl-icon"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yQyo_ijPfUs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
          <img className="content-icon" alt src="./img/content.svg" />
          <p className="title-home-f">HOMECHEF16.NET</p>

          {/* <input
              className="rectangle-input"
              type="text"
              placeholder="Search..."
            /> */}
        </header>
        <div className="form-home">
          <div className="privacy-title">Veggie Garlic Noodles</div>
          <div className="list-icon">
            <img className="v-icon " alt src="./img/vector2.svg" />
            <img className="v-icon " alt src="./img/vector3.svg" />
            <img className="v-icon" alt src="./img/subtract.svg" />
          </div>
          <div className="list-how">
            <div className="list-left">
              <ul className="list-how-item">
                <li>Ingredients</li>
                <li>2 tablespoons vegetable oil(30ml)</li>
                <li>5 cloves garlic, minced</li>
                <li>4 spring onions, divided</li>
                <li>2 carrot, cut into matchsticks</li>
                <li>1 cup snap pea(100 g)</li>
              </ul>
            </div>
            <div className="list-right">
              <ul className="list-how-item">
                <li>Preparation</li>
                <li>2 tablespoons vegetable oil(30ml)</li>
                <li>5 cloves garlic, minced</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 className="latest-recipes" id="Latest Recipes">
          <b>Related Recipes </b>
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
        <div className="comment">
          <h3 className="title-comment">Comments</h3>
          <textarea className="comment-input"></textarea>
        </div>
        <div className="list-comment">
          <div className="item-comment">
            <img
              src="./img/rectangle-1844.svg"
              className="img-comment"
              alt=""
            />
            <div className="text-comment">
              <div className="name-par">Bellacordovi</div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
          <div className="item-comment">
            <img
              src="./img/rectangle-1844.svg"
              className="img-comment"
              alt=""
            />
            <div className="text-comment">
              <div className="name-par">Bellacordovi</div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
          <div className="item-comment">
            <img
              src="./img/rectangle-1844.svg"
              className="img-comment"
              alt=""
            />
            <div className="text-comment">
              <div className="name-par">Bellacordovi</div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
          <div className="btn-show-more font-17">Show more</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
