import React, { useLayoutEffect, useRef, useState } from "react";
import { Script } from "gatsby";
import { SEO } from "../components/seo";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import hostingImg from "../images/hosting.mp4";
import Layout from "../components/Layout";
import Accordion from "../components/Accordion";

import styled from "styled-components";

const StyledHosting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.6875rem auto;
  padding: 0 4rem;

  .main-content {
    display: flex;
    max-width: 1440px;
    width: 100%;
  }
  .left-column {
    width: 62%;
  }

  .right-column {
    width: 38%;
  }

  .left-column {
    padding-right: 1rem;
  }

  .right-column {
    padding-left: 1rem;
  }
  @media (max-width: 970px) {
    padding: 0;
    margin: 0 auto;
    .main-content {
      flex-direction: column;
      padding: 0 2rem;
      .left-column,
      .right-column {
        width: 100%;
        padding: 0;
      }
      .left-column {
        margin-bottom: 2rem;
      }
      .right-column {
        margin: 2rem auto;
        h3 {
          margin-bottom: 0.5rem;
        }
        section {
          border: rgba(0, 0, 0, 0.1) solid 2px;
          border-radius: 2px;
          padding: 1rem;
          margin: 1rem auto;
        }
        section:nth-of-type(1) {
          border: #f8bcbe solid 2px;
        }

        dt {
          font-weight: bold;
          margin-top: 1rem;
        }
        ul {
          list-style: none;
          padding: 0;
        }
      }
    }
  }
`;

const Hosting = () => {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  const TheBasics = (
    <ul>
      <li>
        The Studio 303-B pop-up theater space is located on the 3rd floor of
        4001 N Ravenswood Ave.
      </li>

      <li>
        The space is fully accessible, with a passenger and freight elevator to
        the third floor.
      </li>
      <li>
        There is free parking right outside the building on Ravenswood Ave. 4001
        N Ravenswood is steps from the Irving Park Brown Line and Bus.
      </li>
    </ul>
  );
  const Scheduling = (
    <p>
      Studio 303-B is available for performances on Friday, Saturday, and Sunday
      evenings. We offer both primetime and late night slots.
    </p>
  );
  const WhoShouldSubmit = (
    <>
      <p>
        Do you have an idea for a live show but don't yet have a home? Green
        Shirt Studio wants to give you a space to create and we're excited to
        host a variety of performance styles.
      </p>

      <p>
        In the past we've hosted solo shows, readings, stand-up comedy, live
        music, short play festivals, full length plays, and variety shows. We
        want to support a diverse group of performers so we encourage people
        from all disciplines and levels of experience to submit their interest.
        Whether it's your first production or you've produced 10,000 shows, we'd
        love to hear from you.
      </p>
    </>
  );
  const SpaceSpecs = (
    <p>
      <ul>
        <li>
          Stage - three 4x8 platforms create a stage 12 feet wide and 8 feet
          long
        </li>
        <li>Audience - 30 chairs are available for your audience</li>
        <li>
          Lighting - Philips Hue lights create a theatrical environment with
          millions of colors to choose from
        </li>
        <li>
          Sound - Fender Passport Venue Portable Amplification System with 7
          channels
        </li>
      </ul>
    </p>
  );
  const Tickets = (
    <p>
      Green Shirt Studio will facilitate ticketing through our eventbrite
      account. Your eventbrite ticket link will be accessible through the Shows
      & Events page on the Green Shirt Studio website. Tickets will go on-sale
      at least 2 weeks before from your event start date.
    </p>
  );
  const Finances = (
    <p>
      All ticket donations will be split between Green Shirt Studio and the
      producer 50/50. There is no rental fee or any other fees associated with
      producing a show at Green Shirt Studio. Producers will be paid out within
      30 days of their show's closing.
    </p>
  );
  const Promotion = (
    <>
      <p>
        Your show will be promoted to our community of students, supporters, and
        fellow artists
      </p>
      <ul>
        <li>
          It will be: Featured on the Events & Shows page of the Green Shirt
          Studio website
        </li>

        <li>Promoted through Green Shirt Studio's social media accounts</li>

        <li>Featured in the Green Shirt Studio newsletter</li>
      </ul>
    </>
  );

  return (
    <Layout>
      <StyledHosting>
        <ImageAndContentHeader
          title="Green Shirt Performance Space"
          content="Green Shirt Studio invites you to host your show in our 30-seat pop-up theater. There is no rental fee to produce a show at Green Shirt Studio and all ticket donations are split 50/50 with the producer(s)."
          video={hostingImg}
        />
        <div className="main-content">
          <div className="left-column">
            <Accordion
              title="The Basics"
              children={TheBasics}
              defaultOpen={true}
              h3={true}
            />
            <Accordion
              title="Scheduling"
              children={Scheduling}
              defaultOpen={true}
              h3={true}
            />
            <Accordion
              title="Who Should Submit"
              children={WhoShouldSubmit}
              defaultOpen={true}
              h3={true}
            />
            <Accordion
              title="Space Specs"
              children={SpaceSpecs}
              defaultOpen={true}
              h3={true}
            />
            <Accordion
              title="Tickets"
              children={Tickets}
              defaultOpen={true}
              h3={true}
            />
            <Accordion
              title="Finances"
              children={Finances}
              defaultOpen={true}
              h3={true}
            />
            <Accordion
              title="Promotion"
              children={Promotion}
              defaultOpen={true}
              h3={true}
            />
          </div>

          <div className="right-column" ref={ref}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc_HqD9nJMovkBI8YLR9UTX8Q1sJ2tnMPOPPvt6O206s9M_Ag/viewform?embedded=true"
              width={width}
              height="1732"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </StyledHosting>
    </Layout>
  );
};
export default Hosting;

export const Head = ({ data }) => (
  <SEO title={`Hosting an Event - Green Shirt Studio`} />
);
