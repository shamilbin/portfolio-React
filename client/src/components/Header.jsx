// import motion from "framer-motion";

// const Header = () => {
//   return (
//     <div>
//       <header className="absolute w-full z-50 transition-all duration-300">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 ">
//           {/* */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               type: "spring",
//               stiffness: 100,
//               damping: 25,
//               delay: 0.3,
//               duration: 1.2,
//             }}
//             className="flex items-center"
//           >
//             <div className="h-10 w-10 rounded-xl text-purple-800 bg-gradient-to-r from-gray-500 to-gray-100 flex justify-center pt-2 mt-5 font-bold text-xl mr-3 ">
//               S
//             </div>
//             <span className="text-xl ml-2 font-bold bg-gradient-to-r from-gray-300  to-gray-100 bg-clip-text text-transparent ">
//               Shamil
//             </span>
//           </motion.div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

// import {FiGithub} from "react-icons/fi"
// import { motion } from "framer-motion";
// import { a } from "framer-motion/client";

// const Header = () => {
//   return (
//     <header className="absolute w-full z-50 transition-all duration-300">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 25,
//             delay: 0.3,
//             duration: 1.2,
//           }}
//           className="flex items-center"
//         >
//           <div className="h-10 w-10 rounded-xl text-purple-800 bg-gradient-to-r from-gray-500 to-gray-100 flex justify-center items-center font-bold text-xl mr-3">
//             S
//           </div>
//           <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
//             Shamil
//           </span>
//         </motion.div>
//         {/* Navigation */}

//         <nav className=" lg:flex hidden space-x-8  ">
//           {["Home", "About", "Project", "Experiance", "Contact"].map(
//             (item, index) => (
//               <motion.a
//                 key={item}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 100,
//                   damping: 20,
//                   delay: 0.5 + index * 0.2,
//                   duration: 1.2,
//                 }}
//                 className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group "
//                 href="#"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all "></span>
//               </motion.a>
//             )
//           )}
//         </nav>
//          {/* social icons */}
//          <div className="md:flex hidden items-center space-x-4">
//             <a href="#">
//                 <FiGithub className="w-5 h-5"/>
//             </a>
//          </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl text-purple-800 bg-gradient-to-r from-gray-500 to-gray-100 flex justify-center items-center font-bold text-xl mr-3">
            S
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Shamil
          </span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-10">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.5 + index * 0.15,
                  duration: 1.2,
                }}
                href="#"
                className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 transition"
          >
            <FiGithub size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
