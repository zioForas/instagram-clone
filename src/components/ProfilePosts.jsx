import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfilePost from "./ProfilePost";
import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";
import { useQuery } from "@apollo/client";
import ModalPost from './ModalPost';
import { useState } from 'react';

function ProfilePosts() {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  const [currentPost, setCurrentPost] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return "Error";
  }
  const showCurrentPost = (post) => {
    setCurrentPost(post);
    setIsPostModalOpen(true);
  }
  return (
    <>
    <ModalPost
      open={isPostModalOpen}
      setOpen={setIsPostModalOpen}
      post={currentPost}
    />
      <ul className="flex flex-row p-2 text-sm items-center justify-center border-t text-gray-400 h-16 lg:hidden">
        <li className="flex-1 text-center">
          <strong className="text-black block">{data.me.total_posts}</strong>{" "}
          posts
        </li>
        <li className="flex-1 text-center">
          <strong className="text-black block">
            {data.me.total_followers}
          </strong>{" "}
          followers
        </li>
        <li className="flex-1 text-center">
          <strong className="text-black block">
            {data.me.total_following}
          </strong>{" "}
          following
        </li>
      </ul>
      <div className="flex flex-row text-2xl items-center justify-center border-t uppercase text-gray-400 tracking-widest h-16 lg:text-xs">
        <a
          className="text-black border-t border-black flex justify-center items-center h-full mr-16 cursor-pointer "
          href=""
        >
          <FontAwesomeIcon icon="table-cells" />
          <span className="hidden ml-2 lg:inline-block">Posts</span>
        </a>
        <a
          className=" flex justify-center items-center h-full mr-16 cursor-pointer "
          href=""
        >
          <FontAwesomeIcon icon="play" />
          <span className="hidden ml-2 lg:inline-block">Reels</span>
        </a>
        <a
          className=" flex justify-center items-center h-full mr-16 cursor-pointer "
          href=""
        >
          <FontAwesomeIcon icon={["far", "circle-play"]} />
          <span className="hidden ml-2 lg:inline-block">videos</span>
        </a>
        <a
          className=" flex justify-center items-center h-full mr-16 cursor-pointer "
          href=""
        >
          <FontAwesomeIcon icon={["far", "bookmark"]} />
          <span className="hidden ml-2 lg:inline-block">saved</span>
        </a>
        <a
          className=" flex justify-center items-center h-full mr-16 cursor-pointer "
          href=""
        >
          <FontAwesomeIcon icon="tag" />
          <span className="hidden ml-2 lg:inline-block">Tagged</span>
        </a>
      </div>
      <div className="grid grid-cols-3 gap-1 lg:gap-8">
        {data.me.posts.map((post) => (
          <ProfilePost
            key={post.id}
            showCurrentPost={() => showCurrentPost(post)}
            image={post.image}
          />
        ))}
      </div>
    </>
  );
}

export default ProfilePosts;
