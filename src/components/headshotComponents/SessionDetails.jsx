import React from 'react';
import styled from 'styled-components';

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

    dt {
      margin-top: 0;
    }
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

const ClassDetails = ({ session }) => {
  return (
    <StyledClassDetails>
      <h3>Class Details</h3>
      <div className="details">
        <dl>
          <dt>Day</dt>
          <dd>{session['Day of week']}</dd>
          <dt>Time</dt>
          <dd>{session['Time of shoot']}</dd>
          <dt>Date</dt>
          <dd>
            {session['Month']} {session['Day of Month']}, {session['Year']}
          </dd>
          <dt>Location</dt>
          <dd className="location">{session['Location']}</dd>
          <dt>Photographer</dt>
          <dd>{session['Photographer Name']}</dd>
          <dt>Cost</dt>
          <dd>${session['Price']}</dd>
        </dl>
      </div>
    </StyledClassDetails>
  );
};
export default ClassDetails;
