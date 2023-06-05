import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import S_Image from "../../../img/ava2.png";
import API_Service from "../../../api-service/API_Service";
const Student_Profile = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const getProfiles = async () => {
      try {
        const response = await API_Service.get("/teachers/get-students");
        // setProfiles(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getProfiles();
  }, []);
  return (
    <Container className="s_profile_container my-4">
      {/* {Array.from({ length: 20 }).map((_, idx) => (
        <Card>
          <Card.Img
            variant="top"
            src={S_Image}
            style={{ height: 50, width: 50 }}
          />
        </Card>
      ))} */}
      {profiles &&
        profiles.map((profile, index) => {
          return (
            <Card key={index}>
              <Card.Img
                variant="top"
                src={S_Image}
                style={{ height: 50, width: 50 }}
              />
              <Card.Text>{profile.fname}</Card.Text>
            </Card>
          );
        })}
    </Container>
  );
};

export default Student_Profile;
