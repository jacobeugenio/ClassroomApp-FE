import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./components/login/Login";
import Home from "./components/teacher/Home";
import Students from "./components/teacher/Students";
import NotFound from "./NotFound";
import Grades from "./components/teacher/Grades";
import Register from "./components/Register/Register";
import TeachProfile from "./components/teacher/teacher-component/Teach_Profile";
import TeacherProfile from "./components/teacher/Teacher_Profile";
import Activities from "./components/teacher/Activities";
import ActivityDetails from "./components/teacher/activities-comp/Activity_Details";

//Students Page
import StudentsPage from "./components/students/Students";
import AttendanceStudents from "./components/students/components/Attendance/Attendance-Students";
import GradesStudents from "./components/students/components/Grades/Grades-Students";
import ExamsStudents from "./components/students/components/Exams/Exams-Students";
import CreateExamPt2 from "./components/teacher/activities-comp/Create_Exam_Pt2";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	// const url = 'http://localhost:5000/teachers/get-students';
	// fetch(url).then(res => res.json).then(data=> console.log(data));

	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/teacher' element={<Home />} />
				<Route path='/teacher/students' element={<Students />} />
				<Route path='/teacher/grades' element={<Grades />} />
				<Route path='/teacher/profile' element={<TeacherProfile />} />
				<Route path='/teacher/activities' element={<Activities />} />
				<Route path='/teacher/activities/:id' element={<ActivityDetails />} />
				<Route
					path='/teacher/activities/part2/:id'
					element={<CreateExamPt2 />}
				/>
				<Route path='*' element={<NotFound />} />

				{/* Students Page */}
				<Route path='/students' element={<StudentsPage />} />
				<Route path='/students-attendance' element={<AttendanceStudents />} />
				<Route path='/students-grades' element={<GradesStudents />} />
				<Route path='/students-exams' element={<ExamsStudents />} />
			</Routes>
		</>
	);
}

export default App;
