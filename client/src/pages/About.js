import React, { useState } from "react";
// import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import image from "../assets/front-page.jpg";
import stew from "../assets/stew.jpg";
import review from "../assets/review.png";
import { Link } from "react-router-dom";
const About = () => {
  const [reveal1, setReveal1] = useState(false);
  const [reveal2, setReveal2] = useState(false);
  const [reveal3, setReveal3] = useState(false);
  const [reveal4, setReveal4] = useState(false);

  return (
    <div className="aboutdiv">
      <nav>
        <ul className="more-info">
          <li className="nav-tabs">
            <a href="#faq">FAQ</a>
          </li>
          <li className="nav-tabs">
            <a href="#reviews">Reviews</a>
          </li>
        </ul>
      </nav>
      <div className="welcome">
        <div className="intro">
          <h3 className="intro-title">Welcome to BistroBox!</h3>
          <p className="intro-text">
            This is the easiest meal kit ordering platform on the market. 
            We have a wide variety of meals to choose from and can accommodate 
            many different dietary needs. If you don't see meals that work for 
            you, please contact us so we can help you create a meal plan. 
            Our pricing is per person, so order as many or as few meals 
            as you need. Don't forget to check out our single serving desserts as well!
          </p>
        </div>
        <div className="image-div">
          <img
            src={image}
            className="about-image"
            // style={{ width: "max-width", height: "30%" }}
            alt="A family eating together"
          />
        </div>
      </div>
      <div className="homepagelink">
        <h2 className="get-started">
          <Link className="start-link" to="/home">Get Started Here!
          </ Link>
        </h2>
      </div>
      <div id="faq" className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <ul className="faq-list">
          <li className="faq-item">
            <button className="faq-btn" onClick={() => setReveal1(!reveal1)}>
              <img src={review} alt="review" />
              <p className="question">Which dietary restrictions can BistroBox accommodate?</p>
            </button>
            <p className="answer-reveal">
              {reveal1 &&
                " From vegan, to celiac, to dairy-free and beyond. Contact one of our representatives to create the right meal plan for you! "}
            </p>
          </li>
          <li className="faq-item">
            <button className="faq-btn" onClick={() => setReveal2(!reveal2)}>
              <img src={review} alt="review" />
              <p className="question">What sets BistroBox apart from other meal kit services?</p>
            </button>
            <p className="answer-reveal">
              {reveal2 &&
                " Our willingness to accommodate our guest's needs, along with our chef's training are just two examples of what makes BistroBox special! "}
            </p>
          </li>
          <li className="faq-item">
            <button className="faq-btn" onClick={() => setReveal3(!reveal3)}>
              <img src={review} alt="review" />
              <p className="question">I follow a strict halal diet, will BistroBox be able to provide meals?</p>
            </button>
            <p className="answer-reveal">
              {reveal3 &&
                " Of course! We will gladly provide meals that meet any religious dietary restrictions! "}
            </p>
          </li>
          <li className="faq-item">
            <button className="faq-btn" onClick={() => setReveal4(!reveal4)}>
              <img src={review} alt="review" />
              <p className="question">How do I get started with BistroBox?</p>
            </button>
            <p className="answer-reveal">
              {reveal4 &&
                " Just click the Get Started Here button above and you'll be taken to all of the meals that we offer.  From there, just sign up and you can start purchasing our great meals! "}
            </p>
          </li>
        </ul>
      </div>
      <div id="reviews" className="review-section">
        <h3 className="section-title">Reviews</h3>
        <div className="review-container">
          <div className="feature">
            <img
              className="feature-image"
              src={stew}
              // style={{ width: "max-width", height: "30%" }}
              alt="A bowl of plant based gluten beef stew"
            />
          </div>
          <div className="reviews">
            <div className="review1">
              <p className="review-text">
                "I'm going to be honest with you, before I started using BistroBox,
                my family was eating a lot of frozen junk and fast food. Now that
                we've switched to using BistroBox several times a week, I can
                finally feel proud of the food that I'm feeding my family."
                <br></br>- Stephanie
              </p>
            </div>
            <div className="review2">
              <p className="review-text">
                "I'm generally an anxious person, so the added stress of needing
                to feed my family puts a lot of emotional burden on me, which I
                really needed to alleviate. Ever since I've begun ordering
                BistroBox, it's as if a weight has been lifted off of my
                shoulders." <br></br>- Jean-Louis
              </p>
            </div>
            <div className="review3">
              <p className="review-text">
                "I just want to thank the makers of BistroBox for making meal kits
                that cater to people with different dietary needs. My daughter has
                Celiac disease, so the fact that we can find delicious meals that
                she can eat is really a game changer." <br></br>- Kendra
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-text">
          <p>&copy; 2022 BistroBox. All rights reserved.</p>
        </div>
      </footer>
      <Cart />
    </div>
  );
};
export default About;
