import React from "react";
import Stories from "../components/Stories";
import BasicProfile from "../components/BasicProfile";
import Suggestions from "../components/Suggestions";
import Footer from "../components/Footer";
import Post from "../components/Post";
import { useQuery } from "@apollo/client";
import GET_FEED from "../graphql/GET_FEED";
import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";

function Home() {
  const { loading, error, data } = useQuery(GET_FEED);
  const {
    loading: loadingCurrentUser,
    error: errorCurrentUser,
    data: dataCurrentUser,
  } = useQuery(GET_CURRENT_USER);

  if (loading || loadingCurrentUser) {
    return "Loading..";
  }

  if (error || errorCurrentUser) {
    return "Error";
  }

  return (
    <div className="container pt-8 max-w-5xl">
      <main className="grid grid-cols-3">
        <div className="md:px-12 lg:px-0 col-span-3 lg:col-span-2">
          <Stories />
          {data.feed.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              currentUserId={dataCurrentUser.me.id}
              caption={post.caption}
              image={post.image}
              username={post.user.username}
              userImage={post.user.image}
              likes={post.likes}
              created_time_ago={post.created_time_ago}
              comments={post.comments}
              postLikes={post.postLikes}
              post={post}
            />
          ))}
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="fixed p-5 w-80">
            <BasicProfile />
            <Suggestions />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
