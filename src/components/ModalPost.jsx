import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "./Modal";

// Funciones de modal

function ModalPost(props) {
  const { open, setOpen } = props;

  return (
    <Modal open={open} setOpen={setOpen} size="lg">
      <div className="flex flex-row h-full">
        <div className="w-3/5 ">
          <img className="object-cover h-full w-full" src="https://picsum.photos/1000.jpg" />
        </div>
        <div className="w-2/5 relative pt-16">
          
          <div className="absolute top-0 w-full p-3 flex flex-row border-b">
            <div className="flex-1">
              <a href="" className="">
                <img
                  className="object-cover rounded-full w-8 h-8 inline"
                  src="https://picsum.photos/200/300.jpg"
                />
                <span className="font-medium text-sm ml-2">
                  cool.places
                </span>
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon="ellipsis" />
            </div>
          </div>

          <div className="overflow-scroll h-full pb-48">
            <div className="flex flex-row p-3">
              <div>
                <img
                  src="https://picsum.photos/100.jpg"
                  alt=""
                  className="object-cover w-8 h-8 rounded-full"
                />
              </div>
              <div>
                <div className="px-3 text-sm">
                  <span className="font-medium mr-2">Food.channel</span>
                  so cool!
                  </div>
              </div>
            </div>
            <div className="flex flex-row p-3">
              <div>
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="object-cover w-8 h-8 rounded-full inline"
                />
              </div>

              <div className="grow relative">
                <div className="px-4 text-sm">
                  <span className="font-medium mr-2">burger-lover</span>
                  So very cool!
                </div>
                <a
                  href=""
                  className="absolute top-0 right-0 block float-right text-xs cursor-pointer text-red-600"
                >
                  <FontAwesomeIcon icon="heart" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full border-t bg-white">
            <div className="p-3 flex flex-row text-2-xl w-full">
              <div className="flex-1">
                <a href="" className="mr-3 text-red-600 cursor-pointer">
                  <FontAwesomeIcon icon="heart" />
                </a>
                <a className="mr-3 hover:text-gray-500 cursor-pointer">
                  <FontAwesomeIcon icon={["far", "comment"]} />
                </a>
                <a href="" className="hover:text-gray-500 cursor-pointer">
                  <FontAwesomeIcon icon={["far", "paper-plane"]} />
                </a>
              </div>
              <div className="">
                <a href="" className="cursor-pointer hover:Text-gray-500">
                  <FontAwesomeIcon icon={["far", "bookmark"]} />
                </a>
              </div>
            </div>
            <div className="font-medium text-sm px-3">1,000 likes</div>
            <div className="text-gray-500 uppercase px-3 text-xs tracking wide my-3">
              12 hour Ago
            </div>
            <div className="p-3 flex flex-row border-t">
              <div className="flex items-center">
                <a className="text-2-xl">
                  <FontAwesomeIcon icon={["far", "face-smile"]} />
                </a>
              </div>
              <div className="flex-1 pr-3 py-1">
                <input
                  className="w-full px-3 py-1 text-sm outline-0"
                  type="text"
                  placeholder="Add a comment..."
                />
              </div>
              <div className="flex items-center text-sm">
                <a href="" className="text-sky-500 font-medium">
                  Post
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalPost;
