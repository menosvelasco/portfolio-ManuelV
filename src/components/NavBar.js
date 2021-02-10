import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<header className="bg-blue-400 shadow-lg">
			<div className="container mx-auto">
				<div className="sm:flex justify-around">
					<nav className="text-white text-3x1 font-bold p-2">
						<ul className="text-white-800 sm:self-center text-xl border-t sm:border-none">
							<li className="sm:inline-block">
								<NavLink to="/" exact className="p-3 hover:text-black">
									Home
								</NavLink>
							</li>
							<li className="sm:inline-block">
								<NavLink to="/OpenSourceProjects" className="p-3 hover:text-black">
									open-source
								</NavLink>
							</li>
							<li className="sm:inline-block">
								<NavLink to="/project" className="p-3 hover:text-black">
									projects
								</NavLink>
							</li>
							<li className="sm:inline-block">
								<NavLink to="/about" className="p-3 hover:text-black">
									About me
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}