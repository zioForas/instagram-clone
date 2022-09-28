import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { isLikedByUser } from "../Helpers";
import ModalPost from "./ModalPost";
import ModalPostActions from "./ModalPostActions";

function Post(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const {
    id,
    currentUserId,
    image,
    caption,
    username,
    userImage,
    likes,
    created_time_ago,
    comments,
    postLikes,
    post,
  } = props;

  const liked = isLikedByUser(currentUserId, postLikes);

  return (
    <>
      <ModalPostActions open={isModalOpen} setOpen={setModalOpen} />
      <ModalPost open={isPostModalOpen} setOpen={setIsPostModalOpen} />
      <div className="border rounded-lg border-slate-200 mb-5">
        <div className="p-3 flex flex-row">
          <div className="flex-1">
            <a href="" className="">
              <img className=" rounded-full w-8 h-8 inline" src={userImage} />
              <span className="font-medium text-sm ml-2">{username}</span>
            </a>
          </div>
          <div>
            <span className="cursor-pointer" onClick={() => setModalOpen(true)}>
              <FontAwesomeIcon icon="ellipsis" />
            </span>
          </div>
        </div>
        <img
          src="https://picsum.photos/2000.jpg"
          alt="photo by a webdev"
          className=""
          width="100%"
        />
        <div className="p-3 flex flex-row text-2-xl">
          <div className="flex-1">
            <a
              className={`mr-3 ${
                liked ? "text-red-600" : "hover:text-gray-500"
              } cursor-pointer`}
              href=""
            >
              <FontAwesomeIcon icon={[liked ? "fas" : "far", "heart"]} />
            </a>
            <a
              className="mr-3 hover:text-gray-500 cursor-pointer"
              //abre modal
              onClick={() => setIsPostModalOpen(true)}
            >
              <FontAwesomeIcon icon={["far", "comment"]} />
            </a>
            <a href="" className="hover:text-gray-500 cursor-pointer">
              <FontAwesomeIcon icon={["far", "paper-plane"]} />
            </a>
          </div>
          <div className="">
            <a href="" className="cursor-pointer hover:text-gray-500">
              <FontAwesomeIcon icon={["far", "bookmark"]} />
            </a>
          </div>
        </div>
        <div className="font-medium text-sm px-3">{likes}</div>
        <div className="px-3 text-sm">
          <span className="font-medium">{username}</span>
          {caption}
        </div>
        <div className="text-gray-500 uppercase p-3 text-xs tracking-wide mt-2">
          {created_time_ago}
        </div>
        
        {comments.length && comments.length > 3 ? (
          <a
            className="block text-gray-500 px-3 py-2 text-sm cursor-pointer"
            onClick={() => setIsPostModalOpen(true)}
          >
            View all {comments.length} comments
          </a>
        ) : (
          ""
        )}

        {comments.length
          ? comments.slice(3 * -1).map((comment, index) => (
              <div
                className={`px-3 ${index !== 0 ? "pt-2" : ""}
                     text-sm`}
              >
                <span className="font-medium mr-2">{comment.user.username}</span>
                {comment.comment}
                <a href="" className={`block float-right text-xs cursor-pointer ${comment.is_liked ? 'text-red-600' : ""}`}>
                  <FontAwesomeIcon
                    icon={[comment.is_liked ? "fas" : "far", "heart"]}
                  />
                </a>
              </div>
            ))
          : ""}

        <div className="p-3 flex flex-row border-t">
          <div className="flex items-center">
            <a className="text-2xl cursor-pointer" href="">
              <FontAwesomeIcon icon={["far", "face-smile"]} />
            </a>
          </div>
          <div className="flex-1 pr-3 py-1">
            <input
              className="w-full px-3 py-1 text-sm outline-0"
              type="text"
              placeholder="Add a comment"
            />
          </div>
          <div className="flex items-center text-sm">
            <a href="" className="text-sky-500 font-medium cursor-pointer">
              Post
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
