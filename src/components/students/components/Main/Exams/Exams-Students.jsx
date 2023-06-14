import React, { useEffect, useState } from "react";
import HeaderStudents from "../../../layout/Header/Header-Students";
import API_Service from "../../../../../api-service/API_Service";

function ExamsStudents() {
	const [questions, setQuestions] = useState([]);
	useEffect(() => {
		API_Service.get("teachers/activities")
			.then((response) => {
				// console.log(response.data);
				setQuestions(response.data.questions);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	console.log(questions);
	return (
		<>
			<HeaderStudents />

			{/* {questions.map((data, index) => {
				return (
					<div key={index + 1}>
						<p>{data.subject}</p>
						<p>{data.questions[0]}</p>
					</div>
				);
			})} */}
		</>
	);
}

export default ExamsStudents;
