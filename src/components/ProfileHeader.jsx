import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";
import { useQuery } from "@apollo/client";

function ProfileHeader({ setIsSettingsModalOpen }) {
const {loading, error, data} = useQuery(GET_CURRENT_USER);
if (loading) {
  return 'Loading...';
}

if (error) {
  return 'Error';
}
  return (
    <div className="grid grid-cols-3 mb-10">
      <div className="bg-green p-3 rounded flex items-start jusitfy-center">
        <img
          className="rounded-full"
          src={data.me.image}
          alt="pfp"
          width="150"
        />
      </div>
      <div className="p-3 text-gray-600 col-span-2">
        <div className="flex items-center">
          <h1 className="inline-block text-3xl align-bottom">
            {data.me.username}
          </h1>
          <button
            className="bg-white ml-3 text-gray-800 font-semibold py-1 px-2 
            border border-gray-400 rounded text-sm"
          >
            Edit Profile
          </button>
          <a
            className="ml-3 cursor-pointer"
            onClick={() => setIsSettingsModalOpen(true)}
          >
            <FontAwesomeIcon icon="gear" className="text-2xl leading-6" />
          </a>
        </div>
        <div className="flex-row py-5 max-w-sm hidden lg:flex">
          <div className="basis-1/3">
            <strong>{data.me.total_posts}</strong> posts
          </div>
          <div className="basis-1/3">
            <strong>{data.me.total_followers}</strong> followers
          </div>
          <div className="basis-1/3">
            <strong>{data.me.total_following}</strong> following
          </div>
        </div>
        <h3 className="font-bold">{data.me.name}</h3>
        <div className="whitespace-pre-wrap">
        {data.me.bio}
        </div>
        <a href={data.me.website} target="_blank" className="text-blue-900 font-bold">
          {data.me.website}
        </a>
      </div>
    </div>
  );
}

export default ProfileHeader;
