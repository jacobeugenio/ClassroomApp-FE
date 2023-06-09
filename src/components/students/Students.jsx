import React from "react";

import HeaderStudents from "./layout/Header/Header-Students";
import HeroStudents from "./components/Main/Hero/Hero-Students";
import FooterStudents from "./layout/Footer/Footer-Students";

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
