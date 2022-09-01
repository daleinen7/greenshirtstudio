import React from "react";
import Layout from "../components/Layout";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import Testimonial from "../components/Testimonial";
import CoachingSignup from "../components/CoachingSignup";
import testimonials from "../lib/testimonials";
import privateCoaching from "../images/privateCoaching.png";
import ContentCard from "../components/ContentCard";
import ContentStack from "../components/ContentStack";
import auditions from "../images/auditions.png";
import speech from "../images/speech.png";
import vocal from "../images/vocal.png";

const ProfessionalDevelopment = () => {
  const coaching = [
    <ContentCard
      title={"Auditions & Monologues"}
      content={
        "Seeking representation, preparing for grad school auditions, or trying to nail your monologue auditions? We've got you covered!"
      }
      image={auditions}
      altText="Audition coaching"
    />,

    <ContentCard
      title={"Storytelling & Speech Writing"}
      content={
        "Always wanted to go tell a story at a live event like The Moth? Need to write and give a Best Man Speech at your brother’s wedding but don’t know where to start? Reach out and we’ll help you craft and tell a story your audience will never forget."
      }
      image={speech}
      altText="Student presenting a speech"
    />,

    <ContentCard
      title={"Vocal Training"}
      content={
        "Our one on one voice training will help you free up vocal tension, increase resonance, and find clear articulation. Dialect coaching is also available. "
      }
      image={vocal}
      altText="Singing exercises"
    />,
  ];

  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={privateCoaching}
        title="Private Coaching"
        content="Accelerate your learning and get closer to achieving your goals with private coaching. "
      />

      <ContentStack title={"In-Person & Zoom Coaching"} content={coaching} />

      <Testimonial quotes={testimonials} />
      <CoachingSignup />
    </Layout>
  );
};
export default ProfessionalDevelopment;
