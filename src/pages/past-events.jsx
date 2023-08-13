import React from 'react';
import Layout from '../components/Layout';
import HeadingEffect from '../components/HeadingEffect';
import { SEO } from '../components/seo';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import ContentStack from '../components/ContentStack';
import EventCard from '../components/EventCard';
import LightbulbReel from '../images/lightbulbreel.mp4';
import CTAContentCard from '../components/CTAContentCard';
import styled from 'styled-components';

const StyledEventPage = styled.div``;

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 3rem;
`;

const EventPage = ({ data }) => {
  console.log('DATA: ', data);

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

  // Function to organize events by year in reverse chronological order
  function organizeEventsByYear(eventsArray) {
    const eventsByYear = {};

    eventsArray.forEach((event) => {
      const year = new Date(event.events.eventDate).getFullYear();
      if (!eventsByYear[year]) {
        eventsByYear[year] = [];
      }
      eventsByYear[year].push(event);
    });

    // Sort the years in reverse chronological order
    const sortedYears = Object.keys(eventsByYear).sort((a, b) => b - a);

    // Sort events within each year in chronological order
    sortedYears.forEach((year) => {
      eventsByYear[year].sort((b, a) => {
        const dateA = new Date(a.events.eventDate);
        const dateB = new Date(b.events.eventDate);
        return dateA - dateB;
      });
    });

    return eventsByYear;
  }

  // Usage
  const organizedEvents = organizeEventsByYear(data.allWpEventbrite.nodes);

  return (
    <Layout>
      <StyledEventPage>
        <StyledHero>
          <HeadingEffect text="Past Events" />
        </StyledHero>
      </StyledEventPage>

      {Object.entries(organizedEvents)
        .reverse()
        .map(([year, events]) => {
          return (
            <>
              <ContentStack
                key={year}
                title={year}
                content={events.map((evt) => {
                  return cardifyEvent(evt, true);
                })}
              />
              {year === new Date().getFullYear().toString() && (
                <CTAContentCard
                  headerAlign={'right'}
                  title={'Host your show at Green Shirt Studio'}
                  video={LightbulbReel}
                  imageAltText={
                    'Have a cool idea for a show and need a space? Access our artistic community....'
                  }
                  info={
                    'Click the link to view all of our upcoming events and reserve your tickets on Eventbrite.'
                  }
                  ctaText={'Learn More'}
                  ctaLink={'/hosting'}
                />
              )}
            </>
          );
        })}
    </Layout>
  );
};
export default EventPage;

export const Head = () => (
  <SEO
    title={`Past Events - Green Shirt Studio`}
    description={`Past Events of Green Shirt Studio`}
  />
);

export const pageQuery = graphql`
  query PastEvents {
    allWpEventbrite {
      nodes {
        title
        content
        events {
          featuredImage {
            gatsbyImage(width: 416, height: 290)
          }
          eventDate
          eventbriteUrl
        }
      }
    }
  }
`;
