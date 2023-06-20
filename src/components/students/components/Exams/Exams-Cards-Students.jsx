import React, { useEffect, useState } from "react";
import HeaderStudents from "../../layout/Header/Header-Students";
import API_Service from "../../../../api-service/API_Service";
import { Link } from "react-router-dom";
import "./Exams-Cards.css";

import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

function ExamsCards() {
	const [exams, setExams] = useState([]);

	const { userInfo } = useSelector((state) => state.auth);

	const getExams = async () => {
		try {
			const response = await API_Service.get("/teachers/activities", {
				headers: {
					Authorization: `Bearer ${userInfo.data.token}`,
				},
			});
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
		<div className='body__card'>
			<HeaderStudents />
			<Container className='exam__card--container'>
				<Row>
					{exams &&
						exams.map((exam) => {
							return (
								<Col lg={3} md={4} sm={4} className='my-3' key={exam._id}>
									<Card className='card__exam'>
										<Card.Header className='d-flex justify-content-between'>
											<div className='exam__subject'>{exam.subject}</div>
											<div className='exam__length'>{exam.examLength}</div>
										</Card.Header>
										<Card.Body style={{ height: "75px" }}>
											<Card.Title>
												<div className='exam__title'>{exam.title}</div>
											</Card.Title>
										</Card.Body>
										<Card.Footer
											className='text-muted d-flex'
											style={{ fontSize: 10 }}
										>
											<Link
												className='text-decoration-none  btn__exam'
												to={`/student/take-exams/` + exam._id}
											>
												<Button
													variant='outline-success'
													size='sm'
													className='btn__exam fw-bold'
												>
													<FontAwesomeIcon
														icon={faHandPointer}
														className='me-1'
													/>
													Open
												</Button>
											</Link>
										</Card.Footer>
									</Card>
								</Col>
							);
						})}
				</Row>
			</Container>
		</div>
	);
}

export default ExamsCards;
