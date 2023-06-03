import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";
import Home from "./components/teacher/Home";
import Students from "./components/teacher/Students";
import NotFound from "./NotFound";
import Grades from "./components/teacher/Grades";
import Register from "./components/Register/Register";
import "./App.css";
import TeachProfile from "./components/teacher/teacher-component/Teach_Profile";
import Activities from "./components/teacher/Activities";

function App() {
	// const url = 'http://localhost:5000/teachers/get-students';
	// fetch(url).then(res => res.json).then(data=> console.log(data));

	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/login' element={<Login />} />
				{/* <Route path='/register' element={<Register />} /> */}
				<Route path='/teacher' element={<Home />} />
				<Route path='/teacher/students' element={<Students />} />
				<Route path='/teacher/grades' element={<Grades />} />
				<Route path='/teacher/profile' element={<TeachProfile />} />
				<Route path='/teacher/activities' element={<Activities />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
