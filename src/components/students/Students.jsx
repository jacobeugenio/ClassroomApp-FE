import React from "react";

import HeaderStudents from "./components/Header/Header-Students";
import MainStudents from "./components/Main/Main-Students";
import FooterStudents from "./components/Footer/Footer-Students";

function Students() {
	return (
		<>
			<header>
				<HeaderStudents />
			</header>
			<main>
				<MainStudents />
			</main>
			<footer>
				<FooterStudents />
			</footer>
		</>
	);
}

export default Students;
