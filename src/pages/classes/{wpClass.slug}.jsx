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
  .left-column {
    width: 62%;
  }

  .right-column {
    width: 38%;
  }

  .left-column {
    padding-right: 1rem;
  }

  .right-column {
    padding-left: 1rem;
  }
  @media (max-width: 970px) {
    padding: 0;
    margin: 0 auto;
    .main-content {
      flex-direction: column;
      padding: 0 2rem;
      .left-column,
      .right-column {
        width: 100%;
        padding: 0;
      }
      .left-column {
        margin-bottom: 2rem;
      }
      .right-column {
        margin: 2rem auto;
        h3 {
          margin-bottom: 0.5rem;
        }
        section {
          border: rgba(0, 0, 0, 0.1) solid 2px;
          border-radius: 2px;
          padding: 1rem;
          margin: 1rem auto;
        }
        section:nth-of-type(1) {
          border: #f8bcbe solid 2px;
        }
        a {
          border: #8ceea0 solid 2px;
          border-radius: 2px;
          padding: 1rem 2rem;
          margin-top: 1rem;
          color: inherit;
        }
        dt {
          font-weight: bold;
          margin-top: 1rem;
        }
        ul {
          list-style: none;
          padding: 0;
        }
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
      databaseId
      classGroup {
        age
        classSize
        stripeId
        stripeInstallmentId
        day
        dates {
          date
        }
        price
        linkInstructor {
          ... on WpInstructor {
            id
            title
            slug
            content
            instructors {
              title
              image {
                altText
                gatsbyImage(width: 480, height: 480)
              }
            }
          }
        }
        location
        optionalSpecialHeader
        optionalSpecialMessage
        time
        classImage {
          sourceUrl
        }
      }
    }
  }
`;