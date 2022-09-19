import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ModalPost from "./ModalPost";
import ModalPostActions from "./ModalPostActions";


function Post() {
const [isModalOpen, setModalOpen] = useState(false);
const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  return (
    <>
    <ModalPostActions open={isModalOpen} setOpen={setModalOpen} />
    <ModalPost open={isPostModalOpen} setOpen={setIsPostModalOpen} />
    <div className="border rounded-lg border-slate-200 mb-5 bg-white">
      <div className="p-3 flex flex-row">
        <div className="flex-1">
          <a href="" className="">
            <img
              className=" rounded-full w-8 h-8 inline"
              src="https://picsum.photos/200/300.jpg"
            />
            <span className="font-medium text-sm ml-2">cool.places</span>
          </a>
        </div>
        <div>
          <span  className="cursor-pointer" onClick={() => setModalOpen(true)} >
            <FontAwesomeIcon icon="ellipsis" />
          </span>
        </div>
      </div>
      <img
        src="https://picsum.photos/2000.jpg"
        alt="photo by a webdev"
        className=""
        width="100%"
      />
      <div className="p-3 flex flex-row text-2-xl">
        <div className="flex-1">
          <a href="" className="mr-3 text-red-600 cursor-pointer">
            <FontAwesomeIcon icon="heart" />
          </a>
          <a className="mr-3 hover:text-gray-500 cursor-pointer"
        //abre modal 
          onClick={() => setIsPostModalOpen(true)}>

            <FontAwesomeIcon icon={["far", "comment"]} />
          </a>
          <a href="" className="hover:text-gray-500 cursor-pointer">
            <FontAwesomeIcon icon={["far", "paper-plane"]} />
          </a>
        </div>
        <div className="">
        <a href="" className="cursor-pointer hover:Text-gray-500">
            <FontAwesomeIcon icon={['far', 'bookmark']} />
          </a>
          
        </div>
      </div>
      <div className="font-medium text-sm px-3">1,000 likes</div>
    <div className="px-3 text-sm">
        <span className="font-medium">cool.places</span> such a cool place!
    </div>
    <div className="text-gray-500 uppercase p-3 text-xs tracking-wide mt-2">
        12 Hours ago
    </div>
    <div className="p-3 flex flex-row border-t">
        <div className="flex items-center">
            <a className="text-2xl cursor-pointer" href="" >
            <FontAwesomeIcon icon={['far', 'face-smile']} />
            </a>
        </div>
        <div className="flex-1 pr-3 py-1">
            <input className="w-full px-3 py-1 text-sm outline-0"
             type="text"
             placeholder="Add a comment"/>
        </div>
        <div className="flex items-center text-sm">
            <a href="" className="text-sky-500 font-medium cursor-pointer">
                Post
            </a>
        </div>
    </div>



    </div>
    </>
  );
}

export default Post;
