import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import ClassHeader from "../../components/classComponents/ClassHeader";
import Description from "../../components/classComponents/Description";
import CancellationPolicy from "../../components/classComponents/CancellationPolicy";
import AttendancePolicy from "../../components/classComponents/AttendancePolicy";
import SpecialMessage from "../../components/classComponents/SpecialMessage";
import AboutTeacher from "../../components/classComponents/AboutTeacher";
import ClassDetails from "../../components/classComponents/ClassDetails";

import styled from "styled-components";

const StyledClassPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 4.6875rem auto;
padding: 0 4rem; 

.main-content {
  display: flex;
  max-width: 1440px;
  width: 100%;
}
.left-column,
.right-column {
  width: 50%;
}

.left-column {
  padding-right: 1rem;
}

.right-column {
  padding-left: 1rem;
}
@media (max-width: 450px){
  .main-content {
    display: flex;
    flex-direction: column;
    .left-column, .right-column {
      width: 100%;
      padding: 0;
    }
  }
}
`;

const ClassPage = (props) => {
  const { wpClass } = props.data;
  const cancellationPolicy = props.data.allWpPage.edges[1].node.content;
  const attendancePolicy = props.data.allWpPage.edges[0].node.content;

  return (
    <Layout>
      <StyledClassPage>
        <ClassHeader wpClass={wpClass} />
        <div className="main-content">
          <div className="left-column">
            <Description wpClass={wpClass} />
            <CancellationPolicy cancellationPolicy={cancellationPolicy} />
            <AttendancePolicy attendancePolicy={attendancePolicy} />
          </div>
          <div className="right-column">
            {wpClass.classGroup.optionalSpecialMessage && (
              <SpecialMessage wpClass={wpClass} />
            )}
            <AboutTeacher wpClass={wpClass} />
            <ClassDetails wpClass={wpClass} />
          </div>
        </div>
      </StyledClassPage>
    </Layout>
  );
};
export default ClassPage;

export const query = graphql`
  query ($id: String!) {
    allWpPage(
      filter: {
        title: { in: ["Attendance Policy", "Cancellation Policy Gatsby"] }
      }
    ) {
      edges {
        node {
          id
          content
        }
      }
    }
    wpClass(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
          description
        }
      }
      classGroup {
        age
        classSize
        day
        dates {
          date
        }
        price
        instructor
        location
        optionalSpecialMessage
        time
        classImage {
          sourceUrl
        }
        instructorPhoto {
          sourceUrl
        }
      }
    }
  }
`;
