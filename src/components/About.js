import React, { useState, useEffect }from "react";
import sanityClient from "../client";
import { Route } from "react-router-dom";
// import BlockContent from "@sanity/block-content-to-react";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient.fetch(`*[_type == "author"]{
			name,
			"bio": bio[0].children[0].text,
		}`)
		.then((data) => setAuthor(data[0]))
		.catch(console.error);
	}, [])

	if (!author) return <div>Loading...</div>;

	return (
		<main className="relative">
			<div className="p-10 lg:pt-39 container mx-auto relative">
				<section className="bg-blue-300 rounded-lg shadow-1xl lg:flex p-12">

					<div className="text-lg flex flex-col">
						 <h1 className="cursive text-3xl text-black-300 mb-4">
              				Hey there. I'm{" "}
							  <span className="text-blue-600">{author.name}</span>
						</h1>
						<p className="text-grey-800 text-2xl">{author.bio}</p>
					</div>

					<Route>
						<div className="inline-flex px-30 my-30">
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