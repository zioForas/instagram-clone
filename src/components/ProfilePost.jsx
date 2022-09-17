import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function ProfilePost() {
    const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="relative overflow-hidden w-full pt-[100%]"
    onMouseEnter={() => setShowOverlay(true)}>
        <a href="#">
            <div className={`bg-gray-800 bg-opacity-60 h-full w-full absolute 
            inset-0 z-10 flex items-center justify-center text-white ${showOverlay ? "" : "hidden"}`} onMouseLeave={() => setShowOverlay(false)} >
                <FontAwesomeIcon icon='heart' />
                <span className="ml-2">200</span>
                <FontAwesomeIcon icon='comment' className="ml-8" />
                <span className="ml-2">200</span>
            </div>
        </a>
      <img
        src="/images/post3.jpeg"
        alt="post"
        className="absolute inset-0 object-cover w-full h-full"
      />
    </div>
  );
}

export default ProfilePost;
