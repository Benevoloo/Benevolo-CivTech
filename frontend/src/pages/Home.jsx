// import React from "react";
// import { Link } from "react-router-dom";
// import { motion, useViewportScroll, useTransform } from "framer-motion";
// import SignUpOptions from "../components/SignUpOptions";

// export default function HomePage() {
//   const { scrollY } = useViewportScroll();
//   const yRange = useTransform(scrollY, [0, 300], [0, -50]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">

//       {/* Main First section  */}
//       <motion.section
//         className="flex items-center justify-center text-center min-h-[60vh] py-20 px-6 bg-yellow-300"
//         // className="flex items-center justify-center text-center min-h-[60vh] py-20 px-6 bg-green-100" // teal vers.
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//         style={{ y: yRange }}
//       >
//         <div className="max-w-3xl userHook">
//           <motion.h1
//             className="text-5xl font-extrabold text-teal-900 mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
//           >
//             Community is Key.
//           </motion.h1>
//           <motion.p
//             className="text-lg text-teal-900 mb-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
//           >
//             We believe that community helps us grow, connect, and support each other. Discover how Benevolo can help you make meaningful connections today.
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* Image*/}
//       <motion.section
//         className="bg-white py-24 px-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//           <motion.div
//             className="flex justify-center"
//             initial={{ x: -100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           >
//             <img className="rounded-lg shadow-lg" alt="Elderly woman smiling." src="https://cdn.sixtyandme.com/wp-content/uploads/2015/02/Sixty-and-Me_Helping-Others.jpg" />
//           </motion.div>
//           <motion.div
//             className="flex flex-col justify-center"
//             initial={{ x: 100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           >
//             {/* What is Benevolo */}
//             <h2 className="text-4xl font-bold text-teal-900 mb-6">What is Benevolo?</h2>
//             <p className="text-lg text-gray-700 mb-6">
//               There are currently 8,097,282¹ residents living together in NYC. Community is more important than ever, especially when you have so many kinds of people packed into a small 469 square mile² city.
//             </p>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>95,839 people of the ages 25-55 suffer from a disability that affects their ability to live independently³.</li>
//               <li>Many individuals face loneliness when unable to go outside.</li>
//             </ul>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Why Join Section */}
//       <motion.section
//         className="bg-yellow-300 py-24 px-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//       >
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-teal-900 mb-8">Why Join Benevolo?</h2>
//           <p className="text-lg text-gray-800 mb-12">Do you ever ask yourself how you could change the world around you for the better? Benevolo provides opportunities for you to help others and make genuine connections.</p>
//         </div>
//       </motion.section>

//       {/* Sign Up Options Section */}
//       <motion.section
//         className="bg-teal-100 py-24 px-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//           <motion.div
//             className="bg-green-600 text-white p-10 rounded-lg shadow-md flex flex-col items-center"
//             whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//           >
//             <h3 className="text-2xl font-bold mb-4">Become A Helper</h3>
//             <p className="mb-6 text-center">Are you willing to help others and connect with your community?</p>
//             <Link to="/sign-up-helper" className="bg-green-300 hover:bg-green-400 text-green-800 font-semibold px-6 py-3 rounded-md">Sign Up As a Helper</Link>
//           </motion.div>
//           <motion.div
//             className="bg-green-600 text-white p-10 rounded-lg shadow-md flex flex-col items-center"
//             whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//           >
//             <h3 className="text-2xl font-bold mb-4">Become A Neighbor</h3>
//             <p className="mb-6 text-center">Are you homebound, disabled, or elderly in need of assistance?</p>
//             <Link to="/sign-up-neighbor" className="bg-green-300 hover:bg-green-400 text-green-800 font-semibold px-6 py-3 rounded-md">Sign Up As a Neighbor</Link>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 py-12 text-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h5 className="text-lg font-bold mb-4">Sources</h5>
//           <p className="text-sm mb-2">1. World Population Review. "New York City, New York Population 2024." Worldpopulationreview.com, 2024.</p>
//           <p className="text-sm mb-2">2. Coordinated Public Transit-Human Services Transportation Plan for NYMTC Region • Final Chapter 3.</p>
//           <p className="text-sm mb-2">3. "Spotlight: Disability and Employment in New York City." Office of the New York City Comptroller, 2021.</p>
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
    <div className="min-h-screen bg-white">

      {/* Main First section  */}
      <motion.section
        className="flex items-center justify-center text-center min-h-[60vh] py-24 px-8 bg-[#E6F2F1]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ y: yRange }}
      >
        <div className="max-w-12xl userHook">
          <motion.h1
            className="text-7xl font-bold text-[#1A3C40] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          >
            Community is Key.
          </motion.h1>
          <motion.p
            className="text-2xl text-[#1A3C40] mb-10" // Updated text color to dark teal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          >
            Discover how Benevolo can help your community connect & support each other
          </motion.p>
        </div>
      </motion.section>

      {/* Image*/}
      <motion.section
        className="bg-[#F8F9FA] py-20 px-8" // Updated background to a light grayish color
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="flex justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img className="rounded-lg shadow-lg" alt="Elderly woman smiling." src="https://cdn.sixtyandme.com/wp-content/uploads/2015/02/Sixty-and-Me_Helping-Others.jpg" />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* What is Benevolo */}
            <h2 className="text-5xl font-bold text-[#1A3C40] mb-4">What is Benevolo?</h2> 
            <p className="text-xl text-[#495057] mb-5"> 
            Benevolo is a community-driven app that connects neighbors to help each other with daily tasks and errands. It’s designed to make acts of kindness easy and accessible, fostering a supportive network where anyone can lend a hand or receive help when needed.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Join Section */}
      <motion.section
        className="bg-[#E6F2F1] py-20 px-8" // Updated to a soft blue-green similar to BetterHelp's calming palette
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1A3C40] mb-6">Why Join Benevolo?</h2> 
          <p className="text-2xl text-[#495070] mb-10">
            Do you ever ask yourself how you could change the world around you for the better? Benevolo provides opportunities for you to help others and make genuine connections.
          </p>
        </div>
      </motion.section>


      {/* Sign Up Options Section */}
      <motion.section
        className="bg-[#F8F9FA] py-20 px-8" // Updated to a light grayish background for consistency
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
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
      </motion.section>

      {/* Footer Section */}
      <footer className="bg-[#1A3C40] py-16 text-white"> {/* Updated to dark teal */}
        <div className="max-w-6xl mx-auto text-center">
          <h5 className="text-lg font-bold mb-4">Sources</h5>
          <p className="text-sm mb-2">1. World Population Review. "New York City, New York Population 2024." Worldpopulationreview.com, 2024.</p>
          <p className="text-sm mb-2">2. Coordinated Public Transit-Human Services Transportation Plan for NYMTC Region • Final Chapter 3.</p>
          <p className="text-sm mb-2">3. "Spotlight: Disability and Employment in New York City." Office of the New York City Comptroller, 2021.</p>
          <p className="text-sm mt-4">2024 Benevolo. Made by Fiona, Chris, Alex</p>
        </div>
      </footer>
    </div>
  );
}
