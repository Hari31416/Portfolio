import React from "react";

import {
  AiFillCode,
  AiFillHome,
  AiOutlineGithub,
  AiFillBook,
} from "react-icons/ai";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Skills",
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Blogs",
      path: "https://blogs.hari31416.in/",
      icon: <AiFillBook size={35} />,
      className: "nav-text",
      external: true,
    },
  ],
};

export default menuConfig;
