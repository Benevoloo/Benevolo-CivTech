//import Sign up button
export default function HomePage() {



  return <>
    {/* user visual "hook"-- how can we showcase benevelos values and use them to draw users into the idea? */}
    <section className="homeHeader">
      <h1 className="userHook">Community is Key.</h1>
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
          There are currently 8,097,282¹ residents living together in NYC. Yet,

          <ul>

            <li> Stats about how many people are friends with their neighbors</li>

            <li> Stats about how lonely everyone is</li>

            <li> Stats about how lonely people are when they are unable to go outside</li>

          </ul>

        </p>



        <p className="para homePara2">
          why join benevolo? connect with your community, make friends, and do some good in your day to day.

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

          <button className="signUpButton">Sign Up As a Helper</button>
        </section>

        <br />

        <section className="portal neighborSignUpPortal">
          <img />
          <h4 className="optionTitle">Become A Neighbor</h4>
          <p className="roleDesc neighborDesc">Are you homebound, disabled, or elderly in need of assistance, and wanting to make friends?</p>
          <button className="signUpButton">Sign Up As A Neighbor</button>
        </section>

      </section>
    </section>

    <footer>

    </footer>

  </>
}
