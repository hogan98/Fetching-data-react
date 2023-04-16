import React from "react";
import { useQuery } from "react-query";
// import useFetch from "./useFetch";

export default function Joke() {
  const {
    //fetch is better it doesnt have to pull as much cache
    data: joke,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery("joke", fetchJoke, {
    staleTime: 6000,
    refetchOnWindowFocus: false,
  });

  function fetchJoke() {
    //has to return a promise
    return fetch("https://official-joke-api.appspot.com/jokes/random").then(
      response => response.json()
    );
  }

  // const {
  //   data: joke,
  //   isLoading,
  //   errorMessage,
  // } = useFetch("https://official-joke-api.appspot.com/jokes/random");

  return (
    <div>
      <h2>Joke Api</h2>

      {isLoading && <div>Loading...</div>}
      {isSuccess && <div>{joke.setup + "" + joke.punchline}</div>}
      {isError && <div>{error.message}</div>}
    </div>
  );
}
