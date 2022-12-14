import React from "react";

function Suggestions() {
  return (
    <div>
      <div className="flex flex-row pt-5">
        <div className="w-72 font-bold text-gray-700 text-sm">
          Suggestions for you
        </div>
        <div className="w-32 text-sm text-right">
          <a className="text-black-400 font-bold text-xs" href="">
            See all
          </a>
        </div>
      </div>
      <div className="flex py-2">
        <div className="flex items-center">
          <a className="inline-block align-top" href="">
            <img
              className="rounded-full object-cover w-8 h-8"
              src="https://picsum.photos/300.jpg"
            />
          </a>
          <div className="inline-block ml-2">
            <div className="text-sm font-medium">
                usuario
            </div>
            <div className="text-gray-500 text-xs">
                Suggested for you
            </div>
          </div>
        </div>
        <div className="flex-1 items-center flex justify-end">
            <a className="text-xs text-sky-500 font-bold">Follow</a>
        </div>
      </div>
      <div className="flex py-2">
        <div className="flex items-center">
          <a className="inline-block align-top" href="">
            <img
              className="rounded-full object-cover w-8 h-8"
              src="https://picsum.photos/100.jpg"
            />
          </a>
          <div className="inline-block ml-2">
            <div className="text-sm font-medium">
                usuario
            </div>
            <div className="text-gray-500 text-xs">
                Suggested for you
            </div>
          </div>
        </div>
        <div className="flex-1 items-center flex justify-end">
            <a className="text-xs text-sky-500 font-bold">Follow</a>
        </div>
      </div>
      <div className="flex py-2">
        <div className="flex items-center">
          <a className="inline-block align-top" href="">
            <img
              className="rounded-full object-cover w-8 h-8"
              src="https://picsum.photos/900.jpg"
            />
          </a>
          <div className="inline-block ml-2">
            <div className="text-sm font-medium">
                usuario
            </div>
            <div className="text-gray-500 text-xs">
                Suggested for you
            </div>
          </div>
        </div>
        <div className="flex-1 items-center flex justify-end">
            <a className="text-xs text-sky-500 font-bold">Follow</a>
        </div>
      </div>
      <div className="flex py-2">
        <div className="flex items-center">
          <a className="inline-block align-top" href="">
            <img
              className="rounded-full object-cover w-8 h-8"
              src="https://picsum.photos/400.jpg"
            />
          </a>
          <div className="inline-block ml-2">
            <div className="text-sm font-medium">
                usuario
            </div>
            <div className="text-gray-500 text-xs">
                Suggested for you
            </div>
          </div>
        </div>
        <div className="flex-1 items-center flex justify-end">
            <a className="text-xs text-sky-500 font-bold">Follow</a>
        </div>
      </div>
      

    </div>
  );
}

export default Suggestions;
