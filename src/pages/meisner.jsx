import React from "react";
import Layout from "../components/Layout";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import Subscribe from "../components/Subscribe";
import ContentStack from "../components/ContentStack";
import MeisnerProgram from "../images/MeisnerProgram.png";

const Meisner = () => {
  const hack = `Our Meisner Acting Program consists of Levels 1 - 5, each level lasting eight weeks, totaling in 100 hours of training. Completing Levels 1 - 5 will give you a specific, step by step process to successfully tackle any script.  \n  \n  Our Meisner Acting Program is designed to welcome and challenge students of all levels of experience.`;

  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={MeisnerProgram}
        title="Meisner Acting Program"
        content={hack}
      />
      {/* <ContentStack
      title="January - February 2022 Session"
      content={?}
      /> */}
      <Subscribe />
    </Layout>
  );
};
export default Meisner;
