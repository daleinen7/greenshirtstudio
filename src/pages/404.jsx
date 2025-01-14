import * as React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import CTACard from '../components/CTAContentCard';
import Carousel from '../components/Carousel';
import ClassCard from '../components/ClassCard';
import special from '../images/special.png';
import EventCard from '../components/EventCard';
import parse from 'html-react-parser';
import { graphql } from 'gatsby';

const FourOhFour = ({ data }) => {
  const classes = data.allContentfulClass.nodes
    .sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    })
    .map((actingClass) => (
      <ClassCard
        title={actingClass.title}
        slug={actingClass.slug}
        image={actingClass.coverImage.gatsbyImageData}
        days={actingClass.day}
        program={actingClass.type}
        price={actingClass.cost}
      />
    ));

  const today = new Date();

  const cardifyEvent = (evt, small) => {
    const eventDate = new Date(evt.events.eventDate).toLocaleDateString(
      'en-US',
      {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    );
    const eventTime = new Date(evt.events.eventDate).toLocaleTimeString(
      'en-US',
      {
        hour: 'numeric',
        minute: '2-digit',
      }
    );
    return (
      <EventCard
        title={evt.title}
        description={parse(evt.content)}
        link={evt.events.eventbriteUrl}
        image={evt.events?.featuredImage?.gatsbyImage}
        date={eventDate}
        time={eventTime}
        small={small}
        key={evt.events.eventDate}
      />
    );
  };

  const events = data.allWpEventbrite.nodes
    .filter((evt) => today <= new Date(evt.events.eventDate))
    .map((evt) => cardifyEvent(evt, true));

  return (
    <Layout>
      <CTACard
        headerAlign={'left'}
        title={'You Are Enough'}
        image={special}
        imageAltText={'Students of Green Shirt Studio'}
        info={
          "It looks like the page you are seeking doesn't exist. If you need assistance, reach out at info@greenshirtstudio.com.  While you're here, check our upcoming classes, workshops, and events."
        }
        ctaText={'Green Shirt Homepage'}
        ctaLink={'/'}
      />
      <Carousel
        title="Upcoming Classes & Workshops"
        items={classes}
        link="classes"
        linkDisplay="All Classes & Workshops"
      />
      <Carousel
        title="Upcoming Events"
        items={events}
        link="events"
        linkDisplay="All Upcoming Events"
      />
    </Layout>
  );
};
export default FourOhFour;

export const Head = () => <SEO title={`Page Not Found - Green Shirt Studio`} />;

export const pageQuery = graphql`
  query FourOhFourQuery {
    allContentfulClass {
      nodes {
        contentful_id
        title
        type
        cost
        day
        slug
        coverImage {
          gatsbyImageData(width: 304, height: 212, layout: FIXED)
        }
      }
    }
    allWpEventbrite {
      nodes {
        title
        content
        events {
          featuredImage {
            gatsbyImage(height: 290)
          }
          eventDate
          eventbriteUrl
        }
      }
    }
  }
`;
