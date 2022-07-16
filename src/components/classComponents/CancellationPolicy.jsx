import React from "react";
import Accordion from "../Accordion";
import parse from "html-react-parser";

const CancellationPolicy = ({ cancellationPolicy }) => {
  return (
    <section>
      <Accordion title="Cancellation Policy" defaultOpen={true}>
        {parse(cancellationPolicy)}
      </Accordion>
    </section>
  );
};
export default CancellationPolicy;
