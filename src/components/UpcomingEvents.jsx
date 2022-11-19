import React from "react";
import styled from "styled-components";

const StyledUpcomingEvents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  margin: 0 auto;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    text-align: center;
  }

  a {
    margin-top: 2rem;
  }
`;

const UpcomingEvents = () => {
  return (
    <StyledUpcomingEvents>
      <h3>Upcoming Events</h3>
      <p>
        Our upcoming events are listed below. Check out occurs on Eventbrite.
        You can also view upcoming events on our collections page in Eventbrite.
      </p>
      <a
        href="https://www.eventbrite.com/cc/green-shirt-shows-events-1248579"
        className="button fill"
        target="_blank"
        rel="noopener noreferrer"
      >
        Green Shirt Studio on Eventbrite
      </a>
    </StyledUpcomingEvents>
  );
};
export default UpcomingEvents;
