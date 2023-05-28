import React from 'react';
import Layout from '../components/Layout';
import { SEO } from '../components/seo';
import parse from 'html-react-parser';
import { Link } from 'gatsby';
import ContentStack from '../components/ContentStack';
import CTA from '../components/CTA';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import UpcomingEvents from '../components/UpcomingEvents';
import EventCard from '../components/EventCard';
import Carousel from '../components/Carousel';
import { graphql } from 'gatsby';
import EventsImg from '../images/Events.jpg';
import styled from 'styled-components';

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    margin-top: -4rem;
    margin-bottom: 4rem;
    text-align: center;
  }
`;

const Events = ({ data }) => {
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

  const futureEventsObj = {};

  const futureEventsData = data.allWpEventbrite.nodes
    .filter((evt) => {
      return today < new Date(evt.events.eventDate);
    })
    .reverse();

  // for each event
  futureEventsData.forEach((evt) => {
    const eventDate = new Date(evt.events.eventDate);
    if (!futureEventsObj[eventDate.getMonth()]) {
      futureEventsObj[eventDate.getMonth()] = [];
    }

    futureEventsObj[eventDate.getMonth()].push(cardifyEvent(evt));
  });

  const pastEvents = data.allWpEventbrite.nodes
    .filter((evt) => today >= new Date(evt.events.eventDate))
    .map((evt) => cardifyEvent(evt, true));

  return (
    <Layout>
      <ImageAndContentHeader
        image={EventsImg}
        title="Shows & Events"
        content="Green Shirt Studio offers free and donation based Shows & Events. We invite you to join our artistic community and grow your creative skills!"
      />
      <UpcomingEvents />
      {Object.entries(futureEventsObj).map((month) => {
        const firstDate = new Date(month[1][0].key);
        const prettyMonth = firstDate.toLocaleString('default', {
          month: 'long',
        });

        return (
          <ContentStack
            key={month[0]}
            title={prettyMonth}
            content={month[1]
              .sort((a, b) => {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.key) - new Date(a.key);
              })
              .reverse()}
          />
        );
      })}
      <CTA
        heading="Interested in hosting your show at Green Shirt Studio?"
        buttonText="See Details and Contact Us"
        buttonLink="/hosting"
      />
      <Carousel title="Past Events" items={pastEvents} />
      <StyledLink>
        <Link to="/past-events" className="button fill center">
          All Past Events
        </Link>
      </StyledLink>
    </Layout>
  );
};
export default Events;

export const Head = () => (
  <SEO
    title={`Events - Green Shirt Studio`}
    description={`Events for Green Shirt Studio`}
  />
);

export const pageQuery = graphql`
  query Events {
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
