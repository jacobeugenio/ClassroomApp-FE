import React, { useEffect, useState } from 'react';

import Header from '../../layout/Header';
import StudentDetails from './student-component/StudentDetails';
import SudentRegmodal from './student-component/SudentRegModal';

import API_Service from '../../api-service/API_Service';

import Container from 'react-bootstrap/Container';

const Students = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await API_Service.get('/teachers/get-students');
        setData(response.data.students);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, []);

  return (
    <>
      <Header />
      <div className="container"></div>

      <Container className='my-4'>
        <h3>Students List</h3>
        <hr />
        <SudentRegmodal />
        <StudentDetails data={data} />

      </Container>

    </>
  )
}

export default Students