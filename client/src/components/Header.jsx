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
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
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
      </div>
    </header>
  );
};
ç
export default Header;
