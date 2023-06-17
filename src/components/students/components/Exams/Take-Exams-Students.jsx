import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import API_Service from "../../../../api-service/API_Service";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function TakeExamsStudents() {
	const [exam, setExam] = useState({});
	const { id } = useParams();

	const { userInfo } = useSelector((state) => state.auth);
	// console.log();
	const dataStudent = userInfo.data.registeredData._id;
	// console.log(dataStudent);

	const [answeredExam, setAnsweredExam] = useState({
		subject: "",
		answer: "",
		studentId: "",
		examId: "",
	});

	useEffect(() => {
		const getExam = async () => {
			try {
				const response = await API_Service.get(`/students/exam/${id}`);
				// console.log(response.data[0]);
				console.log(response.data[0]);
				setExam(response.data[0]);
				setAnsweredExam({
					examId: response.data[0]._id,
					studentId: dataStudent,
					subject: response.data[0].subject,
				});
			} catch (error) {
				console.log(error);
			}
		};

		getExam();
	}, []);

	console.log(answeredExam);

	const handleChange = (event) => {
		const { name, value } = event.target;
		console.log(name);
		console.log(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// const { questionA, questionB, questionC, questionD } =
		// 	event.target.elements;
		// console.log(questionA.value);
		console.log(event.target.elements);
	};

	// useEffect(() => {
	// 	API_Service.post("/students/answers", answeredExam).then((res) => {
	// 		console.log(res);
	// 	}).catch = (err) => {
	// 		console.log(err);
	// 	};
	// }, []);
	// console.log(typeof exam.id);

	return (
		<Container className='my-3'>
			<div className=''>
				<Link to='/student/exams'>
					<Button variant='outline-success' size='sm'>
						<FontAwesomeIcon icon={faArrowLeft} />
						Back
					</Button>
				</Link>
				<h3 className='text-center ms-5'>Activity Details</h3>
				<div className='d-flex'>
					<h6>Subject: </h6> <span className='ms-4'>{exam.subject}</span>
				</div>
				<div className='d-flex'>
					<h6>Title: </h6>
					<span className='ms-4'>{exam.title}</span>
				</div>
				<div className='d-flex'>
					<h6>Description: </h6>
					<span className='ms-4'>{exam.desc}</span>
				</div>
				<div className='d-flex'>
					<h6>Activity No: </h6> <span className='ms-4'>{exam._id}</span>
				</div>
				<div className='d-flex'>
					<h6>Activity Length: </h6>
					<span className='ms-4'>{exam.examLength}</span>
				</div>

				<h6>Questions</h6>
				<Form onSubmit={handleSubmit}>
					{exam.questions &&
						exam.questions.map((question, index) => {
							return (
								<Container key={index}>
									<div className='mt-3 view-questionaire'>
										<h6>
											Q{index + 1}: {question.question}
										</h6>

										<Form.Check
											inline
											type='radio'
											label='A'
											name={`questionA-${index}`}
											id='optionA'
											value='a'
										/>
										<Form.Check
											inline
											type='radio'
											label='B'
											name={`questionB-${index}`}
											id='optionB'
											value='b'
										/>
										<Form.Check
											inline
											type='radio'
											label='C'
											name={`questionC-${index}`}
											id='optionC'
											value='c'
										/>
										<Form.Check
											inline
											type='radio'
											label='D'
											name={`questionD-${index}`}
											id='optionD'
											value='d'
										/>

										<div className=''>
											<span className='mx-3'>A. {question.choice_a}</span>
											<span className='mx-3'>B. {question.choice_b}</span>
											<span className='mx-3'>C. {question.choice_c}</span>
											<span className='mx-3'>D. {question.choice_d}</span>

											<span>
												{/* <Form.Control
													onChange={handleChange}
													value={answeredExam.answer}
													as='select'
												>
													<option value=''>Select</option>
													<option value='A'>A</option>
													<option value='B'>B</option>
													<option value='C'>C</option>
													<option value='D'>D</option>
												</Form.Control> */}
											</span>
										</div>
									</div>
								</Container>
							);
						})}
					<Button type='submit'>Submit</Button>
				</Form>
			</div>
		</Container>
	);
}
export default TakeExamsStudents;
