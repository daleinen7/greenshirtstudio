import React from "react";
import styled from "styled-components";

const StyledClassDetails = styled.section`
  h3 {
    font-size: 1.5rem;
  }
`;

const ClassDetails = ({ strapiClass }) => {
  console.log("Deets, ", strapiClass);
  return (
    <StyledClassDetails>
      <h3>Class Details</h3>
      <div className="details">
        <dl>
          <dt>Day</dt>
          <dd>{strapiClass.DayOfTheWeek}</dd>
          <dt>Time</dt>
          <dd>HARDCODED TIME</dd>
          <dt>Dates</dt>
          <dd>HARDCODED DATES</dd>
          <dt>Location</dt>
          <dd>{strapiClass.Location}</dd>
          <dt>Instructor</dt>
          <dd>
            {strapiClass.users_permissions_user.username} BUT ALSO FIX
            HARDCODED-ING
          </dd>
          <dt>Class Size</dt>
          <dd>HARDCODED CLASS SIZE</dd>
          <dt>Age</dt>
          <dd>{strapiClass.Age}</dd>
          <dt>Cost</dt>
          <dd>${strapiClass.Price}</dd>
        </dl>
      </div>
    </StyledClassDetails>
  );
};
export default ClassDetails;
