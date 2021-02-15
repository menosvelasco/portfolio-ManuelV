import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function OpenSourceProjects() {
	const [postData, setPost] = useState(null);

	useEffect(() => {
		sanityClient.fetch(`*[_type == "post"]{
					title,
					date,
					description,
					projectType,
					link,
					tags
				}`
				)
				.then((data) => setPost(data))
				.catch(console.error);
		}, []);

	return(
		<main className="bg-blue-100 min-h-screen p-12 ">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center cursive">My Projects</h1>
				<h2 className="text-2xl text-gray-500 flex justify-center mt-3 mb-10">Welcome to my project page that I have contributed to.</h2>
				<section className="grid grid-cols-1 gap-8">
					{postData && postData.map((post, index) => (
					<article className="relative rounded-lg shadow-lx bg-white p-16" key={index}>
						<h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-300">
							<a 
							href={post.link}
							alt={post.title}
							target="_blank"
							rel="noopener noreferrer"
							>{post.title}</a>
						</h3>
						<div className="text-gray-500 text-xs space-x-4">
							<span className="text-base">
								<strong className="text-base font-bold">finished on</strong>:{" "}
								{new Date(post.date).toLocaleDateString()}
							</span>
							<p className="my-6 text-lg text-gray-700 leading-relaxed">{post.description}</p>
							<a 
							href={post.link} 
							rel="noopener noreferrer" 
							target="_blank" 
							className="text-black-400 font-bold hover:underline hover:text-red-400 text-xl">
								github repo{" "}
								<span role="img" aria-label="right pointer">👈</span>
							</a>
						</div>
					</article>
					))}
				</section>
			</section>
		</main>
	)
}