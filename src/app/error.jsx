"use client";
import React from "react";
import { useEffect } from "react";

const error = ({ error, reset }) => {
	return (
		<div className="text-center mt-10 ">
			<h1>Something went wrong</h1>
			<button
				className=" hover:bg-amber-600 border-amber-600  "
				onClick={() => reset()}
			>
				Try Again
			</button>
		</div>
	);
};

export default error;
