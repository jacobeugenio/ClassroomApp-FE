import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const StudentDetails = ({ data }) => {

  const studentData = data.map((student, index) => {
    return <tr key={index}>
      <td>{index + 1}</td>
      <td>{student.fname}</td>
      <td>{student.lname}</td>
      <td>{student.username}</td>
      <td>{student.contact}</td>
      <td>{student.gender}</td>
      <td>{student.age}</td>
      <td>
        <Button variant='success' size='sm' className='mx-2'>View</Button>
        <Button variant='outline-success' size='sm' className=''>Delete</Button>
      </td>
    </tr>
  })

  return (
    <Table responsive className='mt-2'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Contact</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        {studentData}

      </tbody>

  </Table>
  )
}

export default StudentDetails