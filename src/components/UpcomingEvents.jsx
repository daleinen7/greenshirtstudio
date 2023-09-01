import React from 'react';
import styled from 'styled-components';

const StyledUpcomingEvents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: 4.75rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    text-align: center;
    line-height: 1.875rem;
  }

  a {
    margin-top: 2rem;
  }

  @media (max-width: 500px) {
    p {
      line-height: 1.5rem;
    }
  }
`;

const UpcomingEvents = () => {
  return (
    <StyledUpcomingEvents>
      <h3>Upcoming Events</h3>
      <p>Select an event to learn more details and reserve your tickets.</p>
    </StyledUpcomingEvents>
  );
};
export default UpcomingEvents;
