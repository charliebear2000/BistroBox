import React, { useState } from "react";
// import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import image from "../assets/front-page.jpg";
import stew from "../assets/stew.jpg";
import review from "../assets/review.png";
const About = () => {
  const [reveal1, setReveal1] = useState(false);
  const [reveal2, setReveal2] = useState(false);
  const [reveal3, setReveal3] = useState(false);
  const [reveal4, setReveal4] = useState(false);
  return (
    <div className="aboutdiv">
      <div className="welcome">
        <div className="intro">
          <h3>Welcome to BistroBox!</h3>
          <p>
            It brings us great pleasure to present to you the easiest meal kit ordering platform on the market. We know that life can be very busy, between work, school activities, kids sports, and whatever curveball that life throws at you, having time to cook and prep a meal for the family can often times not be feasible. Bistro Box is here to lend you a helping hand, while bringing you meals that will accomodate your specific dietary restrictions!
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
      <div className="buttondiv">
        <button className="b1" onClick={() => setReveal1(!reveal1)}>
          <img src={review} alt="review" />
          Which dietary restrictions can BistroBox accomodate?
        </button>
        <br></br>
        {reveal1 &&
          " From vegan, to celiac, to dairy free and beyond.  Contact one of our representatives to get on the right meal plan for you! "}
        <br></br>
        <br></br>
        <button className="b1" onClick={() => setReveal2(!reveal2)}>
          <img src={review} alt="review" />
          What sets BistroBox apart from other meal kits?
        </button>
        <br></br>
        {reveal2 &&
          " Our willingness to adapt to our guests needs, along with our chef's training are just two examples of what makes BistroBox special! "}
        <br></br>
        <br></br>
        <button className="b1" onClick={() => setReveal3(!reveal3)}>
          <img src={review} alt="review" />I follow a strict halal diet, will
          BistroBox be able to provide meals?
        </button>
        <br></br>
        {reveal3 &&
          " Of course! We can gladly accommodate any religious dietary restrictions! "}
        <br></br>
        <br></br>

        <button className="b1" onClick={() => setReveal4(!reveal4)}>
          <img src={review} alt="review" />
          How do I get started with BistroBox?
        </button>
        <br></br>
        {reveal4 &&
          " Just click the Get Started button below and you'll be taken to all of the meals that we offer.  From there, just signup and you can start purchasing our great meals! "}
      </div>
      <div className="homepagelink">
        <h2>
          <a href="/home">Get Started!</a>
        </h2>
      </div>

      <div className="a">
        <div className="featurepic">
          <img
            src={stew}
            style={{ width: "max-width", height: "30%" }}
            alt="A bowl of plant based gluten beef stew"
          />
        </div>
        <div className="b">
          <p>
            "I'm going to be honest with you, before I started using BistroBox, my family was eating a lot of frozen junk and fast food. Now that we've switched to using BistroBox several times a week, I can finally feel proud of the food that I'm feeding our family."
            <br></br>- Stephanie
          </p>
          <div className="c">
            <p>
              "I'm generally an anxious person, so the added stress of needing to feed our family puts a lot of emotional burden on me, which I really needed to alleviate. Ever since I've begun ordering BistroBox, it's as if a weight has been lifted off of my shoulders." <br></br>- Jean-Louis
            </p>
          </div>
          <div className="d">
            <p>
              "I just want to thank the makers of BistroBox for making meal kits that cater to people with different dietary needs. My daughter has Celiac disease so the fact that we can find delicious meals that meet her condition is really a game changer." <br></br>- Kendra
            </p>
          </div>
        </div>
        <footer className="footer">
          <div className="footer__text">
            <p>&copy; 2022 BistroBox. All rights reserved.</p>
          </div>
        </footer>
      </div>


      <Cart />
    </div>
  );
};
export default About;
