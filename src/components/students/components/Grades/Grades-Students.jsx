import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderStudents from "../../layout/Header/Header-Students";
import API_Service from "../../../../api-service/API_Service";
import "./Grades.css";

import { Container } from "react-bootstrap";

function GradesStudents() {
	const [examsData, setExamsData] = useState([]);

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		const getExams = async () => {
			try {
				const response = await API_Service.get("/teachers/activities", {
					headers: {
						Authorization: `Bearer ${userInfo.data.token}`,
					},
				});
				// console.log(response.data.length);
				setExamsData(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		getExams();
	}, [userInfo.data.token]);

	return (
		<div className='body__grades'>
			<HeaderStudents />
			<Container>
				<div className='grades__container'>
					<section>
						<div className='table__header'>Your Grades</div>
					</section>
					<section className='table__body'>
						<table className='table__grades'>
							<thead className='thead__grades'>
								<tr>
									<th className='table__head--grades'>#</th>
									<th className='table__head--grades'>SUBJECTS</th>
									<th className='table__head--grades'>EXAMS</th>
									<th className='table__head--grades'>RATING</th>
								</tr>
							</thead>
							<tbody>
								{examsData.map((data, index) => {
									return (
										<tr key={index + 1}>
											<td className='table__body--grades'>{index + 1}</td>
											<td className='table__body--grades'>{data.subject}</td>
											<td className='table__body--grades'>{data.title}</td>
											<td className='table__body--grades'>90%</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</section>
				</div>
			</Container>
		</div>
	);
}

export default GradesStudents;
