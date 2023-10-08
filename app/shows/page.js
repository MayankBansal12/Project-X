"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/supabse";
import Catalogue from "../components/Catalogue";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../hooks/useFetchData";

const page = () => {
  const [login, setLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user?.role === "authenticated") {
          setLogin(true);
        } else {
          router.push("/auth/login");
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    checkUserLogin();
  }, []);

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
  if (login) {
    return <Catalogue data={shows} heading={"Explore some amazing tv shows"} />;
  }
};

export default page;
