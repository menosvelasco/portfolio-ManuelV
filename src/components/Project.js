import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient.fetch(`*[_type == "project"]{
			title,
			date,
			description,
			projectType,
			link,
			tags
		}`)
		.then((data) => setProjectData(data))
		.catch(console.error);
	}, [])

	return (
		<main className="bg-blue-100 min-h-screen p-12 ">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center cursive">My Projects</h1>
				<h2 className="text-2xl text-gray-500 flex justify-center mt-3 mb-10">Welcome to my projects page!</h2>
				<section className="grid grid-cols-1 gap-8">
					{projectData && projectData.map((project, index) => (
					<article className="relative rounded-lg shadow-lx bg-white p-16" key={index}>
						<h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-300">
							<a 
							href={project.link}
							alt={project.title}
							target="_blank"
							rel="noopener noreferrer"
							>{project.title}</a>
						</h3>
						<div className="text-gray-500 text-xs space-x-4">
							<span className="text-base">
								<strong className="text-base font-bold">finished on</strong>:{" "}
								{new Date(project.date).toLocaleDateString()}
							</span>
							<span className="text-base">
								<strong className="text-base font-bold ">Type</strong>:{"  "}
								{project.projectType}
							</span>
							<span className="text-base">
								<strong className="text-base font-bold">Technologies</strong>{" "}
								{project.tags}
							</span>
							<p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
							<a 
							href={project.link} 
							rel="noopener noreferrer" 
							target="_blank" 
							className="text-red-400 font-bold hover:underline hover:text-red-400 text-xl">
								View The Project{" "}
								<span role="img" aria-label="right pointer">👈</span>
							</a>
						</div>
					</article>
					))}
				</section>
			</section>
		</main>
	);
}