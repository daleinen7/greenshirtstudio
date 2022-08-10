import React from "react";
import styled from "styled-components";

const StyledClassDetails = styled.section`
  h3 {
    font-size: 1.5rem;
  }
`;

const ClassDetails = ({ wpClass }) => {
  return (
    <StyledClassDetails>
      <h3>Class Details</h3>
      <div className="details">
        <dl>
          <dt>Day</dt>
          <dd>{wpClass.classGroup.day}</dd>
          <dt>Time</dt>
          <dd>{wpClass.classGroup.time}</dd>
          <dt>Dates</dt>
          <dd>
            <ul>
              {wpClass.classGroup.dates.map((date, idx) => {
                return <li key={idx}>{date.date}</li>;
              })}
            </ul>
          </dd>
          <dt>Location</dt>
          <dd>{wpClass.classGroup.location}</dd>
          <dt>Instructor</dt>
          <dd>{wpClass.classGroup.instructor}</dd>
          <dt>Class Size</dt>
          <dd>{wpClass.classGroup.classSize}</dd>
          <dt>Age</dt>
          <dd>{wpClass.classGroup.age}</dd>
          <dt>Cost</dt>
          <dd>${wpClass.classGroup.price}</dd>
        </dl>
      </div>
    </StyledClassDetails>
  );
};
export default ClassDetails;
