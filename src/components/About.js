import React, { useState, useEffect }from "react";
import sanityClient from "../client";
import { Route } from "react-router-dom";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import BlockContent from "@sanity/block-content-to-react";

export default function About() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient.fetch(`*[_type == "author"]{
			Name,
			Bio,
		}`)
		.then((data) => setAuthor(data))
		.catch(console.error);
	}, [])

	if (!author) return <div>Loading...</div>;

	return (
		<main className="relative">
			<div className="p-10 lg:pt-39 container mx-auto relative">
				<section className="bg-blue-300 rounded-lg shadow-1xl lg:flex p-12">
					<h1 className="cursive text-6xl text-blue-800 mb-8">hey there. I'm{" "}
					<span className="text-green-800">{author.Name}</span>
					</h1>
					<div className="text-lg flex flex-col justify-center">
						Bio
						<BlockContent block={author.Bio} projectId="j1mrsx3j" dateset="production"/>
					</div>
					<Route>
						<div className="inline-flex px-52 my-36">
							<a href="http://twitter.com/Manuelv23752017" target="_blank" rel="noopener noreferrer">
								<FaTwitter
									className="mr-10 hover:text-blue-500"  
									style={{ height: 50, width: 50 }}
								/>
							</a>
							<a href="https://www.linkedin.com/in/manuel-velasco-29b894197/" target="_blank" rel="noopener noreferrer">
								<FaLinkedin
									className="mr-11 hover:text-blue-600"
									style={{ height: 50, width: 50 }}
								/>
							</a>
						</div>
					</Route>
				</section>
			</div>
		</main>
	);
}