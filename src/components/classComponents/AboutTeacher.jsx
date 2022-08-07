import React from "react";
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

const AboutTeacher = ({ wpClass }) => {
  return (
    <StyledAboutTeacher>
      <img
        src={wpClass.classGroup.instructorPhoto.sourceUrl}
        alt="teacher placeholder"
      />
      <h3>About the Teacher</h3>
      <div>{wpClass.author.node.description}</div>
      <a href="#" className="learn-more">
        Learn more about {wpClass.author.node.name}
      </a>
    </StyledAboutTeacher>
  );
};
export default AboutTeacher;
