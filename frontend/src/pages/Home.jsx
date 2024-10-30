
import React from "react";
import { Link } from "react-router-dom";
//import Sign up button
import SignUpOptions from "../components/SignUpOptions";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import { useNavigate } from "react-router-dom";

export default function HomePage() {


//   return (
//     <>
//       {/* user visual "hook"-- how can we showcase benevelos values and use them to draw users into the idea? */}
//       <section className="homeHeader">
//         <h1 className="userHook" id="hook">Community is Key.</h1>
//       </section>

//       <br />

//       <section className="whyBenev">
//         <section className="hookImg">
//           <img className="helpingPeople" alt="Elderly woman smiling, holding the hand of a woman blurred and closer to the camera, with the bottom of her face showing." src="https://cdn.sixtyandme.com/wp-content/uploads/2015/02/Sixty-and-Me_Helping-Others.jpg" />
//         </section>


//         {/* making sure that there is harmony and consistency in the visuals, given the "split" look. This will be a flex box with
//       both paragraphs side by side, with a color backdrop.  */}
//         <section id="aboutParas">
//           {/* general class name first (this is a paragraph element) and then the specific element class.  */}
>>

//           <section id="homePara1">
//             <h3 className="paraTitle">What is Benevolo?</h3>
//             <p className="para">

//               There are currently 8,097,282¹ residents living together in NYC. Community is more important than ever,
//               especially when you have so many kinds of people packed into a small 469 square mile² city. Of this big 8 million:

//             </p>

//             <ul>

//               <li> 95,839 people of the ages 25-55 suffer from a disability that physically, mentally or emotionally
//                 affects their ability to live independently³</li>

//               <li> Stats about how lonely people are when they are unable to go outside</li>

//             </ul>
//           </section>


//           <section id="homePara2">
//             <h3 className="paraTitle">Why Join Benevolo?</h3>
//             <p className="para">
//               Do you ever ask yourself about how you could change the world around you for the better?
//             </p>
//           </section>

//         </section>

//         <br />
//         {/* scroll down to sign up options component*/}

        // {<SignUpOptions />}

//         <footer>
//           <section className="sourcesFooter">
//             <h5 className="footerSourcesHeading">Sources</h5>
//             <p className="source">1. World Population Review. “New York City, New York Population 2024.” Worldpopulationreview.com, 2024, worldpopulationreview.com/us-cities/new-york/new-york.</p>
//             <p className="source">2. Coordinated Public Transit-Human Services Transportation Plan for NYMTC Region • Final Chapter 3. Overview of New York City.</p>
//             <p className="source">3. “Spotlight: Disability and Employment in New York City.” Office of the New York City Comptroller Brad Lander, 2021, comptroller.nyc.gov/reports/spotlight-disability-and-employment-in-new-york-city/.</p>
//             <p className="source"></p>
//           </section>
//         </footer>

//         <section />

//       </section>

//     </>



//   )


// }









// import React from "react";
// import { Link } from "react-router-dom";
// import SignUpOptions from "../components/SignUpOptions";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">

//       {/* Hero Section */}
//       <section className="flex items-center justify-center text-center min-h-[60vh] py-20 px-6 bg-yellow-300">
//         <div className="max-w-3xl">
//           <h1 className="text-5xl font-extrabold text-teal-900 mb-8">Community is Key.</h1>
//           <p className="text-lg text-teal-900 mb-12">We believe that community helps us grow, connect, and support each other. Discover how Benevolo can help you make meaningful connections today.</p>
//         </div>
//       </section>

//       {/* Image and About Section */}
//       <section className="bg-white py-24 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="flex justify-center">
//             <img className="rounded-lg shadow-lg" alt="Elderly woman smiling, holding the hand of a woman blurred and closer to the camera, with the bottom of her face showing." src="https://cdn.sixtyandme.com/wp-content/uploads/2015/02/Sixty-and-Me_Helping-Others.jpg" />
//           </div>
//           <div className="flex flex-col justify-center">
//             <h2 className="text-4xl font-bold text-teal-900 mb-6">What is Benevolo?</h2>
//             <p className="text-lg text-gray-700 mb-6">
//               There are currently 8,097,282¹ residents living together in NYC. Community is more important than ever, especially when you have so many kinds of people packed into a small 469 square mile² city.
//             </p>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>95,839 people of the ages 25-55 suffer from a disability that affects their ability to live independently³.</li>
//               <li>Many individuals face loneliness when unable to go outside.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Why Join Section */}
//       <section className="bg-yellow-300 py-24 px-6">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-teal-900 mb-8">Why Join Benevolo?</h2>
//           <p className="text-lg text-gray-800 mb-12">Do you ever ask yourself how you could change the world around you for the better? Benevolo provides opportunities for you to help others and make genuine connections.</p>
//         </div>
//       </section>

//       {/* Sign Up Options Section */}
//       <section className="bg-teal-100 py-24 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="bg-green-600 text-white p-10 rounded-lg shadow-md flex flex-col items-center">
//             <h3 className="text-2xl font-bold mb-4">Become A Helper</h3>
//             <p className="mb-6 text-center">Are you willing to help others and connect with your community?</p>
//             <Link to="/signup/helper" className="bg-green-300 hover:bg-green-400 text-green-800 font-semibold px-6 py-3 rounded-md">Sign Up As a Helper</Link>
//           </div>
//           <div className="bg-green-600 text-white p-10 rounded-lg shadow-md flex flex-col items-center">
//             <h3 className="text-2xl font-bold mb-4">Become A Neighbor</h3>
//             <p className="mb-6 text-center">Are you homebound, disabled, or elderly in need of assistance, and wanting to make friends?</p>
//             <Link to="/signup/neighbor" className="bg-green-300 hover:bg-green-400 text-green-800 font-semibold px-6 py-3 rounded-md">Sign Up As a Neighbor</Link>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 py-12 text-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h5 className="text-lg font-bold mb-4">Sources</h5>
//           <p className="text-sm mb-2">1. World Population Review. “New York City, New York Population 2024.” Worldpopulationreview.com, 2024.</p>
//           <p className="text-sm mb-2">2. Coordinated Public Transit-Human Services Transportation Plan for NYMTC Region • Final Chapter 3.</p>
//           <p className="text-sm mb-2">3. “Spotlight: Disability and Employment in New York City.” Office of the New York City Comptroller, 2021.</p>
//           <p className="text-sm mt-4">2024 Benevolo. Made by Fiona, Chris, Alex</p>
//         </div>
//       </footer>
//     </div>
//   );
// }





import React from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import SignUpOptions from "../components/SignUpOptions";

export default function HomePage() {
  const { scrollY } = useViewportScroll();
  const yRange = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">

      {/* Main First section  */}
      <motion.section
        className="flex items-center justify-center text-center min-h-[60vh] py-20 px-6 bg-yellow-300"
        // className="flex items-center justify-center text-center min-h-[60vh] py-20 px-6 bg-green-100" // teal vers.
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ y: yRange }}
      >
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl font-extrabold text-teal-900 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          >
            Community is Key.
          </motion.h1>
          <motion.p
            className="text-lg text-teal-900 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          >
            We believe that community helps us grow, connect, and support each other. Discover how Benevolo can help you make meaningful connections today.
          </motion.p>
        </div>
      </motion.section>

      {/* Image*/}
      <motion.section
        className="bg-white py-24 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="flex justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img className="rounded-lg shadow-lg" alt="Elderly woman smiling, holding the hand of a woman blurred and closer to the camera, with the bottom of her face showing." src="https://cdn.sixtyandme.com/wp-content/uploads/2015/02/Sixty-and-Me_Helping-Others.jpg" />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* What is Benevolo */}
            <h2 className="text-4xl font-bold text-teal-900 mb-6">What is Benevolo?</h2>
            <p className="text-lg text-gray-700 mb-6">
              There are currently 8,097,282¹ residents living together in NYC. Community is more important than ever, especially when you have so many kinds of people packed into a small 469 square mile² city.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>95,839 people of the ages 25-55 suffer from a disability that affects their ability to live independently³.</li>
              <li>Many individuals face loneliness when unable to go outside.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Join Section */}
      <motion.section
        className="bg-yellow-300 py-24 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-900 mb-8">Why Join Benevolo?</h2>
          <p className="text-lg text-gray-800 mb-12">Do you ever ask yourself how you could change the world around you for the better? Benevolo provides opportunities for you to help others and make genuine connections.</p>
        </div>
      </motion.section>

      {/* Sign Up Options Section */}
      <motion.section
        className="bg-teal-100 py-24 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-green-600 text-white p-10 rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <h3 className="text-2xl font-bold mb-4">Become A Helper</h3>
            <p className="mb-6 text-center">Are you willing to help others and connect with your community?</p>
            <Link to="/sign-up-helper" className="bg-green-300 hover:bg-green-400 text-green-800 font-semibold px-6 py-3 rounded-md">Sign Up As a Helper</Link>
          </motion.div>
          <motion.div
            className="bg-green-600 text-white p-10 rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <h3 className="text-2xl font-bold mb-4">Become A Neighbor</h3>
            <p className="mb-6 text-center">Are you homebound, disabled, or elderly in need of assistance?</p>
            <Link to="/sign-up-neighbor" className="bg-green-300 hover:bg-green-400 text-green-800 font-semibold px-6 py-3 rounded-md">Sign Up As a Neighbor</Link>
          </motion.div>
        </div>
      </motion.section>
