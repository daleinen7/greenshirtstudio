import React from "react";
import Accordian from "../Accordian";
import ReactMarkdown from "react-markdown";

const Description = (strapiClass) => {
  return (
    <section>
      <Accordian title="Description">
        <ReactMarkdown
          children={strapiClass.strapiClass.Description.data.Description}
        />
      </Accordian>
    </section>
  );
};
export default Description;
