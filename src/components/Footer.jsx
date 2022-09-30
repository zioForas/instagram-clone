import React from "react";

function Footer() {
  return (
    <footer className="py-5 text-center">
      <ul className="flex flex-row space-x-4 p-2 text-xs items-center justify-center text-gray-400">
        <li>
            <a className="cursor-pointer" >
                About
            </a>
        </li>
        <li>
            <a className="cursor-pointer" >
                Privacy
            </a>
        </li>
        <li>
            <a className="cursor-pointer" >
                Terms
            </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
