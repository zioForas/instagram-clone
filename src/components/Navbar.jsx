import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

function Navbar() {
  return (
    <nav className="sticky top-0 w-full border border-b-1 z-50 bg-white">
      <div className="container max-w-5xl">
        <div className="flex flex-row py-1 items-center">
          <div className="basis-1/2 md:basis-1/3">
            <Link to="/">
              <img src="/images/logo-instagram.svg" alt="Logo" width="120" />
            </Link>
          </div>

          <div className="basis-1/3 hidden md:block">
            <div className="relative">
              <FontAwesomeIcon
                icon="fasolid fa-magnifying-glass"
                className="absolute left-3 top-3 text-gray-300"
              />
              <input
                type="text"
                className="p-2 bg-gray-100 rounded-lg w-80 pl-10 align-middle focus:outline-0 placeholder:font-light"
              />
            </div>
          </div>

          <div className="basis-1/2 md:basis-1/3">
            <ul className="flex flex-row space-x-4 p-2 text-2xl justify-end items-center">
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon="fa-solid fa-house" />
                </Link>
              </li>
              <li>
                <a className="cursor-pointer">
                  <FontAwesomeIcon icon="fa-regular fa-comment-dots" />
                </a>
              </li>
              <li>
                <a className="cursor-pointer">
                  <FontAwesomeIcon icon="fa-regular fa-square-plus" />
                </a>
              </li>
              <li>
                <a className="cursor-pointer">
                  <FontAwesomeIcon icon="fa-regular fa-compass" />
                </a>
              </li>
              <li>
                <a className="cursor-pointer">
                  <FontAwesomeIcon icon="fa-regular fa-heart" />
                </a>
              </li>
              <li>
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="inline-block w-8 h-8 justify-center bg-white text-sm font-medium text-gray-700">
                    <img
                      src="https://avatars.githubusercontent.com/u/107312386?v=4"
                      alt="profile"
                      className="rounded-full w-6"
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Items
                      className="absolute origin-top-right right-0 mt-2 w-56 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 
                    focus:outline-none divide-y divide-gray-100"
                    >
                      <div className="py-1">
                        <Menu.Item>
                          {({active}) => (
                            <Link
                            to="/swordanto"
                            className={`${classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                                 "block px-4 py-2 text-sm text-gray-700"
                                )}`}
                          >
                            <FontAwesomeIcon icon="user" className="mr-2" />{" "}
                            Profile
                          </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
