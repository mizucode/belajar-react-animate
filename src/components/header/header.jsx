import React, { useState } from "react";
import HeaderClick from "./headerClick";

const Header = () => {
	const [isHeaderOpen, setIsHeaderOpen] = useState(false);

	const toggleHeader = () => {
		setIsHeaderOpen(!isHeaderOpen);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="container-header">
					<h1 className="text-bookverse">BookVerse.</h1>
					<i className="fa-solid fa-bars" id="bars" onClick={toggleHeader}></i>
				</div>
				{isHeaderOpen && (
					<HeaderClick
						isOpen={isHeaderOpen}
						toggleHeader={toggleHeader}
						className="transition ease-in-out duration-500 top-0"
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
