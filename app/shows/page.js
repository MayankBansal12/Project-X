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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }
  return <Catalogue data={shows} />;
};

export default page;
