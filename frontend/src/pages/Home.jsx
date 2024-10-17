import React from "react";
import { Link } from "react-router-dom";
//import Sign up button
export default function HomePage() {



  return <>
    {/* user visual "hook"-- how can we showcase benevelos values and use them to draw users into the idea? */}
    <section className="homeHeader">
      <h1 className="userHook" id="hook">Community is Key.</h1>
    </section>

    <br />

    <section className="whyBenev">
      <section className="hookImg">
        <img className="helpingPeople" alt="Elderly woman smiling, holding the hand of a woman blurred and closer to the camera, with the bottom of her face showing." src="https://cdn.sixtyandme.com/wp-content/uploads/2015/02/Sixty-and-Me_Helping-Others.jpg" />
      </section>

      {/* making sure that there is harmony and consistency in the visuals, given the "split" look. This will be a flex box with
      both paragraphs side by side, with a color backdrop.  */}
      <section className="choices aboutParas">
        {/* general class name first (this is a paragraph element) and then the specific element class.  */}
        <p className="para homePara1">
          <h3 className="paraTitle">What is Benevolo?</h3>
          There are currently 8,097,282¹ residents living together in NYC. Community is more important than ever,
          especially when you have so many kinds of people packed into a small 469 square mile² city. Of this big 8 million:

          <ul>

            <li> 95,839 people of the ages 25-55 suffer from a disability that physically, mentally or emotionally
              affects their ability to live independently³</li>

            <li> Stats about how lonely people are when they are unable to go outside</li>

          </ul>

        </p>



        <p className="para homePara2">
          <h3 className="paraTitle">Why Join Benevolo?</h3>
          Do you ever ask yourself about how you could change the world around you for the better?


        </p>
      </section>
    </section>

    <br />
    {/* scroll down */}

    <section className="choices userSignUp">

      {/* IMPORT SIGN UP PAGE INTO THE USER SIGN UP BUTTONS */}
      <section className="userTypes">


        <section className="portal helperSignUpPortal">
          <img />
          <h4 className="optionTitle">Become A Helper</h4>
          <p className="roleDesc helperDesc">
            Are you willing to help others and connect with your community?
          </p>

          <button className="signUpButton"> <Link to="/sign-up-helper">Sign Up As a Helper</Link></button>
        </section>

        <br />

        <section className="portal neighborSignUpPortal">
          <img />
          <h4 className="optionTitle">Become A Neighbor</h4>
          <p className="roleDesc neighborDesc">Are you homebound, disabled, or elderly in need of assistance, and wanting to make friends?</p>
          <button className="signUpButton"><Link to="/sign-up-neighbor">Sign Up As a Neighbor</Link></button>
        </section>

      </section>
    </section>

    <footer>
      <section className="sourcesFooter">
        <h5 className="footerSourcesHeading">Sources</h5>
        <p className="source">1. World Population Review. “New York City, New York Population 2024.” Worldpopulationreview.com, 2024, worldpopulationreview.com/us-cities/new-york/new-york.</p>
        <p className="source">2. Coordinated Public Transit-Human Services Transportation Plan for NYMTC Region • Final Chapter 3. Overview of New York City.</p>
        <p className="source">3. “Spotlight: Disability and Employment in New York City.” Office of the New York City Comptroller Brad Lander, 2021, comptroller.nyc.gov/reports/spotlight-disability-and-employment-in-new-york-city/.</p>
        <p className="source"></p>
      </section>
    </footer>

  </>
}
