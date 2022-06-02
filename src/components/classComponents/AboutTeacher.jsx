import React from "react";
import Accordian from "../Accordian";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const StyledAboutTeacher = styled.section`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.5rem;
  }

  .learn-more {
    font-weight: 900;
    font-size: 1.25rem;
    color: var(--green);
    text-decoration: none;
  }
`;

const AboutTeacher = ({ strapiClass }) => {
  console.log("This: ", strapiClass.users_permissions_user.Bio.data);

  return (
    <StyledAboutTeacher>
      <img src="https://via.placeholder.com/480" alt="teacher placeholder" />
      <h3>About the Teacher</h3>
      <div>{strapiClass.users_permissions_user.Bio.data}</div>
      <a href="#" className="learn-more">
        Learn more about {strapiClass.users_permissions_user.username}
      </a>
    </StyledAboutTeacher>
  );
};
export default AboutTeacher;
