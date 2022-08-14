import React from "react";
import WorkshopsImg from "../images/Workshops.png";
import Layout from "../components/Layout";
import Subscribe from "../components/Subscribe";
import ContentStack from "../components/ContentStack";
import ImageAndContentHeader from "../components/ImageAndContentHeader";

const Workshops = () => {
  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={WorkshopsImg}
        title="Workshops"
        content="Somethign something apple sauce"
      />
      {/* <ContentStack
      title="January - February 2022 Session"
      content={?}
      /> */}
      <Subscribe/>
    </Layout>
  );
};
export default Workshops;
