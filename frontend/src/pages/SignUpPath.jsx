import { Link } from "react-router-dom";
import SignUpOptions from "../components/SignUpOptions";

const SignUpPath = () => {
  // Creating an official page that is shown to the user when they click "sign up" in the header
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-5xl font-bold text-center text-teal-900 mb-12">
        Ready to Join A Greater Cause?
      </h2>

      <SignUpOptions />
    </div>
  );
};

export default SignUpPath;
