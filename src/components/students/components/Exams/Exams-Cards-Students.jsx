import React, { useEffect, useState } from "react";
import HeaderStudents from "../../layout/Header/Header-Students";
import API_Service from "../../../../api-service/API_Service";
import { Link } from "react-router-dom";
import "./Exams-Cards.css";

import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

function ExamsCards() {
	const [exams, setExams] = useState([]);

	const getExams = async () => {
		try {
			const response = await API_Service.get("/teachers/activities");
			console.log(response.data);
			setExams(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getExams();
	}, []);

	return (
		<>
			<HeaderStudents />
			<Container className='student__card--container'>
				<Row>
					{exams &&
						exams.map((exam) => {
							return (
								<Col lg={3} className='student__card--col' key={exam._id}>
									<Card>
										<Link to={`/student/take-exams/`}>
											<Card.Header>
												{exam.subject}{" "}
												<h6 className='float-end'>{exam.examLength}</h6>
											</Card.Header>
											<Card.Body className='card-body'>
												<Card.Title>{exam.title}</Card.Title>
											</Card.Body>
										</Link>
										<Card.Footer
											className='text-muted d-flex'
											style={{ fontSize: 10 }}
										>
											<Button
												variant='outline-success'
												size='sm'
												className='btn__card'
											>
												<FontAwesomeIcon
													icon={faShareFromSquare}
													className='me-1'
												/>
												Publish
											</Button>
										</Card.Footer>
									</Card>
								</Col>
							);
						})}
				</Row>
			</Container>
		</>
	);
}

export default ExamsCards;
