import React from "react";
const FAQ = ({ q, a }) => {
  return (
    <>
      <dt>{q}</dt>
      <dd>{a}</dd>
    </>
  );
};
export default FAQ;
