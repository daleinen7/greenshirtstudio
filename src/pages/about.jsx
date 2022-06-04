import React from "react";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
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
      image={"https://via.placeholder.com/416x290"}
      altText="Placeholder image"
    />,
    <ContentCard
      title={"Diversity"}
      content={
        "We believe people learn best when many different types of people are learning in the same space "
      }
      image={"https://via.placeholder.com/416x290"}
      altText="Placeholder image"
    />,
    <ContentCard
      title={"Community"}
      content={"We grow by supporting one another"}
      image={"https://via.placeholder.com/416x290"}
      altText="Placeholder image"
    />,
  ];

  return (
    <>
      <ImageAndContentHeader
        title="About"
        content="Green Shirt Studio makes high quality performing arts training accessible for everyone. Our vision is to create a world of courageous, vulnerable, empathetic people empowered to tell their stories well."
        image="https://via.placeholder.com/703x527"
      />
      <ContentStack title={"Other Programs"} content={coreValues} />
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
    </>
  );
};
export default About;
