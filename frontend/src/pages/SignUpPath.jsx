import { Link } from "react-router-dom";
import SignUpOptions from "../components/SignUpOptions";

const SignUpPath = () => {

    //just creating an official page that is shown to the user when they click "sign up" in the header
    return (

        <>
            <h2 id="signUpPage-Header">Ready to Join A Greater Cause?</h2>

            <SignUpOptions />
        </>
    )
}

export default SignUpPath