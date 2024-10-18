import { Link } from "react-router-dom";

const SignUpOptions = () => {

    return (

        <>
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
        </>
    )
}

export default SignUpOptions