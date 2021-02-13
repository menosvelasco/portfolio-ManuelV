import React from "react";
import image from "../Multnomah-unsplash.jpg";

export default function Home() {
	return (
		<main>
			<img src={image} alt="Multnomah Falls" className="absolute object-cover w-full h-full "/>
			<section className="relative grid flex justify-center min-h-screen pt-12 lg:pt-60 px-2">
				<h1 className="text-2xl text-blue-200 font-bold cursive leading-none lg:leading-snug home-name">Hello World, I'm Manuel Velasco.</h1>
				<h3 className="justify-center text-3xl text-blue-200 font-bold cursive lg:leading-snug">Software developer</h3>
			</section>
		</main>
	)
}