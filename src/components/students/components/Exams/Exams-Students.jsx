import React, { Fragment, useEffect, useState } from "react";
import HeaderStudents from "../../layout/Header/Header-Students";
import API_Service from "../../../../api-service/API_Service";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function ExamsStudents() {
	const [Exams, setExams] = useState([]);
	const [Answers, setAnswers] = useState([]);

	// const handleChange = (event) => {
	// 	const { value, name } = event.target;
	// 	console.log(value);
	// 	console.log(name);
	// };

	function handleCheckboxChange(event) {
		const checkboxValue = event.target.value;
		const isChecked = event.target.checked;

		if (isChecked) {
			// Add the selected answer to the Answers array
			setAnswers((prevAnswers) => [...prevAnswers, checkboxValue]);
		} else {
			// Remove the unselected answer from the Answers array
			setAnswers((prevAnswers) =>
				prevAnswers.filter((answer) => answer !== checkboxValue)
			);
		}
	}

	// console.log(Answers);

	useEffect(() => {
		API_Service.get("teachers/activities")
			.then((response) => {
				setExams(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// console.log(Exams);

	function handleSubmit(event) {
		event.preventDefault();

		// Perform any additional logic with the Answers state before submitting

		console.log(Answers);
	}

	return (
		<>
			<HeaderStudents />

			<Container fluid>
				<Row>
					{Exams.map((data) => {
						return (
							<Col lg={12} className='border' key={data._id}>
								<h1>Title:{data.title}</h1>
								<h2>Subject:{data.subject}</h2>
								<h2>Description:{data.desc}</h2>
								<h3>Number of items: {data.examLength}</h3>

								<Form onSubmit={handleSubmit}>
									{data.questions.map((question, index) => {
										return (
											<div key={index}>
												<Form.Group>
													<p>
														question:{index + 1}{" "}
														<span>
															<strong>{question.question}</strong>
														</span>
													</p>
													<div className=''>
														<span className='mx-3'>
															<Form.Check
																type='checkbox'
																value='A'
																onChange={handleCheckboxChange}
															/>
															A. {question.choice_a}
														</span>
														<span className='mx-3'>
															<Form.Check
																type='checkbox'
																value='B'
																onChange={handleCheckboxChange}
															/>
															B. {question.choice_b}
														</span>
														<span className='mx-3'>
															<Form.Check
																type='checkbox'
																value='C'
																onChange={handleCheckboxChange}
															/>
															C. {question.choice_c}
														</span>
														<span className='mx-3'>
															<Form.Check
																type='checkbox'
																value='D'
																onChange={handleCheckboxChange}
															/>
															D. {question.choice_d}
														</span>
													</div>
													{/* <Form.Control
														type='text'
														placeholder='Enter your answer here'
														name='answers'
														value={Answers.answers}
														onChange={handleChange}
													/> */}
												</Form.Group>
											</div>
										);
									})}

									<Button type='submit'>Submit Answer</Button>
								</Form>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
}

export default ExamsStudents;
