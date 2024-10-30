// import { Link } from "react-router-dom";


// const SignUpOptions = () => {

//     return (

//         <>
//             <section className="choices userSignUp">

//                 {/* IMPORT SIGN UP PAGE INTO THE USER SIGN UP BUTTONS */}
//                 <section className="userTypes">


//                     <section className="portal helperSignUpPortal">
//                         <img />
//                         <h4 className="optionTitle">Become A Helper</h4>
//                         <p className="roleDesc helperDesc">
//                             Are you willing to help others and connect with your community?
//                         </p>

//                         <button className="signUpButton"> <Link to="/sign-up-helper">Sign Up As a Helper</Link></button>
//                     </section>

//                     <br />

//                     <section className="portal neighborSignUpPortal">
//                         <img />
//                         <h4 className="optionTitle">Become A Neighbor</h4>
//                         <p className="roleDesc neighborDesc">Are you homebound, disabled, or elderly in need of assistance, and wanting to make friends?</p>
//                         <button className="signUpButton"><Link to="/sign-up-neighbor">Sign Up As a Neighbor</Link></button>
//                     </section>

//                 </section>
//             </section>
//         </>

        
//     )
// }

// export default SignUpOptions





import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUpOptions = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div
        className="bg-green-600 text-white p-10 rounded-lg shadow-md flex flex-col items-center"
        whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <h3 className="text-2xl font-bold mb-4">Become A Helper</h3>
        <p className="mb-6 text-center">Are you willing to help others and connect with your community?</p>
        <Link to="/sign-up-helper" className="bg-green-300 hover:bg-green-400 text-green-800 font-semibold px-6 py-3 rounded-md">
          Sign Up As a Helper
        </Link>
      </motion.div>
      <motion.div
        className="bg-green-600 text-white p-10 rounded-lg shadow-md flex flex-col items-center"
        whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <h3 className="text-2xl font-bold mb-4">Become A Neighbor</h3>
        <p className="mb-6 text-center">Are you homebound, disabled, or elderly in need of assistance?</p>
        <Link to="/sign-up-neighbor" className="bg-green-300 hover:bg-green-400 text-green-800 font-semibold px-6 py-3 rounded-md">
          Sign Up As a Neighbor
        </Link>
      </motion.div>
    </div>
  );
};

export default SignUpOptions;
