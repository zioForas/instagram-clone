import React from "react";

function ChangePassword() {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/3 p-3">
          <a href="" className="float-right mr-5">
            <img
              src="https://picsum.photos/200.jpg"
              width="40"
              alt=""
              className="rounded-full "
            />
          </a>
        </div>
        <div>
          <h1 className="text-2xl">swordanto</h1>
        </div>
      </div>
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Password
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            className="border p-1 px-3 w-full"
            type="text"
            placeholder="Password"
          />
        </div>
      </div>
     
     
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Confirm Password
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            className="border p-1 px-3 w-full"
            type="text"
            placeholder="Confirm"
          />
        </div>
      </div>

      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8"></div>
        <div className="w-2/3 pr-10 mt-2">
          <button
            className="bg-sky-600 text-white font-semibold py-1 px-2 rounded text-sm disabled:opacity-50"
            type="submit"
          >Change password</button>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
