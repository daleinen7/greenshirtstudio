import React from "react";
import Accordian from "../Accordian";
import parse from "html-react-parser";

const CancellationPolicy = ({ cancellationPolicy }) => {
  return (
    <section>
      <Accordian title="Cancellation Policy">
        {parse(cancellationPolicy)}
      </Accordian>
    </section>
  );
};
export default CancellationPolicy;
