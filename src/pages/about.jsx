import React from "react";
import Layout from "../components/Layout";
import SectionDivider from "../components/SectionDivider";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import AboutHero from "../images/AboutHero.png";
import Accessibility from "../images/Accessibility.png";
import Community from "../images/Community.png";
import Diversity from "../images/Diversity.png";
import Facing from "../images/Facing.png";
import ContentCard from "../components/ContentCard";
import ContentStack from "../components/ContentStack";
import TextContent from "../components/TextContent";

const About = () => {
  const coreValues = [
    <ContentCard
      title={"Accessibility"}
      content={
        "Our classes are designed to welcome and challenge students of all levels of experience"
      }
      image={Accessibility}
      altText="All level of actors"
    />,
    <ContentCard
      title={"Diversity"}
      content={
        "We believe people learn best when many different types of people are learning in the same space "
      }
      image={Diversity}
      altText="Diverse actors"
    />,
    <ContentCard
      title={"Community"}
      content={"We grow by supporting one another"}
      image={Community}
      altText="Actors posing"
    />,
  ];

  return (
    <Layout>
      <ImageAndContentHeader
        title="About"
        content="Green Shirt Studio makes high quality performing arts training accessible for everyone. Our vision is to create a world of courageous, vulnerable, empathetic people empowered to tell their stories well."
        image={AboutHero}
      />
      <SectionDivider />
      <ContentStack title={"Other Programs"} content={coreValues} />
      <SectionDivider />
      <TextContent
        title="Our Classes"
        content={
          <>
            <p>
              Our Meisner Acting Program Levels 1 - 5 give our students a
              complete, specific, step by step technique that demystifies the
              craft of acting and gives them the tools to successfully tackle
              any script.
            </p>

            <p>
              Our Specialized Classes create training opportunities not normally
              offered in an accessible environment for performers and
              non-performers alike.
            </p>

            <p>
              Our Meisner Acting Program and Specialized Classes include the
              benefits of training with highly experienced, compassionate
              instructors in a specific method of performing arts training
              without barriers like high costs, large investments of time, or an
              audition. Our emphasis on accessibility supports the rich
              diversity of our community that, in turn, supports the
              professional and personal growth of everyone involved at our
              studio.
            </p>
          </>
        }
        link="Sponser a scholarship"
        linkAddress="#"
      />
      <img src={Facing} alt="Actors facing eachother" />
    </Layout>
  );
};
export default About;
