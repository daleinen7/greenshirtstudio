import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledAboutTeacher = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 2px solid var(--light-gray);
  border-radius: 2px;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  img {
    margin-bottom: 1rem;
  }

  .bio {
    margin-bottom: 1rem;
  }

  .learn-more {
    margin-top: 1rem;
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
      <div className="bio">{wpClass.author.node.description}</div>
      <div className="learn-more">
        <Link href="#" className="button fill">
          {`About ${wpClass.author.node.name}`}
        </Link>
      </div>
    </StyledAboutTeacher>
  );
};
export default AboutTeacher;
