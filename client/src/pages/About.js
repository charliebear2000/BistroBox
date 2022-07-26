import React from "react";
import styles from "../index.css";
// import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import image from "../assets/bras.jpg";
const About = () => {
  return (
    <div>
      {/* <CategoryMenu /> */}
      <img
        src={image}
        className="my-2"
        style={{ width: "max-width", height: "30%" }}
        alt="cover"
      />
      <div>
        <h1>Welcome to Bistro Box!</h1>

        <div>
          <h5>
            <p>
              It brings us great pleasure to present to you the easiest meal kit
              ordering platform on the market.<br></br> We know that life can be
              very busy, between work, school activities, kids sports, and
              whatever curveball<br></br> that life throws at you, having time
              to cook and prep a meal for the family can often times not be
              feasible. <br></br>Bistro Box is here to lend you a helping hand,
              while bringing you meals that will accomodate your specific
              dietary restrictions.
            </p>
          </h5>
        </div>
        <div className="a">
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
                delicious meals that meet her condition" <br></br>- Kendra
              </p>
            </div>
          </div>
        </div>
      </div>

      <Cart />
    </div>
  );
};
export default About;
