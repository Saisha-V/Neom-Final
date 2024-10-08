import { useState, useEffect } from "react";
import { HR } from "flowbite-react";
import { GoBellFill } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import PopupMessage from "./PopupMessage";

const Header = () => {
  const [isGlobeDropdownOpen, setIsGlobeDropdownOpen] = useState(false);
  const [isHamburgerDropdownOpen, setIsHamburgerDropdownOpen] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  const toggleGlobeDropdown = () => {
    setIsGlobeDropdownOpen(!isGlobeDropdownOpen);
  };

  const toggleHamburgerDropdown = () => {
    setIsHamburgerDropdownOpen(!isHamburgerDropdownOpen);
  };

  const handleBellClick = () => {
    setIsMessageVisible((prev) => !prev);
    setHasNotifications(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMessageVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav className=" flex justify-between items-center bg-[#F9F7F2] p-4">
        <div className="flex items-center">
          <img
            src="./src/assests/images/logo-black.svg"
            alt="Logo"
            className="w-[80px] ml-8"
          />
        </div>

        <div className="flex items-center">
          <ul className="flex space-x-5 font-poppins">
            <li>
              <a
                href="/dashboard"
                className="text-[#555] text-lg font-medium border-b-2 border-transparent hover:border-[#e60023] hover:text-[#e60023]"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/favorites"
                className="text-[#555] text-lg font-medium border-b-2 border-transparent hover:border-[#e60023] hover:text-[#e60023]"
              >
                My favorites
              </a>
            </li>
            <li>
              <a
                href="/upcoming_events"
                className="text-[#555] text-lg font-medium border-b-2 border-transparent hover:border-[#e60023] hover:text-[#e60023]"
              >
                Upcoming events
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-4 ml-16 mr-16">
            <div className="relative">
              <GoBellFill
                onClick={handleBellClick}
                className="text-[#333] text-2xl cursor-pointer"
              />
              {hasNotifications && (
                <div className="absolute top-0 right-0 bg-[#b19604] rounded-full h-2 w-2" />
              )}
              {isMessageVisible && <PopupMessage />}{" "}
              {/* Render PopupMessage here */}
            </div>

            <div className="relative">
              <div className="flex flex-row rounded-full bg-white px-4 py-2 ">
                <RxHamburgerMenu
                  onClick={toggleHamburgerDropdown}
                  className="text-[#333] text-2xl mt-1 mr-2 cursor-pointer"
                />
                <div className="bg-[#b19604] cursor-pointer rounded-full h-8 w-8 flex font-poppins font-light items-center justify-center text-white ">
                  S
                </div>
              </div>
              {isHamburgerDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg text-sm font-poppins">
                  <li>
                    <a
                      href="/profile"
                      className="block px-4 py-2 hover:bg-[#b19604] text-black"
                    >
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="/feedback"
                      className="block px-4 py-2 hover:bg-[#b19604] text-black"
                    >
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a
                      href="/settings"
                      className="block px-4 py-2 hover:bg-[#b19604] text-black"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <div className="relative">
              <CiGlobe
                onClick={toggleGlobeDropdown}
                className="text-[#333] text-2xl cursor-pointer"
              />
              {isGlobeDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg text-sm font-poppins">
                  <li>
                    <a
                      href="#english"
                      className="block px-4 py-2 hover:bg-[#b19604] text-black"
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      href="#french"
                      className="block px-4 py-2 hover:bg-[#b19604] text-black"
                    >
                      French
                    </a>
                  </li>
                  <li>
                    <a
                      href="#arabic"
                      className="block px-4 py-2 hover:bg-[#b19604] text-black"
                    >
                      Arabic
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
      <HR className="my-0 border-gray-200" />
    </>
  );
};

export default Header;
