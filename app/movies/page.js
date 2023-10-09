"use client";

import Catalogue from "../../components/Catalogue";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../hooks/useFetchData";
import { useEffect, useState } from "react";
import supabase from "@/supabse";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // Authenticating the user
    const checkUserLogin = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user?.role === "authenticated") {
          setLogin(true);
        } else {
          // Redirecting in case of unauthenticated user!
          router.push("/auth/login");
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    checkUserLogin();
  }, []);

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
  if (login) {
    return <Catalogue data={movies} heading={"What's Popular in Movies"} />;
  }
};

export default page;
