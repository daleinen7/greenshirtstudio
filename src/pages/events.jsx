import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import ContentStack from '../components/ContentStack';
import Content from '../components/Content';
import CTAContentCard from '../components/CTAContentCard';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import UpcomingEvents from '../components/UpcomingEvents';
import EventCard from '../components/EventCard';
import Carousel from '../components/Carousel';
import Subscribe from '../components/Subscribe';
import EventsImg from '../images/eventshero.png';
import CurtainCall from '../images/curtaincall.png';
import LightbulbReel from '../images/lightbulbreel.mp4';
import styled from 'styled-components';
import _ from 'lodash';

const StyledUpcomingEvents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: 4.75rem;

  h3 {
    font-size: 2rem;
  }

  p {
    text-align: center;
    line-height: 1.875rem;
  }

  a {
    margin-top: 2rem;
  }

  @media (max-width: 500px) {
    p {
      line-height: 1.5rem;
    }
  }
`;

const Events = ({ data }) => {
  const cardifyEvent = (event, small) => {
    const eventDate = new Date(event.datetime).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const eventTime = new Date(event.datetime).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
    return (
      <EventCard
        title={event.name}
        description={event.description.description}
        link={event.link}
        image={event.coverImage.gatsbyImageData}
        date={eventDate}
        time={eventTime}
      />
    );
  };

  const futureEventGrouped = _.groupBy(
    data.allContentfulEvent.nodes.filter(
      (event) => new Date() < new Date(event.datetime)
    ),
    (event) => event.datetime.slice(0, 7)
  );

  return (
    <Layout>
      <ImageAndContentHeader
        image={EventsImg}
        title="Shows & Events"
        content="Join our vibrant artistic community, by participating in or attending our shows and events. We offer a diverse range of offerings, including free and donation-based gatherings, along with opportunities to host your very own show."
      />
      {Object.keys(futureEventGrouped).length > 0 ? (
        <>
          <StyledUpcomingEvents>
            <h3>Upcoming Events</h3>
            <p>
              Select an event to learn more details and reserve your tickets.
            </p>
          </StyledUpcomingEvents>
          {Object.entries(futureEventGrouped)
            .sort(
              (a, b) =>
                new Date(a[0]).getUTCMonth() - new Date(b[0]).getUTCMonth()
            )
            .map(([datetime, groupedEvents]) => {
              const [year, month] = datetime.split('-');
              const monthSection = new Date(
                year,
                month - 1,
                1
              ).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              });
              return (
                <ContentStack
                  key={monthSection}
                  title={monthSection}
                  content={groupedEvents
                    .reverse()
                    .map((event) => cardifyEvent(event))}
                />
              );
            })}
        </>
      ) : (
        <CTAContentCard
          headerAlign={'left'}
          title={'Reserve your tickets on Eventbrite'}
          image={CurtainCall}
          imageAltText={'Audience attending Green Shirt Studio Event'}
          info={
            'Click the link to view all of our upcoming events and reserve your tickets on Eventbrite.'
          }
          ctaText={'Get Tickets'}
          ctaLink={
            'https://www.eventbrite.com/cc/shows-events-at-green-shirt-studio-1248579'
          }
        />
      )}
      <CTAContentCard
        headerAlign={'right'}
        title={'Host your show at Green Shirt Studio'}
        video={LightbulbReel}
        imageAltText={
          'Have a cool idea for a show and need a space? Access our artistic community....'
        }
        info={'Have a cool idea for a show and need a space? We can help.'}
        ctaText={'Learn More'}
        ctaLink={'/hosting'}
      />
      <Subscribe
        buttonText="Subscribe"
        messaging="Sign up to our newsletter to hear about upcoming events"
      />
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

export const eventsQuery = graphql`
  query eventsQuery {
    allContentfulEvent(sort: { datetime: DESC }) {
      nodes {
        name
        link
        datetime
        coverImage {
          gatsbyImageData
        }
        description {
          description
        }
      }
    }
  }
`;
