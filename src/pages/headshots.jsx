import React, { useEffect } from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import EventCard from '../components/EventCard';
import headshotHero from '../images/headshots/headshot-hero.png';
import greencheck from '../images/greencheck.svg';
import ContentStack from '../components/ContentStack';
import FAQSection from '../components/FAQSection';
import proxy from '../images/headshots/Proxy.png';
import proxy1 from '../images/headshots/Proxy1.png';
import proxy2 from '../images/headshots/Proxy2.png';
import proxy3 from '../images/headshots/Proxy3.png';
import proxy4 from '../images/headshots/Proxy4.png';
import proxy5 from '../images/headshots/Proxy5.png';
import proxy6 from '../images/headshots/Proxy6.png';
import proxy7 from '../images/headshots/Proxy7.png';
import proxy8 from '../images/headshots/Proxy8.png';
import proxy9 from '../images/headshots/Proxy9.png';
import PhotoGallery from '../components/PhotoGallery';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 0 2rem;
  @media (max-width: 640px) {
    padding: 0 1rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 40rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    line-height: 100%;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 900;
    display: inline;
  }

  p {
    font-size: 1.25rem;
    line-height: 150%;
    text-align: left;
    margin-bottom: 2rem;
  }

  ol {
    padding: 0;
    list-style: none;
    counter-reset: my-awesome-counter;
  }
  ol li {
    counter-increment: my-awesome-counter;
  }
  ol li::before {
    content: counter(my-awesome-counter) '. ';
    font-weight: 900;
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`;

const Pricing = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.625rem;
  margin-bottom: 4.625rem;

  h3 {
    font-size: 2rem;
  }

  .pricing {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 3rem 0;
  }

  .pricing-table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    border: 2px solid #efefef;

    h3 {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 3rem;
    }

    h4 {
      font-weight: 900;
      font-size: 1.25rem;
    }

    .price {
      font-size: 1rem;
    }

    .cost {
      font-weight: 900;
      font-size: 3rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      list-style-type: none; /* Remove default bullet point */
      padding-left: 20px; /* Add some padding for the bullet point */

      /* Style the list items */
      li {
        position: relative; /* Position relative for absolute positioning of custom bullet */
        margin-bottom: 10px; /* Adjust margin as needed */
      }

      /* Style the custom bullet point */
      li:before {
        content: '';
        position: absolute;
        left: -28px; /* Adjust the distance of the bullet point from the left */
        top: -3px; /* Adjust the vertical alignment of the bullet point */
        width: 20px; /* Adjust size of the bullet point */
        height: 30px; /* Adjust size of the bullet point */
        background-image: url(${greencheck}); /* SVG URL */
      }
    }
  }

  @media (max-width: 550px) {
    .pricing-table {
      padding: 1rem;
      height: 26rem;
      button {
        font-size: 1rem;
      }
    }
  }
`;

const Headshots = () => {
  const [headshotSessions, setHeadshotSessions] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          '/.netlify/functions/get-headshot-sessions'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server');
        }
        const data = await response.json();
        setHeadshotSessions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const sessions =
    headshotSessions &&
    headshotSessions
      .filter((session) => session.bookingStatus === 'Open')
      .sort((a, b) => {
        const monthMap = {
          January: 0,
          February: 1,
          March: 2,
          April: 3,
          May: 4,
          June: 5,
          July: 6,
          August: 7,
          September: 8,
          October: 9,
          November: 10,
          December: 11,
        };
        const dateA = new Date(
          parseInt(a.year),
          monthMap[a.month],
          parseInt(a.dayOfMonth)
        );
        const dateB = new Date(
          parseInt(b.year),
          monthMap[b.month],
          parseInt(b.dayOfMonth)
        );
        return dateA - dateB;
      })
      .map((session) => {
        return (
          <EventCard
            title={`${session.dayOfWeek}, ${session.month} ${session.dayOfMonth}, ${session.year}`}
            description={session.description}
            image={session.image}
            altText={session.name}
            link={`/headshot/${session.id}`}
            date={session.time}
            time={session.name}
            price={session.price}
            headshot
          />
        );
      });

  const examples = [
    {
      image: proxy,
      caption: 'Photographer: Collin Quinn Rice',
    },
    {
      image: proxy1,
      caption: 'Photographer: Collin Quinn Rice',
    },
    {
      image: proxy2,
      caption: 'Photographer: Collin Quinn Rice',
    },
    {
      image: proxy3,
      caption: 'Photographer: Collin Quinn Rice',
    },
    {
      image: proxy4,
      caption: 'Photographer: Collin Quinn Rice',
    },
    {
      image: proxy5,
      caption: 'Photographer: Kaleb Jackson',
    },
    {
      image: proxy6,
      caption: 'Photographer: Kaleb Jackson',
    },
    {
      image: proxy7,
      caption: 'Photographer: Kaleb Jackson',
    },
    {
      image: proxy8,
      caption: 'Photographer: Kaleb Jackson',
    },
    {
      image: proxy9,
      caption: 'Photographer: Kaleb Jackson',
    },
  ];

  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={headshotHero}
        title="Actor Headshots"
        content="First time getting your headshot taken? Need to book a shoot to update your look? We can help!"
      />

      <PhotoGallery imgCap={examples} />

      <StyledContent>
        <div className="container">
          <h3>Our Process</h3>
          <ol>
            <li>
              <h4>The Preparation</h4>
              <p>Resources to help you prepare and Zoom consult included</p>
            </li>
            <li>
              <h4>The Shoot</h4>
              <p>
                Takes 2 hours. First hour for makeup and second for your photos
              </p>
            </li>
            <li>
              <h4>After Your Session</h4>
              <p>
                Full gallery delivered in less than 2 weeks. You choose 2 photos
                for edits
              </p>
            </li>
          </ol>
          <p>Our goal is to capture you in your truest, most confident form.</p>
        </div>
      </StyledContent>

      <Pricing>
        <div className="pricing">
          <div className="pricing-table">
            <h3>Booking Includes</h3>
            <h4>In Studio 401-E</h4>

            <ul>
              <li>Resources to help you prepare</li>
              <li>Professional makeup design</li>
              <li>2 hours, 2 looks, 2 edited photos</li>
            </ul>
          </div>
        </div>
      </Pricing>

      {sessions.length > 0 ? (
        <>
          <StyledContent>
            <h3>Book an Upcoming Session Below</h3>
            <p>
              Find a date and time below that work for you. We can't wait to
              help you shine in front of the camera!
            </p>
          </StyledContent>

          {sessions ? <ContentStack content={sessions} /> : <p>Loading...</p>}
        </>
      ) : (
        <StyledContent>
          <h3>Book an Upcoming Session</h3>
          <p>
            Our upcoming headshot sessions are currently full, but don't worry!
            New sessions are added regularly. In the meantime, reach out to us
            to express your interest in booking a headshot session. We'll notify
            you as soon as new dates become available. Your career deserves to
            stand out, and we can't wait to work with you soon!
          </p>
          <a
            href="mailto:info@greenshirtstudio.com?subject=Headshots%20Inquiry"
            className="button fill"
          >
            Contact Us
          </a>
        </StyledContent>
      )}

      <FAQSection
        FAQs={[
          {
            title: 'Why do I need a professional headshot? ',
            content:
              'To audition for a role, you’ll need a headshot. A professional headshot will help you stand out and let the person casting the project know that you’re taking the audition process seriously. ',
          },
          {
            title: 'When should I get my first headshot? ',
            content:
              'Getting your headshots taken can feel intimating. Especially your first time! Our team is dedicated to helping you through the process, step by step. When you think you might like to try auditioning sometime in the not too distant future, about six months or so, it’s time to get your first professional headshot. ',
          },
          {
            title: 'How will you help me prepare? ',
            content:
              'After you book a session, we’ll send you a worksheet and instructional video to help you prepare. These tools will help you decide on a few artistic choices you need to make before you come to your shoot. Our staff is also available to answer your questions and help you feel confident to step into the studio. ',
          },
          {
            title: 'I’m not an actor but need a headshot. Can you help? ',
            content:
              'While we specialize in actor headshot, you don’t need to be an actor to book a session with us. Need a new photo for your LinkedIn profile? We can help. ',
          },
        ]}
      />
    </Layout>
  );
};

export const Head = () => <SEO title={`Headshots - Green Shirt Studio`} />;

export default Headshots;
