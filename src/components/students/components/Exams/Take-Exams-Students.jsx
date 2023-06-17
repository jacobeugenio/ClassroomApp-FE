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

	const dataStudent = userInfo.data.registeredData._id;

	const [answeredExam, setAnsweredExam] = useState({
		subject: "",
		answer: "",
		studentId: "",
		examId: "",
	});

	const [studentAnswers, setStudentAnswers] = useState([]);

	useEffect(() => {
		const getExam = async () => {
			try {
				const response = await API_Service.get(`/students/exam/${id}`);
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

	const handleChange = (event) => {
		const { name, value } = event.target;

		setStudentAnswers((prevAnswers) => [...prevAnswers, value]);
		console.log(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const updatedAnsweredExam = {
			...answeredExam,
			answer: studentAnswers,
		};

		// API_Service.post("/students/answers", updatedAnsweredExam).then((res) => {
		// 	console.log(res);
		// }).catch = (err) => {
		// 	console.log(err);
		// };

		console.log(updatedAnsweredExam);
	};

	return (
		<Container className='my-3'>
			<div className=''>
				<Link to='/student/exams'>
					<Button variant='outline-success' size='sm'>
						<FontAwesomeIcon icon={faArrowLeft} />
						Back
					</Button>
				</Link>
				<div className='title__holder'>Classroom Management App</div>
				<div className='subject__exam'>Subject: {exam.subject}</div>
				<div className='title__exam'>Title: {exam.title}</div>
				<div className='d-flex justify-content-between'>
					<div className='desc__exam'>Description: {exam.desc}</div>
					{/* <div>{exam._id}</div> */}
					<div className='num__exam'>Number of items: {exam.examLength}</div>
				</div>
				<hr />
				<div className='ques__exam'>Questions</div>
				<Form onSubmit={handleSubmit}>
					{exam.questions &&
						exam.questions.map((question, index) => {
							const questionName = `question-${index}`; // Add this line
							return (
								<Container key={index}>
									<div className='mt-3 view-questionaire'>
										<div className='ques__details--exam'>
											Q{index + 1}: {question.question}
										</div>

										<Form.Check
											inline
											type='radio'
											label={`A. ${question.choice_a}`}
											name={questionName} // Modify this line
											id='optionA'
											onChange={handleChange}
											value='a'
											required
										/>
										<Form.Check
											inline
											type='radio'
											label={`A. ${question.choice_b}`}
											name={questionName} // Modify this line
											id='optionB'
											onChange={handleChange}
											value='b'
											required
										/>
										<Form.Check
											inline
											type='radio'
											label={`A. ${question.choice_c}`}
											name={questionName} // Modify this line
											id='optionC'
											onChange={handleChange}
											value='c'
											required
										/>
										<Form.Check
											inline
											type='radio'
											label={`A. ${question.choice_d}`}
											name={questionName} // Modify this line
											id='optionD'
											onChange={handleChange}
											value='d'
											required
										/>
									</div>
								</Container>
							);
						})}
					<Button type='submit' className='btn__take--exam'>
						Submit
					</Button>
				</Form>
			</div>
		</Container>
	);
}
export default TakeExamsStudents;
