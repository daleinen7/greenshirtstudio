import React from "react";
import { graphql } from "gatsby";

import styled from "styled-components";
import Layout from "../../components/Layout";
import ClassHeader from "../../components/classComponents/ClassHeader";
import Description from "../../components/classComponents/Description";
import CancellationPolicy from "../../components/classComponents/CancellationPolicy";
import AttendancePolicy from "../../components/classComponents/AttendancePolicy";
import SpecialMessage from "../../components/classComponents/SpecialMessage";
import AboutTeacher from "../../components/classComponents/AboutTeacher";
import ClassDetails from "../../components/classComponents/ClassDetails";

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
`;

const ClassPage = (props) => {
  const { strapiClass } = props.data;

  console.log("Strapi Class: ", strapiClass);

  return (
    <Layout>
      <StyledClassPage>
        <ClassHeader strapiClass={strapiClass} />
        <div className="main-content">
          <div className="left-column">
            <Description strapiClass={strapiClass} />
            <CancellationPolicy strapiClass={strapiClass} />
            <AttendancePolicy strapiClass={strapiClass} />
          </div>
          <div className="right-column">
            <SpecialMessage strapiClass={strapiClass} />
            <AboutTeacher strapiClass={strapiClass} />
            <ClassDetails strapiClass={strapiClass} />
          </div>
        </div>
      </StyledClassPage>
    </Layout>
  );
};
export default ClassPage;

export const query = graphql`
  query ($id: String!) {
    strapiClass(id: { eq: $id }) {
      Title
      Age
      AvailableSeats
      AltPricing
      DayOfTheWeek
      Description {
        data {
          Description
        }
      }
      Location
      Price
      Program
      SpecialMessage {
        data {
          SpecialMessage
        }
      }
    }
  }
`;
