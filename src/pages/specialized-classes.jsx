import React from "react";
import SpecializedClassesImg from "../images/SpecializedClasses.png";
import Layout from "../components/Layout";
import ImageAndContentHeader from "../components/ImageAndContentHeader";

const SpecializedClasses = () => {
  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={SpecializedClassesImg}
        title="Specialized Classes"
        content="Something something apple sauce"
      />
    </Layout>
  );
};
export default SpecializedClasses;
