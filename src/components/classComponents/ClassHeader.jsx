import React from "react";
import styled from "styled-components";

const StyledClassHeader = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: row;

  align-items: center;

  h2 {
    font-size: 3.75rem;
    line-height: 4.875rem;
  }

  img {
    width: 50%;
  }

  .info {
    padding-right: 2.25rem;
    width: 50%;

    p {
      line-height: 1.875rem;
    }
  }
`;

const ClassHeader = ({ strapiClass }) => {
  return (
    <StyledClassHeader>
      <img src="https://via.placeholder.com/752x494" alt={strapiClass.Title} />
      <div className="info">
        <h2>{strapiClass.Title}</h2>
        <p>{`${
          strapiClass.DayOfTheWeek
        }, HARDCODED DATE and TIME with ${"HARDCODED TEACHER"}`}</p>
      </div>
    </StyledClassHeader>
  );
};
export default ClassHeader;
