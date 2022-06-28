import React from "react";
import WorkshopsImg from "../images/Workshops.png";
import Layout from "../components/Layout";
import ImageAndContentHeader from "../components/ImageAndContentHeader";

const Workshops = () => {
  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={WorkshopsImg}
        title="Workshops"
        content="Somethign something apple sauce"
      />
    </Layout>
  );
};
export default Workshops;
