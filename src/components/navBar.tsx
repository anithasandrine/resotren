import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/LogoWite.svg";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import {
  NavigationLinks,
  NavigationLinksPhone,
} from "./navigation/navigationlink";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate()
  const [isMenuOppen, setIsMenuOpen] = useState<boolean>(false);
  function Handle_MenuBar() {
    setIsMenuOpen(!isMenuOppen);
  }

  return (
    <nav className=" bg-blue font-semibold px-4 md:px-8 lg:px-18 xl:px-20 py-1 flex justify-between items-center min-h-[10vh] md:h-[10vh] z-50">
      <div>
        <div
        onClick={()=>navigate('/')}
        className=" relative text-white  italic text-2xl">
          EventManagement system
        </div>
      </div>
      <div className="w-fit">
        <div className=" hidden md:block">
          <NavigationLinks />
        </div>
        <div className=" block md:hidden">
          <NavigationLinksPhone
            Handle_click={Handle_MenuBar}
            isMenuOpen={isMenuOppen}
          />
          <div onClick={Handle_MenuBar}>
            <FontAwesomeIcon
              className={`text-white sm:text-xl md:text-2xl lg:text-4xl transition duration-1000 ease-in-out cursor-pointer ${
                isMenuOppen ? " text-yellow-300" : ""
              }`}
              icon={isMenuOppen ? faClose : faBars}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
