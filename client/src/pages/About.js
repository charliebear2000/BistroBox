import React, { useState } from "react";
import styles from "../index.css";
// import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import image from "../assets/bras.jpg";
import stew from "../assets/stew.jpg";
const About = () => {
  const [reveal1, setReveal1] = useState(false);
  const [reveal2, setReveal2] = useState(false);
  const [reveal3, setReveal3] = useState(false);
  const [reveal4, setReveal4] = useState(false);
  return (
    <div className="aboutdiv">
      {/* <CategoryMenu /> */}
      <img
        src={image}
        className="my-2"
        style={{ width: "max-width", height: "30%" }}
        alt="image showing a family eating together"
      />
      <div>
        <div className="intro">
          <h1>Welcome to BistroBox!</h1>
          <h5>
            It brings us great pleasure to present to you the easiest meal kit
            ordering platform on the market. We know that life can be very busy,
            between work, school activities, kids sports, and whatever curveball
            that life throws at you, having time to cook and prep a meal for the
            family can often times not be feasible.
            <br></br>Bistro Box is here to lend you a helping hand, while
            bringing you meals that will accomodate your specific dietary
            restrictions!
          </h5>
        </div>
        <div className="buttondiv">
          <button className="b1" onClick={() => setReveal1(!reveal1)}>
            Which dietary restrictions can BistroBox accomodate?
          </button>
          <br></br>
          {reveal1 &&
            " From vegan, to celiac, to dairy free and beyond.  Contact one of our representatives to get on the right meal plan for you! "}
          <br></br>
          <br></br>
          <button className="b1" onClick={() => setReveal2(!reveal2)}>
            What sets BistroBox apart from other meal kits?
          </button>
          <br></br>
          {reveal2 &&
            " Our willingness to adapt to our guests needs, along with our chef's training are just two examples of what makes BistroBox special! "}
          <br></br>
          <br></br>
          <button className="b1" onClick={() => setReveal3(!reveal3)}>
            I follow a strict halal diet, will BistroBox be able to provide
            meals?
          </button>
          <br></br>
          {reveal3 &&
            " Of course! We can gladly accommodate any religious dietary restrictions! "}
          <br></br>
          <br></br>
          <button className="b1" onClick={() => setReveal4(!reveal4)}>
            How do I get started with BistroBox?
          </button>
          <br></br>
          {reveal4 &&
            " Just click the Get Started button below and you'll be taken to all of the meals that we offer.  From there, just signup and you can start purchasing our great meals! "}
        </div>
        <div className="homepagelink">
          <h2>
            <a href="/">Get Started!</a>
          </h2>
        </div>

        <div className="a">
          <div className="featurepic">
            <img
              src={stew}
              style={{ width: "max-width", height: "30%" }}
              alt="image showing a bowl of plant based gluten beef stew"
            />
          </div>
          <div className="b">
            <p>
              "I'm going to be honest with you, before I started using
              BistroBox, my family was eating a lot of frozen junk and fast
              food.<br></br>
              Now that we've switched to using BistroBox several times a week, I
              can finally feel proud of the food that I'm feeding our family."
              <br></br>- Stephanie
            </p>
            <div className="c">
              <p>
                "I'm generally an anxious person, so the added stress of needing
                to feed our family <br></br>
                puts a lot of emotional burden on me, which I really needed to
                alleviate. <br></br>
                Ever since I've begun ordering BistroBox, it's as if a weight
                has been lifted off of my shoulders." <br></br>- Jean-Louis
              </p>
            </div>
            <div className="d">
              <p>
                "I just want to thank the makers of BistroBox for making meal
                kits that cater to people with <br></br>
                different dietary needs. My daughter has Celiac disease so the
                fact that we can find <br></br>
                delicious meals that meet her condition is really a game
                changer." <br></br>- Kendra
              </p>
            </div>
          </div>
          <footer className="footer">
            <div className="footer__text">
              <p>&copy; 2022 BistroBox. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>

      <Cart />
    </div>
  );
};
export default About;
