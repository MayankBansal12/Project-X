import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Link from "next/link";
import { fetchData } from "./hooks/useFetchData";
import Header from "./components/Header";

export default async function Home() {
  const data = await fetchData("/movie/upcoming");
  const randomNum = Math.floor(Math.random() * 20);
  let imgLink;
  if (data) {
    imgLink =
      `https://image.tmdb.org/t/p/original/` + data[randomNum]?.backdrop_path;
  }
  return (
    <>
      <Header />
      <div
        className="container my-9 mx-auto h-main-h rounded-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgLink})` }}
      >
        <div className="text-center flex justify-center align-center w-full h-full flex-col rounded-lg bg-gradient-effect">
          <h1 className="text-3xl uppercase font-bold md:text-4xl">
            What would you watch today?
          </h1>
          <p className="text-gray-300 text-lg pt-3 pb-10 md:text-xl">
            Limitless tv shows, movies waiting for you. Explore Now.
          </p>
          <Link href="/">
            <button className="px-8 p-3 baseline rounded-full border-2 border-transparent bg-blue-600 hover:bg-blue-700 transition-all">
              Login to Search!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
