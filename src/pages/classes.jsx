import React from 'react';
import { Link } from 'gatsby';
import { SEO } from '../components/seo';
import SectionDivider from '../components/SectionDivider';
import MeisnerProgram from '../images/MeisnerProgram.png';
import special from '../images/special.png';
import coaching from '../images/coaching.png';
import workshop from '../images/workshop.png';
import HighSchoolSummerImmersive from '../images/highschoolsummerimmersive.jpg';
import Scholarships from '../images/Scholarships.png';
import Layout from '../components/Layout';
import HeadingEffect from '../components/HeadingEffect';
import CTACard from '../components/CTAContentCard';
import ContentStack from '../components/ContentStack';
import ContentCard from '../components/ContentCard';
import FAQSection from '../components/FAQSection';
import Subscribe from '../components/Subscribe';

import styled from 'styled-components';

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 3rem;
`;

const Classes = ({ data }) => {
  const otherPrograms = [
    <Link to={'/specialized-classes'}>
      <ContentCard
        title={'Specialized Classes'}
        content={'Explore new ways to create and tell your story.'}
        image={special}
        altText="Acting group exercise"
      />
    </Link>,
    <Link to={'/workshops'}>
      <ContentCard
        title={'Workshops'}
        content={
          'Great for sharpening your skills without committing too much of your time.'
        }
        image={workshop}
        altText="Instructor leading class"
      />
    </Link>,
    <Link to={'/private-coaching'}>
      <ContentCard
        title={'Private Coaching'}
        content={
          'One-on-one attention to help you work towards your goals. Audition, monologue, and storytelling coaching available.'
        }
        image={coaching}
        altText="promising students awaiting coaching"
      />
    </Link>,
    <Link to={'/high-school-summer-immersive'}>
      <ContentCard
        title={'High School Summer Immersive'}
        // content={
        //   "One-on-one attention to help you work towards your goals. Audition, monologue, and storytelling coaching available."
        // }
        image={HighSchoolSummerImmersive}
        altText="promising students awaiting coaching"
      />
    </Link>,
  ];

  return (
    <Layout>
      <StyledHero>
        <HeadingEffect text="Classes" />
      </StyledHero>
      <CTACard
        headerAlign={'left'}
        title={'Meisner Acting Program'}
        image={MeisnerProgram}
        imageAltText={'placeholder image'}
        info={`An accessible, step by step approach that demystifies the craft of acting. Classes meet once a week for eight weeks.  \n  \n
  All experience levels are invited to join Level 1: Living Truthfully.`}
        ctaText={'View Class Schedule'}
        ctaLink={'/meisner'}
      />
      <SectionDivider />
      <ContentStack title={'Other Programs'} content={otherPrograms} />
      <SectionDivider />
      <FAQSection
        FAQs={[
          {
            title: 'What if I have to miss a class?',
            content: `We hope students can make it to 100% of their class but know that other things in life sometimes take priority. If you know you're going to need to miss a class, let your instructor know. If there's another section of your class currently being offered at the studio, we can arrange for a make-up so you won't miss any material. If there isn't another section of your class, instructors are always at the studio 30 minutes before class starts so you can get to your next class early and talk you through what you missed.
            <br/><br/>
            We recommend waiting to enroll until you're able to commit to more of the classes if you know that you're going to miss more than 2 classes in a session before signing up.`,
          },
          {
            title: `I'm a professional actor. Do I need to start at level 1?`,
            content: `The Meisner Technique is a very structured approach to acting. If you have not had any experience with Meisner, we require new students to start with Level 1: Living Truthfully.
            <br/><br/>
            This method heavily relies on things that you will learn at every level. A heightened acting experience is well worth the extra dedication. Besides, we are sure that you will still find plenty of challenges throughout your entire Green Shirt Studio education!`,
          },
          {
            title: 'Will these classes help further my acting career?',
            content: `Of course! After graduating our Meisner Acting Program, you will know what steps to take every time you pick up a new script. You'll understand how to be more present, authentically connect to emotions, and take the guesswork out of your acting. Our Specialized Classes will help you develop skills related to a more niche element of your acting career like developing your speaking voice, on camera skills, or personal storytelling.
            <br/><br/>
            Not only will our classes make you a better actor, but they will also open up our vast community of actors and artists. There have been many instances of actors finding network opportunities in the Green Shirt Community, and we encourage you to have a look for yourself on our Facebook Page!`,
          },
          {
            title: 'How much do classes cost?',
            content: `Learning to act takes time, dedication, and great training. We can provide the training. All you need to do is bring your passion. Our classes have been proven as an accessible and affordable way to jump start your acting career. Former students have gone on to work in TV, Film, and Theater with the training that they've received from our seasoned acting instructors. Our classes have also helped countless students develop interpersonal and transferable professional skills not necessarily related to pursuing an acting career.
            <br/><br/>
            Our Meisner Program Classes usually cost $330, but you should keep your eye out for early bird specials! We also offer other Specialized Classes that can be as low as $150.
            <br/><br/>
            We also offer payment plans for acting classes, so that you can easily work a class into your budget.`,
          },
          {
            title: 'What is "The Meisner Technique?"',
            content: `Renowned actor and acting instructor Sanford Meisner developed a groundbreaking technique that demystified the craft of acting. The process that he taught to countless professional actors was built on listening, being present and learning to live truthfully under imaginary circumstances.
            <br/><br/>
            Here at Green Shirt Studio, we guide students through 5 levels of Meisner's training with our Meisner Acting Program. By completing all five levels, students learn a specific, step by step process to successfully tackle any script from stage to screen. We started teaching the Meisner technique in Chicago in 2009 and have worked with thousands of students to help them develop their craft. The Meisner technique is renowned for its specific, straightforward structure that makes it accessible to beginners while challenging experienced actors who haven't encountered it before.`,
          },
        ]}
      />
      <SectionDivider />
      <CTACard
        headerAlign={'right'}
        title={"Can't pay for classes?"}
        image={Scholarships}
        imageAltText={'placeholder image'}
        info={'Learn how we can help you pay for it.'}
        ctaText={'Learn More'}
        ctaLink={'/scholarships'}
      />
      <Subscribe
        messaging="Sign up to our newsletter to hear about upcoming events Newsletter
          Registration"
      />
    </Layout>
  );
};
export default Classes;

export const Head = () => (
  <SEO
    title={`Classes - Green Shirt Studio`}
    description={`Check out one of our acting classes or workshops! We welcome students from all backgrounds and experience levels. Mesiner Acting Program, Workshops, Private Coaching and more.`}
  />
);
