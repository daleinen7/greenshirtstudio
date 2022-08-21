import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
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

    p {
      margin-top: 1rem;
    }
  }

  .learn-more {
    margin-top: 1rem;
  }
`;

const AboutTeacher = ({ wpClass }) => {
  return (
    <StyledAboutTeacher>
      <GatsbyImage
        image={wpClass.classGroup.linkInstructor.instructors.image.gatsbyImage}
        alt={wpClass.classGroup.linkInstructor.instructors.title}
      />
      <h3>About the Teacher</h3>
      <div className="bio">
        {parse(wpClass.classGroup.linkInstructor.content)}
      </div>
      <div className="learn-more">
        <Link
          href={wpClass.classGroup.linkInstructor.slug}
          className="button fill"
        >
          {`About ${wpClass.classGroup.linkInstructor.title}`}
        </Link>
      </div>
    </StyledAboutTeacher>
  );
};
export default AboutTeacher;
