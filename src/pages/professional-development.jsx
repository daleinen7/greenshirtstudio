import React from "react";
import Layout from "../components/Layout";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import CTACard from "../components/CTAContentCard";
import Testimonial from "../components/Testimonial";
import Subscribe from "../components/Subscribe";
import testimonials from "../lib/testimonials";

const ProfessionalDevelopment = () => {
  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={"https://via.placeholder.com/700x530"}
        title="Professional Development"
        content="Private coaching will accelerate your learning experience and get you closer to achieving personal and professional goals. We always offer a free consultation to answer any questions and then charge $70 per 1hr session. Package deals are available. We offer private coaching in person and over zoom for:"
      />
      <CTACard
        headerAlign={"right"}
        title={"Auditions & Monologues"}
        image={"https://via.placeholder.com/752x494"}
        imageAltText={"placeholder image"}
        info={
          "Our community is one of encouragement: we grow and learn by supporting one another. As legendary acting teacher Sanford Meisner said, “You are enough!”"
        }
      />
      <CTACard
        headerAlign={"left"}
        title={"Storytelling & Speech Writing"}
        image={"https://via.placeholder.com/752x494"}
        imageAltText={"placeholder image"}
        info={
          "Always wanted to go tell a story at a live event like The Moth? Need to write and give a Best Man Speech at your brother’s wedding but don’t know where to start? Reach out and we’ll help you craft and tell a story your audience will never forget."
        }
      />
      <CTACard
        headerAlign={"right"}
        title={"Vocal Training"}
        image={"https://via.placeholder.com/752x494"}
        imageAltText={"placeholder image"}
        info={
          "Our one on one voice training will help you free up vocal tension, increase resonance, and find clear articulation. Dialect coaching is also available. "
        }
      />
      <Testimonial quotes={testimonials} />
      <Subscribe />
    </Layout>
  );
};
export default ProfessionalDevelopment;
