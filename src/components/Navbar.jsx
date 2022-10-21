import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "../Helpers";
import ADD_POST from "../graphql/ADD_POST";
import { useMutation } from "@apollo/client";
import Modal from "./Modal";
import { useDropzone } from "react-dropzone";

function Navbar() {
  const [addPost] = useMutation(ADD_POST);
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [files, setFiles] = useState([]);
 
  const onDrop = useCallback(acceptedFiles => {
    setFiles(
      acceptedFiles.map((file) => 
      Object.assign(file, { preview: URL.createObjectURL(file) }))
    )
  }, []);

  const openNewPostModal = () => {
    setIsNewPostModalOpen(true);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const isFileDropped = () => {
    return files.length !== 0;
  };

  return (
    <>
      <Modal
        title="Create new post"
        open={isNewPostModalOpen}
        setOpen={setIsNewPostModalOpen}
      >
        {!isFileDropped() ? (
          <div
            {...getRootProps()}
            className="flex flex-col items-center justify-center h-full"
          >
            <input {...getInputProps()} />
            <FontAwesomeIcon icon="photo-film" className={`text-7xl`} />
            <h2 className="py-3 text-2xl font-light">
              Drag photos and videos here
            </h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
              Select from Device
            </button>
          </div>
        ) : (
          <div>{files[0].name}</div>
        )}
      </Modal>

      <nav className="sticky top-0 min-h-fit bg-white w-full border border-b-1 z-50">
        <div className="container max-w-5xl">
          <div className="flex flex-row py-1 items-center">
            <div className="basis-1/2 pl-3 lg:p-0">
              <Link to="/">
                <img src="/images/pistachogram.png" alt="Logo" width="180" />
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
                  <a
                    className="cursor-pointer"
                    onClick={() => openNewPostModal()}
                  >
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
                        className="rounded-full w-6 "
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
                            {({ active }) => (
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

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/swordanto"
                                className={`${classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}`}
                              >
                                <FontAwesomeIcon
                                  icon="bookmark"
                                  className="mr-2"
                                />
                                Saved
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/swordanto"
                                className={`${classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}`}
                              >
                                <FontAwesomeIcon icon="gear" className="mr-2" />
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                className={`${classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}`}
                              >
                                Logout
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
    </>
  );
}

export default Navbar;
