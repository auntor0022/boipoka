import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const link = (
    <>
      <Link to={"/"} className="mr-6 font-normal text-lg">
        Home
      </Link>
      <Link to={"/ReadList"} className="mr-6 font-normal text-lg">
        Listed Books
      </Link>
      <Link  className="mr-6 font-normal text-lg">Pages to Read</Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="font-bold text-3xl">Boi POka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
