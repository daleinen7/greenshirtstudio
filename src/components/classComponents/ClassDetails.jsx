import React from "react";
import styled from "styled-components";

const StyledClassDetails = styled.section`
  border: 2px solid var(--light-gray);
  border-radius: 2px;
  padding: 1.5rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  dl {
    display: grid;
    grid-template-columns: 6.9375rem auto;
  }

  dt {
    font-weight: 900;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: none;
    margin: 0 0 1.5rem;
    padding: 0;
  }

  .location {
    margin-bottom: 1rem;
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
          <dd className="location">
            {wpClass.classGroup.location
              .split(" ")
              .splice(0, wpClass.classGroup.location.split(" ").length - 1, -1)
              .join(" ")}
            <br />
            {
              wpClass.classGroup.location.split(" ")[
                wpClass.classGroup.location.split(" ").length - 1
              ]
            }
          </dd>
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
