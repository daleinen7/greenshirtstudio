import React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/seo";
import parse from "html-react-parser";
import ContentStack from "../components/ContentStack";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import UpcomingEvents from "../components/UpcomingEvents";
import EventCard from "../components/EventCard";
import { graphql } from "gatsby";

import EventsImg from "../images/Events.jpg";

const Events = ({ data }) => {
  const today = new Date();

  const futureEvents = data.allWpEventbrite.nodes
    .filter((evt) => {
      console.log(evt.events.featuredImage.gatsbyImage);
      return today < new Date(evt.events.eventDate);
    })
    .map((evt) => {
      const eventDate = new Date(evt.events.eventDate).toLocaleDateString(
        "en-US",
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );
      const eventTime = new Date(evt.events.eventDate).toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          minute: "2-digit",
        }
      );
      return (
        <EventCard
          title={evt.title}
          description={parse(evt.content)}
          link={evt.eventbriteUrl}
          image={evt.events?.featuredImage?.gatsbyImage}
          date={eventDate}
          time={eventTime}
        />
      );
    });

  return (
    <Layout>
      <ImageAndContentHeader
        image={EventsImg}
        title="Shows & Events"
        content="Green Shirt Studio offers free and donation based Shows & Events. We invite you to join our artistic community and grow your creative skills!"
      />
      <UpcomingEvents />
      <ContentStack title="Upcoming Events" content={futureEvents} />
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
