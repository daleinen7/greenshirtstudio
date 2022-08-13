import React from "react";
import SpecializedClassesImg from "../images/SpecializedClasses.png";
import Layout from "../components/Layout";
import Subscribe from "../components/Subscribe";
import ContentStack from "../components/ContentStack";
import ImageAndContentHeader from "../components/ImageAndContentHeader";

const SpecializedClasses = () => {
  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={SpecializedClassesImg}
        title="Specialized Classes"
        content="Something something apple sauce"
      />
      {/* <ContentStack
      title="Upcoming Workshops"
      content={?}
      /> */}
      <Subscribe/>
    </Layout>
  );
};
export default SpecializedClasses;
