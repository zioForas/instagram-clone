import React, { useState } from "react";

function ProfileEdit() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/3 p-3">
          <a href="" className="float-right mr-5">
            <img
              src="https://picsum.photos/120.jpg"
              width="40"
              alt=""
              className="rounded-full "
            />
          </a>
        </div>
        <div>
          <h1 className="text-2xl">swordanto</h1>
          <a className="text-sm text-sky-500 font-bold">Change profile photo</a>
        </div>
      </div>
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Name
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            className="border p-1 px-3 w-full"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-gray-400 text-xs">
            Help people discover your account by using the name you're known by:
            either your full name, nuckname or buisness name,{""}
          </p>
        </div>
      </div>

      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Username
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            className="border p-1 px-3 w-full"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Website
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            className="border p-1 px-3 w-full"
            placeholder="URL of your website"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Bio
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <textarea
            className="border p-1 px-3 w-full"
            rows="3"
            placeholder="tell the world about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Email
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            className="border p-1 px-3 w-full"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            phone
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            className="border p-1 px-3 w-full"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8"></div>
        <div className="w-2/3 pr-10">
          <button
            className="bg-sky-500 text-white font-semibold py-1 px-2 rounded text-sm disabled:opacity-50"
            type="submit"
          >Submit</button>
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;
