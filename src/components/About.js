import React from "react";
import { Route } from "react-router-dom";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
	return (
		<div>
			<h1>About Page</h1>
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
		</div>
	)
}