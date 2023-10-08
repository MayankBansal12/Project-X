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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }
  return <Catalogue data={movies} />;
};

export default page;
