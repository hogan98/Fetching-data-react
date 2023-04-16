import React from "react";
import { useQuery } from "react-query";
// import useFetch from "./useFetch";

export default function Reddit() {
  // const {
  //   data: posts,
  //   isLoading,
  //   errorMessage,
  // } = useFetch("https://www.reddit.com/r/aww.json");

  const {
    //fetch is better it doesnt have to pull as much cache, does automatic background checking
    data: posts,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery("posts", fetchPosts);

  function fetchPosts() {
    //has to return a promise
    return fetch("https://www.reddit.com/r/aww.json").then(response =>
      response.json()
    );
  }

  return (
    <div>
      <h2>Reddit Api</h2>

      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <ul>
          {posts.data.children.map(post => (
            <li key={post.data.id}>
              <a href={`https://reddit.com${post.data.permalink}`}>
                {post.data.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      {isError && <div>{error.message}</div>}
    </div>
  );
}
