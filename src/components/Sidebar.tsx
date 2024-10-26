// "use client";

// import React, { useState, useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { NavLinks } from "./Constants"; // Ensure this imports your NavLinks correctly
// import Transition from "./Transition"; // Ensure you have a Transition component
// import NavLink from "./NavLink"; // Import the NavLink component

// const Sidebar: React.FC = () => {
//   const [isRouting, setIsRouting] = useState<boolean>(false);
//   const [isActive, setIsActive] = useState<string>("Home");
//   const [prevPath, setPrevPath] = useState<string>("/");

//   const path = usePathname();

//   useEffect(() => {
//     if (prevPath !== path) {
//       setIsRouting(true);
//     }
//   }, [path, prevPath]);

//   useEffect(() => {
//     if (isRouting) {
//       setPrevPath(path);
//       const timeout = setTimeout(() => {
//         setIsRouting(false);
//       }, 1200);

//       return () => clearTimeout(timeout);
//     }
//   }, [isRouting, path]);

//   return (
//     <div className="fixed right-8 top-[40%] z-[20] h-[200px] w-[48px] rounded-full bg-gray-500 bg-opacity-50">
//       <AnimatePresence mode="wait">
//         {isRouting && <Transition />}
//         <div className="flex flex-col gap-5 pb-3 justify-center items-center h-full">
//           {NavLinks.map((navLink) => (
//             <NavLink
//               key={navLink.link} // Use link as key for uniqueness
//               href={navLink.link} // Pass the link
//               title={navLink.about} // Pass the title
//               onClick={() => setIsActive(navLink.Contact)} // Set active link on click
//             />
//           ))}
//         </div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Sidebar;
