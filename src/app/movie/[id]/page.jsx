import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

Image;
async function getMovie(movieId) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
	);
	return await res.json();
}

const page = async ({ params }) => {
	const movieId = params.id;
	const movie = await getMovie(movieId);
	return (
		<div className=" w-full ">
			<div className=" p-4 md:pt-8 flex flex-col md:flex-row items-center  content-center max-w-6xl mx-auto md:space-x-6">
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						movie.backdrop_path || movie.poster_path
					}`}
					width={500}
					height={300}
					className=" rounded-lg "
					style={{
						maxWidth: "100%",
						height: "100%",
					}}
					placeholder="blur"
					blurDataURL="/spinner.svg"
					alt="Movie poster"
				></Image>
				<div className=" p-2 align-top max-w-full h-full justify-start">
					<h2 className="  text-lg font-bold mb-4">
						<span>Movie : </span>
						{movie.title || movie.name}
					</h2>
					<p className=" text-lg mb-3">
						<span className=" font-bold">Description : </span>
						{movie.overview}
					</p>
					<p className="mb-2">
						Release Date :{" "}
						{movie.release_date || movie.first_air_date}
					</p>
					<p className="flex items-center">
						<FiThumbsUp className=" inline-block mr-2" />:
						{" " + movie.vote_count}
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;
