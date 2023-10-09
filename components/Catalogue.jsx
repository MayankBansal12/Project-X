"use client";

// Catelogue.jsx used to show movies/shows info at /movies, /shows

import Image from "next/image";
import Header from "./Header";

const Catalogue = ({ data, heading }) => {
    return (
        <>
            {/* showLogin prop to make sure the login button is not visible since the component will be accessible after authentication */}
            <Header showLogin={false} />
            <div className="container max-w-6xl mx-auto pb-10 px-6">
                <h1 className="text-white text-2xl mt-8 mb-5">{heading}</h1>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data?.map((movie) => (
                        <div key={movie.id}>
                            <div className="bg-zinc-900 shadow-sm rounded-md cursor-pointer">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    width={700}
                                    height={600}
                                    className="rounded-t-md"
                                    alt={movie.title || movie.name}
                                />
                                <div className="px-6 py-2">
                                    <div className="font-bold text-xl my-1">{movie.title || movie.name}</div>
                                    <p className="text-gray-500 text-base mb-1">
                                        {movie.release_date || movie.first_air_date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Catalogue;
