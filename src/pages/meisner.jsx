import React from "react";
import Layout from "../components/Layout";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import MeisnerProgram from "../images/MeisnerProgram.png";

const Meisner = () => {
  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={MeisnerProgram}
        title="Meisner Acting Program"
        content="Our Meisner Acting Program consists of Levels 1 – 5, each level lasting eight weeks, totaling in 100 hours of training. Completing Levels 1 – 5 will give you the skills and confidence needed to be a working actor. "
      />
    </Layout>
  );
};
export default Meisner;
