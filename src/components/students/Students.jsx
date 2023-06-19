import React from "react";

import HeaderStudents from "./layout/Header/Header-Students";
import HeroStudents from "./components/Hero/Hero-Students";

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
		</>
	);
}

export default Students;
