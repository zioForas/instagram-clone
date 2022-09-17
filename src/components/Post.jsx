import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Post() {
  return (
    <div className="border rounded-lg border-slate-200 mb-5 bg-white">
      <div className="p-3 flex-row">
        <div className="flex-1">
          <a href="" className="">
            <img
              className="object-cover rounded-full w-8 h-8 inline"
              src="https://i.postimg.cc/PJjN7793/DSC-6369.jpg"
            />
            <span className="font-medium text-sm ml-2">Michele.guidetti</span>
          </a>
        </div>
      </div>
      <img
        src="/images/post2.png"
        alt="photo by a webdev"
        className=""
        width="100%"
      />
      <div className="p-3 flex flex-row text-2-xl">
        <div className="flex-1">
          <a href="" className="mr-3 text-red-600 cursor-pointer">
            <FontAwesomeIcon icon="heart" />
          </a>
          <a href="" className="mr-3 hover:text-gray-500 cursor-pointer">
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
        <span className="font-medium">Michele.guidetti</span> sono basso
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
  );
}

export default Post;
