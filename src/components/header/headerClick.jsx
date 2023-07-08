import React from "react";

const HeaderClick = ({ isOpen, toggleHeader }) => {
	const handleClick = () => {
		toggleHeader();
	};

	return (
		<div
			className={`absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out ${
				isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
			id="menutupHeader"
		>
			<div className="container py-20 bg-white transition duration-500 ease-in-out">
				<div className="absolute top-4 right-4 text-xl">
					<i className="fa-solid fa-xmark" onClick={handleClick}></i>
				</div>
				<main>
					<h1 className="text-xs font-medium opacity-40">
						Perpustakaan BookVerse
					</h1>

					<ul className="mt-2 flex-row">
						<li className="flex justify-between items-center">
							<a href="https://www.example.com" className="font-medium">
								Beranda
							</a>

							<i className="fa-solid fa-right-long text-xl "></i>
						</li>
						<li className="flex justify-between items-center mt-2">
							<a href="https://www.example.com" className="font-medium">
								Koleksi
							</a>

							<i className="fa-solid fa-right-long text-xl "></i>
						</li>
						<li className="flex justify-between items-center mt-2">
							<a href="https://www.example.com" className="font-medium">
								Repositori
							</a>

							<i className="fa-solid fa-right-long text-xl "></i>
						</li>
						<li className="flex justify-between items-center mt-2">
							<a href="https://www.example.com" className="font-medium">
								Rekomendasi
							</a>

							<i className="fa-solid fa-right-long text-xl "></i>
						</li>
						<li className="flex justify-between items-center mt-2">
							<a href="https://www.example.com" className="font-medium">
								Link
							</a>

							<i className="fa-solid fa-right-long text-xl "></i>
						</li>
					</ul>

					<div>
						<a
							href="www.login.com"
							className="w-full py-2 font-medium text-black text-center flex justify-center bg-ungu mt-8 rounded-md"
						>
							Login
						</a>
					</div>
				</main>
			</div>
			<div
				className={`bg-black h-full transition-opacity duration-500 ${
					isOpen ? "opacity-50" : "opacity-0"
				}`}
				id="headerOpacity"
			></div>
		</div>
	);
};

export default HeaderClick;
