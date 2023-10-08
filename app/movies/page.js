"use client";

import Catalogue from "../components/Catalogue";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../hooks/useFetchData";

const page = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery(["movies"], async () => await fetchData("/movie/top_rated"));

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
  return <Catalogue data={movies} heading={"What's Popular in Movies"} />;
};

export default page;
