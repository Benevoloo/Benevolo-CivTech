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
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    <motion.div
      className="bg-[#1A3C40] text-white p-12 rounded-lg shadow-md flex flex-col items-center" // Updated to dark teal
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <h3 className="text-3xl font-bold mb-4">Become A Helper</h3>
      <p className="mb-6 text-center">Are you willing to help others and connect with your community?</p>
      <Link to="/sign-up-helper" className="bg-[#4D805A] hover:bg-[#87A776] text-slate-100 font-semibold px-6 py-3 rounded-md">Sign Up As a Helper</Link> {/* Updated button colors */}
    </motion.div>
    <motion.div
      className="bg-[#1A3C40] text-white p-12 rounded-lg shadow-md flex flex-col items-center" // Updated to dark teal
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      
      {/* NEIGHBOR */}
      <h3 className="text-3xl font-bold mb-4">Become A Neighbor</h3>
      <p className="mb-6 text-center">Are you homebound, disabled, or elderly in need of assistance?</p>
      <Link to="/sign-up-neighbor" className="bg-[#4D805A] hover:bg-[#87A776] text-slate-100 font-semibold px-6 py-3 rounded-md">Sign Up As a Neighbor</Link> {/* Updated button colors */}
    </motion.div>
  </div>
  );
};

export default SignUpOptions;
