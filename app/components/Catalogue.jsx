"use client";

// import Link from "next/link";
import Image from "next/image";
import Header from "./Header";

const Catalogue = ({ data }) => {
    return (
        <>
            <Header />
            <div className="container max-w-7xl mx-auto pb-10 px-4">
                <h1 className="text-white text-2xl mt-8 mb-5">What's Popular</h1>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data?.map((movie) => (
                        <div key={movie.id}>
                            <div className="bg-black shadow-sm rounded-md cursor-pointer">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    width={700}
                                    height={700}
                                    className="rounded-t-md"
                                    alt={movie.title || movie.name}
                                />
                                <div className="px-6 py-2">
                                    <div className="font-bold text-xl mb-1">{movie.title || movie.name}</div>
                                    <p className="text-gray-700 text-base mb-1">
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
