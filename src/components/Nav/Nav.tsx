import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { Link } from '../Link';
import { NavLink } from './NavLink';
import { useResize } from '../../hooks';

export const Nav: React.FC = () => {
  const [isOpen, setNavOpen] = React.useState<boolean>(false);
  const handleResize = () => {
    return setNavOpen(false);
  };

  const toggleNav = () => setNavOpen(!isOpen);
  useHotkeys('esc', () => setNavOpen(false));
  useResize(handleResize);

  return (
    <>
      <nav
        id="header"
        className="border-dark_pink-100 pb-4
         w-full  border-b shadow-md bg md:shadow-md md:bg-dark_pink-100 md:border-none"
      >
        <div className="container text-black content-start flex flex-wrap items-center justify-between md:flex-row">
          <div className="flex bg-dark_pink-500 w-5/12 p-2">
            <div className="">
              <picture>
                <img
                  className="logo pl-8"
                  // eslint-disable-next-line global-require
                  src={require('../../assets/images/logos/logo-lg-resize.png')}
                  alt="Eye in triangle, logo"
                />
              </picture>
            </div>
            <div className="inline-block">
              <Link to="/" className="m-0">
                <span className="text-2xl text-black m-3">The Cordial Eye</span>
              </Link>
            </div>
          </div>
          <div className="arrow-right m-0" />
          <div className="block md:hidden">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 text-gray-400 border border-gray-400 rounded hover:text-gray-300 hover:border-gray-300"
              onClick={toggleNav}
              type="button"
            >
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            id="nav-content"
            className={`flex-grow h-8 w-1/2 md:w-auto md:block md:pt-0 transition-all ease-in-out transform md:transform-none md:visible ${
              !isOpen && 'hidden'
            }`}
          >
            <div className="flex-row pl-4">
              <div className="flex flex-col text-white items-end justify-end flex-1 -mx-1 md:items-center md:flex-row">
                <NavLink to="/about/">Home</NavLink>
                <NavLink to="/about/">About</NavLink>
                <NavLink to="#">Contact</NavLink>
                <NavLink to="#">Events</NavLink>
                <NavLink to="#">
                  <span className="relative inline-block px-2 py-1 text-base uppercase transition-colors duration-200 ease-in-out bg-white border-2 rounded text-black border-black fold-bold hover:bg-black hover:text-white">
                    Donate
                  </span>
                </NavLink>
              </div>
              <div className="flex flex-col items-end justify-end flex-1 -mx-1 mb-2 md:flex-row text-black">
                <NavLink to="/about/">Gallery</NavLink>
                <NavLink to="/about/">Programming</NavLink>
                <NavLink to="#">Store</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
