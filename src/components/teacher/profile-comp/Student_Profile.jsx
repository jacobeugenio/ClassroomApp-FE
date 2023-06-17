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
        setProfiles(response.data);
        // console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getProfiles();
  }, []);
  return (
    <>
      {profiles &&
        profiles.map((profile, index) => {
          return (
            <Card key={index} className="me-4 my-3">
              <Card.Img
                variant="top"
                src={profile.img}
                style={{
                  margin: "auto",
                  height: 40,
                  width: 40,
                  borderRadius: 50,
                  border: "1px solid green",
                }}
              />

              <Card.Text style={{ fontSize: 11 }}>{profile.username}</Card.Text>
            </Card>
          );
        })}
    </>
  );
};

export default Student_Profile;
