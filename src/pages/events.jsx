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

  console.log('EVENTS: ', data.allWpEventbrite.nodes);

  let futureEventsData = data.allWpEventbrite.nodes
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
        content="Join our vibrant artistic community, by participating in or attending our shows and events. We offer a diverse range of offerings, including free and donation-based gatherings, along with opportunities to host your very own show."
      />
      {futureEventsData.length > 0 ? (
        <>
          <UpcomingEvents />
          {Object.entries(futureEventsObj).map((month) => {
            const firstDate = new Date(month[1][0].key);
            const prettyMonth = firstDate.toLocaleString('default', {
              month: 'long',
            });
            const prettyYear = firstDate.toLocaleString('default', {
              year: 'numeric',
            });
            return (
              <ContentStack
                key={month[0]}
                title={prettyMonth + ' ' + prettyYear}
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
        </>
      ) : (
        <CTAContentCard
          headerAlign={'left'}
          title={'Check us out on Eventbrite'}
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
      <Content
        heading={'Past Events'}
        paragraph={'See what our community has been up to.'}
      />
      <Carousel items={pastEvents} />
      <StyledLink>
        <Link to="/past-events" className="button fill center">
          View All Past Events
        </Link>
      </StyledLink>
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
