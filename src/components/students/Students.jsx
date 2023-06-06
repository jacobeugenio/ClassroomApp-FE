import React from "react";

import HeaderStudents from "./components/Header/Header-Students";
import HeroStudents from "./components/Main/Hero/Hero-Students";
import FooterStudents from "./components/Footer/Footer-Students";

function Students() {
	return (
		<>
			<header>
				<HeaderStudents />
			</header>
			<main>
				<section>
					<HeroStudents />
				</section>
			</main>
			<footer>
				<FooterStudents />
			</footer>
		</>
	);
}

export default Students;
