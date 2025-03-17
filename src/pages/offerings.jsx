import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import SectionDivider from '../components/SectionDivider';
import ImageAndFormHeader from '../components/ImageAndFormHeader';
import AboutHero from '../images/Events.jpg';
import Accessibility from '../images/Accessibility.png';
import Community from '../images/Community.png';
import Diversity from '../images/Diversity.png';
import Classes from '../images/ClassesOfferings.jpg';
import Shows from '../images/ShowsOfferings.jpg';
import Events from '../images/EventsOffrerings.jpg';
import ContentCardCTA from '../components/ContentCardCTA';
import ContentStack from '../components/ContentStack';

const Offerings = ({ data }) => {
  const ourOfferings = [
    <ContentCardCTA
      title={'Group Acting Classes'}
      content={'Group classes for all experience levels. Beginners welcome.'}
      image={Accessibility}
      altText="All level of actors"
      link="Get Started"
      linkAddress="#offerings-form"
    />,
    <ContentCardCTA
      title={'Private Acting Coaching'}
      content={'Reach your goals with the guidance of an experienced coach.'}
      image={Diversity}
      altText="Diverse actors"
      link="Get Started"
      linkAddress="#offerings-form"
    />,
    <ContentCardCTA
      title={'Professional Development'}
      content={'Team building and communication workshops for your team.'}
      image={Community}
      altText="Actors posing"
      link="Get Started"
      linkAddress="#offerings-form"
    />,
  ];

  const getInvolved = [
    <ContentCardCTA
      title={'Classes'}
      content={'Take a class to grow your skills.'}
      image={Classes}
      altText="All level of actors"
      link="Classes"
      linkAddress="/classes/"
    />,
    <ContentCardCTA
      title={'Shows'}
      content={'See a show or sign up to perform!'}
      image={Shows}
      altText="Diverse actors"
      link="Shows"
      linkAddress="/events/"
    />,
    <ContentCardCTA
      title={'Events'}
      content={'Attend an event to meet more creatives in our community.'}
      image={Events}
      altText="Actors posing"
      link="Events"
      linkAddress="/events/"
    />,
  ];

  return (
    <Layout>
      <ImageAndFormHeader
        title="Get Started"
        subtitle="Send questions or class requests and we'll get you started right away."
        image={AboutHero}
      />
      <SectionDivider />
      <ContentStack title={'Our Offerings'} content={ourOfferings} />
      <SectionDivider />
      <ContentStack title={'Get Involved'} content={getInvolved} />
    </Layout>
  );
};
export default Offerings;

export const Head = () => (
  <SEO
    title={`Offerings - Green Shirt Studio`}
    description={`Contact Green Shirt Studio`}
  />
);
