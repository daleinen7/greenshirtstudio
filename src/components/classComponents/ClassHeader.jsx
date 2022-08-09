import React from "react";
import styled from "styled-components";

const StyledClassHeader = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: row;

  align-items: center;

  h2 {
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }

  img {
    width: 50%;
    padding-right: 1rem;
  }

  .info {
    padding-left: 1rem;
    padding-right: 2.25rem;
    width: 50%;

    p {
      line-height: 1.875rem;
      font-size: 1.25rem;
    }

    .price {
      margin-top: 2rem;
      font-size: 3rem;
      line-height: 2rem;

      small {
        font-size: 1rem;
        color: var(--dark-gray);
      }
    }
  }
`;

const ClassHeader = ({ wpClass }) => {
  return (
    <StyledClassHeader>
      <img src={wpClass.classGroup.classImage.sourceUrl} alt={wpClass.title} />
      <div className="info">
        <h2>{wpClass.title}</h2>
        <p>{`${wpClass.classGroup.day}, ${wpClass.classGroup.dates[0].date} - ${
          wpClass.classGroup.dates[wpClass.classGroup.dates.length - 1].date
        }, ${wpClass.classGroup.time} with ${wpClass.author.node.name}`}</p>

        <div className="price">
          ${wpClass.classGroup.price} <br />
          <small>or $110 every 3 weeks</small>
        </div>

        <button className={"button fill"}>Sign Up</button>
      </div>
    </StyledClassHeader>
  );
};
export default ClassHeader;
