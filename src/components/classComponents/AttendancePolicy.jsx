import React from "react";
import Accordian from "../Accordian";
import parse from "html-react-parser";
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

const AttendancePolicy = ({ attendancePolicy }) => {
  return (
    <StyledAttendancePolicy>
      <Accordian title="Attendance Policy">{parse(attendancePolicy)}</Accordian>
    </StyledAttendancePolicy>
  );
};
export default AttendancePolicy;
