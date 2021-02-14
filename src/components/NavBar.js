import React from "react";

import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<header className="bg-blue-400 shadow-lg">
			<div className="container mx-auto">
				<div className="sm:flex justify-around">
					<nav className="text-white text-3x1 font-bold p-2">
						<div className="text-white-800 sm:self-center text-xl border-t sm:border-none">
							<NavLink to="/"
								exact
								activeClassName="text-blue-800 bg-blue-300"
								className="inline-flex items-center py-3 px-3 my-2 rounded hover:text-black text-4xl font-bold tracking-widest">
									Home
							</NavLink>
							<NavLink to="/OpenSourceProjects"
								className="inline-flex items-center py-3 px-3 my-2 hover:text-black text-4xl font-bold tracking-widest"
								activeClassName="text-blue-800 bg-blue-300"
								>
								Open-Source
							</NavLink>
							<NavLink to="/project"
								className="inline-flex items-center py-3 px-3 my-2 hover:text-black text-4xl font-bold tracking-widest"
								activeClassName="text-blue-800 bg-blue-300"
								>
								Projects
							</NavLink>
							<NavLink to="/about" 
								className="inline-flex items-center py-3 px-3 my-2 hover:text-black text-4xl font-bold tracking-widest"
								activeClassName="text-blue-800 bg-blue-300"
								>
								About Me
							</NavLink>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
}