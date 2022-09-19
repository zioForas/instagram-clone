import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ProfileHeader({setIsSettingsModalOpen}) {
  return (
    <div className="grid grid-cols-3 mb-10">
      <div className="bg-green p-3 rounded flex items-start jusitfy-center">
        <img
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/107312386?v=4"
          alt="pfp"
          width="150"
        />
      </div>
      <div className="p-3 text-gray-600 col-span-2">
        <div className="flex items-center">
          <h1 className="inline-block text-3xl align-bottom">swordanto</h1>
          <button
            className="bg-white ml-3 text-gray-800 font-semibold py-1 px-2 
            border border-gray-400 rounded text-sm"
          >
            Edit Profile
          </button>
          <a className="ml-3 cursor-pointer" 
          onClick={() =>setIsSettingsModalOpen(true)}>
            <FontAwesomeIcon icon="gear" className="text-2xl leading-6" />
          </a>
        </div>
      <div className="flex-row py-5 max-w-sm hidden lg:flex">
        <div className="basis-1/3">
            <strong>18</strong> posts
        </div>
        <div className="basis-1/3">
            <strong>528</strong> followers
        </div>
        <div className="basis-1/3">
            <strong>341</strong> follows
        </div>
      </div>
      <h3 className="font-bold">Antonio Spada | Web Developer</h3>
      <p className="py-2">📍 Tenerife </p>
        
      <p>Front end web Developer 👨‍💻 </p>
      <p> 1+ year of experience 🚀 </p>
      <p> focused on User experience and design 🎨 </p>
      <p> React | Javascript | Tailwind | italian, spanish, English 🍕  </p>
        <a href="" target="_blank" className="text-blue-900 font-bold">asdp.dev</a>
      </div>
    </div>
  );
}

export default ProfileHeader;
