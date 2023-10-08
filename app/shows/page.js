"use client";

import Catalogue from "../components/Catalogue";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../hooks/useFetchData";

const page = () => {
  const {
    data: shows,
    isLoading,
    isError,
  } = useQuery(["tvShows"], () => fetchData("/tv/top_rated"));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-700">
        Error loading data.
      </div>
    );
  }
  return <Catalogue data={shows} heading={"Explore some amazing tv shows"} />;
};

export default page;
