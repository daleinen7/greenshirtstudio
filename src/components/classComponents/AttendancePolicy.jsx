import React from "react";
import Accordian from "../Accordian";
import styled from "styled-components";

const StyledAttendancePolicy = styled.section`
  h3 {
    font-weight: 900;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.25rem;
  }

  ul {
    list-style-type: disc;
    li {
      font-size: 1.25rem;
    }
  }
`;

const AttendancePolicy = () => {
  return (
    <StyledAttendancePolicy>
      <Accordian title="Attendance Policy">
        <p>
          In order to get the most out of your work with us, our students should
          make showing up to every class on time a priority.
        </p>

        <p>
          We understand that things do come up so if you know you’re going to
          miss a class, please give your instructor as advance notice as
          possible. This will help them get you caught up and not throw off the
          rest of the group. Scheduling a make-up class is possible but not
          guaranteed.
        </p>

        <p>
          Students enrolled in our Meisner Acting Program can only advance to
          the next level if they’ve attended at least 6 of their 8 sessions. If
          a student misses more than 2 sessions, they will need to retake the
          level in order to advance in the program.
        </p>
      </Accordian>
    </StyledAttendancePolicy>
  );
};
export default AttendancePolicy;
