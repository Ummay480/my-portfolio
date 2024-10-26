// Import necessary icons from react-icons/rx
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
  RxHome,
  RxPerson,
  RxDashboard,
} from "react-icons/rx";

// Social Media Links
export const Socials = [
  {
    name: "Discord",
    src: "/assets/discord.svg",
  },
  {
    name: "Facebook",
    src: "/assets/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/assets/instagram.svg",
  },
];

// Navigation Links
export const NavLinks = [
  {
    name: "Home",
    icon: <RxHome />, // Correct way to render icons as React components
    link: "/",
  },
  {
    name: "About me",
    icon: <RxPerson />,
    link: "/about-me",
  },
  {
    name: "Projects",
    icon: <RxDashboard />,
    link: "/my-projects",
  },
];

// Project Images Set 1
export const ProImages = [
  {
    src: "/assets/projects/SpaceCity.jpg",
  },
  {
    src: "/assets/projects/SpaceCity1.jpg",
  },
  {
    src: "/assets/projects/SpaceCity2.jpg",
  },
  {
    src: "/assets/projects/SpaceCity3.jpg",
  },
];

// Project Images Set 2
export const ProImages2 = [
  {
    src: "/assets/projects/Orange1.jpeg",
  },
  {
    src: "/assets/projects/Orange2.jpeg",
  },
  {
    src: "/assets/projects/Orange3.jpeg",
  },
  {
    src: "/assets/projects/Orange4.jpeg",
  },
];

// Service Data Section
export const ServiceData = [
  {
    icon: <RxReader />, // Icons should be passed as React components
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity7.jpeg",
  },
  {
    icon: <RxCrop />,
    title: "Development",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity9.jpeg",
  },
  {
    icon: <RxPencil2 />,
    title: "Branding",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity1.jpg",
  },
  {
    icon: <RxDesktop />,
    title: "Design",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity6.jpeg",
  },
  {
    icon: <RxAccessibility />,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity5.jpeg",
  },
  {
    icon: <RxRocket />,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity8.jpeg",
  },
];
