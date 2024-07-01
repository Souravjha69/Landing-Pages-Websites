import React, { useState } from "react";
import logo from "./../assets/images/logo.webp";
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";



import "../index.css";

function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    console.log("hiii");
    setToggle(true);
  };

  const handleSidemenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <FaSearch />,
      name: "Search",
    },
    {
      icon: <TbCircleDashedPercentage />,
      name: "Discount",
      sup: "New"
    },
    {
      icon: "",
      name: "Help",
    },
    {
        icon: <FaUser/>,
        name: "Signin"
    },
    {
        icon: <FaShoppingCart/>,
        name: "Cart"
    }
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={handleSidemenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="w-[400px] h-full bg-white absolute duration-[400ms]"
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-3 shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px] cursor-pointer">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <div className="ml-4 cursor-pointer">
            <span className="font-bold border-b-[3px] border-[black] hover:text-[#fc8019]">
              Noid One
            </span>{" "}
            Noida, Uttar Pradesh, India{" "}
            <RxCaretDown
              fontSize={25}
              onClick={showSideMenu}
              className="font-bold inline text-[0.9rem] text-[#fc8019] cursor-pointer"
            />
          </div>
          <nav className="flex list-none gap-10 ml-auto font-semi-bold text-[18px]">
            {links.map((link, index) => (
              <li key={index} className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer">
                {link.icon}
                {link.name}
                <sup>{link.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
