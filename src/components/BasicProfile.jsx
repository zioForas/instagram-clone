import React from "react";

function BasicProfile() {
  return (
    <div className="flex flex-row">
      <a href="">
        <img
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/107312386?v=4"
          width="100"
        />
      </a>
      <div className="72 pl-2 m-auto">
        <div className="text-sm font-medium">
            <a href="">SwordAnto</a>
        </div>
        <div className="text-gray-500 text-sm">
            Antonio Spada | Web developer
        </div>
      </div>
      <div className="w-32 text-right m-auto">
        <a className="text-xs text-sky-500 font-bold cursor-pointer" href="">Sign out</a>
      </div>

    </div>
  );
}

export default BasicProfile;
