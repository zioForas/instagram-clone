import React from "react";
import Stories from "../components/Stories";
import BasicProfile from "../components/BasicProfile";
import Suggestions from "../components/Suggestions";
import Footer from "../components/Footer";
import Post from "../components/Post";
import { useQuery } from "@apollo/client";
import GET_FEED from "../graphql/GET_FEED";

function Home() {
  const { loading, error, data } = useQuery(GET_FEED);

  if (loading) {
    return "Loading..";
  }

  if (error) {
    return "Error";
  }

  return (
    <div className="container pt-8 max-w-5xl">
      <main className="grid grid-cols-3">
        <div className="md:px-12 lg:px-0 col-span-3 lg:col-span-2">
          <Stories />
          {data.feed.map((post) => (
            <Post 
            post={post} />
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
