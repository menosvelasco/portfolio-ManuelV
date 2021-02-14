import React from "react";
import image from "../Multnomah-unsplash.jpg";

export default function Home() {
	return (
		<main>
			<img src={image} alt="Multnomah Falls" className="absolute object-cover w-full h-full darkened-image"/>
			<section className="relative grid flex justify-center content-start min-h-screen pt-12 lg:pt-60 px-2">
				<h1 className="text-3xl text-blue-300 font-bold cursive leading-none lg:leading-snug home-name">Hello World, I'm Manuel Velasco.</h1>
				<h3 className="flex justify-center text-5xl text-blue-200 mb-14 font-bold lg:leading-snug">Software Developer</h3>
			</section>
		</main>
	)
}