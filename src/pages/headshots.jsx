import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import headshotHero from '../images/headshots/headshot-hero.png';
import greencheck from '../images/greencheck.svg';
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

const StyledBookingForm = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 2rem;
`;

const Pricing = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  flex-shrink: 0;

  h3 {
    font-size: 2rem;
  }

  .pricing {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 0;
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
      font-size: 2rem;
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

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  flex-grow: 1;

  label {
    display: flex;
    flex-flow: column;
    color: var(--dark-gray);
    margin-top: 0.5rem;
    margin-bottom: 0.1563rem;
  }

  fieldset {
    border: none;
    padding: 0;
    margin-top: 0.5rem;
    margin-left: 0;

    label {
      display: block;
    }

    input {
      width: auto;
      height: auto;
    }
  }

  form input,
  textarea {
    width: 100%;
    border: 1px solid var(--dark-gray);
    border-radius: 2px;
    margin-top: 0.1563rem;
  }

  form input,
  select {
    height: 2.1875rem;
    color: var(--dark-gray);
  }

  textarea {
    height: 4.375rem;
    width: 100%;
    resize: vertical;
  }

  .other-textbox {
    margin-left: 0.5rem;
  }

  .button {
    margin-top: 20px;
  }
`;

const Headshots = () => {
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

      <StyledContent>
        <h3>Book an Upcoming Session</h3>
        <p>
          Please fill out this form and a member of our team will reach out to
          you within two business days! A standard session (1 hour makeup/1 hour
          photos) costs $400. Current and former students of our Meisner Acting
          Program get $50 off!
        </p>
      </StyledContent>

      <StyledBookingForm>
        <Pricing>
          <div className="pricing">
            <div className="pricing-table">
              <h3>Booking Includes</h3>
              <h4>In Studio 401-E</h4>
              <ul>
                <li>Resources to help you prepare</li>
                <li>
                  Professional makeup design with{' '}
                  <Link to="/syd-genco/">Syd Genco</Link>
                </li>
                <li>2 hours, 2 looks, 2 edited photos</li>
              </ul>
            </div>
          </div>
        </Pricing>
        <StyledForm>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Pronouns:
            <select>
              <option>He/him</option>
              <option>She/her</option>
              <option>They/them</option>
              <option>Other (Please specify in comment below)</option>
            </select>
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <label>
            Phone Number:
            <input type="tel" />
          </label>

          <fieldset>
            <legend>I am a:</legend>
            <label>
              <input
                type="radio"
                name="customerType"
                value="Green Shirt student"
              />
              Green Shirt student
            </label>
            <label>
              <input type="radio" name="customerType" value="Actor" />
              Actor
            </label>
            <label>
              <input type="radio" name="customerType" value="Other" />
              Other
              <input type="text" name="customerType" class="other-textbox" />
            </label>
          </fieldset>

          <fieldset>
            <legend>
              I'm available for a shoot (Please check all that apply):
            </legend>
            <label>
              <input type="checkbox" name="availability" value="On a weekday" />
              On a weekday
            </label>
            <label>
              <input type="checkbox" name="availability" value="On a weekend" />
              On a weekend
            </label>
            <label>
              <input type="checkbox" name="availability" value="I'm flexible" />
              I'm flexible
            </label>
          </fieldset>

          <fieldset>
            <legend>I'd like to schedule a shoot:</legend>
            <label>
              <input type="radio" name="schedule" value="ASAP" />
              ASAP
            </label>
            <label>
              <input
                type="radio"
                name="schedule"
                value="In the next few weeks"
              />
              In the next few weeks
            </label>
            <label>
              <input
                type="radio"
                name="schedule"
                value="In the next few months"
              />
              In the next few months
            </label>
          </fieldset>
          <label>
            Anything else you'd like us to know:
            <textarea name="additionalComments" />
          </label>
          <input type="submit" value="Submit" class="button fill" />
        </StyledForm>
      </StyledBookingForm>

      <FAQSection
        FAQs={[
          {
            title: 'Why do I need a professional headshot? ',
            content:
              "To audition for a role, you'll need a headshot. A professional headshot will help you stand out and let the person casting the project know that you're taking the audition process seriously.",
          },
          {
            title: 'When should I get my first headshot? ',
            content:
              "Getting your headshots taken can feel intimating. Especially your first time! Our team is dedicated to helping you through the process, step by step. When you think you might like to try auditioning sometime in the not too distant future, about six months or so, it's time to get your first professional headshot.",
          },
          {
            title: 'How will you help me prepare? ',
            content:
              "After you book a session, we'll send you a worksheet and instructional video to help you prepare. These tools will help you decide on a few artistic choices you need to make before you come to your shoot. Our staff is also available to answer your questions and help you feel confident to step into the studio.",
          },
          {
            title: "I'm not an actor but need a headshot. Can you help?",
            content:
              "While we specialize in actor headshot, you don't need to be an actor to book a session with us. Need a new photo for your LinkedIn profile? We can help.",
          },
          {
            title: 'Why do I need professional makeup?',
            content:
              'Syd Genco, our makeup extraordinaire, does an incredible job of bringing out your best qualities and setting your face up for maximum balance. She will make you like yourself on your best day.',
          },
        ]}
      />
    </Layout>
  );
};

export const Head = () => <SEO title={`Headshots - Green Shirt Studio`} />;

export default Headshots;
