import React, { useState } from 'react';
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
import PhotoGallery from '../components/PhotoGallery';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  width: 100%;

  padding: 0 2rem;
  @media (max-width: 640px) {
    padding: 0 1rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
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

    &:disabled {
      color: gray;
      pointer-events: none;
      background-color: lightgray;
    }
  }

  .required {
    color: red;
  }
`;

const defaultFormState = {
  name: '',
  pronouns: '',
  email: '',
  phone: '',
  customerType: '',
  otherCustomerType: '',
  availability: [],
  schedule: '',
  additionalComment: '',
};

const Headshots = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isFormDisabled =
    isLoading ||
    !formData.name ||
    !formData.pronouns ||
    !formData.email ||
    !formData.customerType ||
    !formData.availability.length ||
    !formData.schedule;

  const handleFormChange = (evt) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [evt.target.name]: evt.target.value };
    });
  };

  const handleCustomerType = (evt) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [evt.target.name]: evt.target.value,
        otherCustomerType:
          evt.target.value == 'Other' ? prevFormData.otherCustomerType : '',
      };
    });
  };

  const handleCheckbox = (evt) => {
    setFormData((prevFormData) => {
      const name = evt.target.name;
      const val = evt.target.value;
      const arr = [...prevFormData[name]];
      const val_idx = arr.findIndex((ele) => ele == val);
      if (val_idx < 0) {
        arr.push(val);
      } else {
        arr.splice(val_idx, 1);
      }
      return {
        ...prevFormData,
        [name]: arr,
      };
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (isFormDisabled) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        '/.netlify/functions/handle-headshots-airtable',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      ).then((res) => res.json());
      if (response.error) throw response.error;
      setFormSubmitted(true);
      setFormData(defaultFormState);
    } catch (err) {
      setFormSubmitted('error');
    }
    setIsLoading(false);
  };

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
              <p>Zoom consult to help you prepare</p>
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
        <h3>How much does it cost?</h3>
        <p>
          A standard session (1 hour makeup/1 hour of photos) costs $400.
          Current and former Green Shirt students get $50 off!
        </p>
      </StyledContent>

      <StyledBookingForm>
        <Pricing>
          <div className="pricing">
            <div className="pricing-table">
              <h3>Booking Includes</h3>
              <h4>In Studio 401-E</h4>
              <ul>
                <li>A meeting to help you prepare</li>
                <li>
                  Professional makeup design with{' '}
                  <Link to="/syd-genco/">Syd Genco</Link>
                </li>
                <li>2 hours, 2 looks, 2 edited photos</li>
              </ul>
            </div>
          </div>
        </Pricing>
        <StyledForm onSubmit={handleSubmit}>
          <label>
            <span>
              Name <span className="required">*</span>
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            <span>
              Pronouns <span className="required">*</span>
            </span>
            <select
              name="pronouns"
              onChange={handleFormChange}
              value={formData.pronouns}
            >
              <option style={{ display: 'none' }}>Select One</option>
              <option>He/him</option>
              <option>She/her</option>
              <option>They/them</option>
              <option>Other (Please specify in comment below)</option>
            </select>
          </label>
          <label>
            <span>
              Email <span className="required">*</span>
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
            />
          </label>
          <fieldset>
            <legend>
              I am a <span className="required">*</span>
            </legend>
            <label>
              <input
                type="radio"
                name="customerType"
                value="Green Shirt student"
                checked={formData.customerType == 'Green Shirt student'}
                onChange={handleCustomerType}
              />
              Green Shirt student
            </label>
            <label>
              <input
                type="radio"
                name="customerType"
                value="Actor"
                checked={formData.customerType == 'Actor'}
                onChange={handleCustomerType}
              />
              Actor
            </label>
            <label>
              <input
                type="radio"
                name="customerType"
                value="Other"
                checked={formData.customerType == 'Other'}
                onChange={handleCustomerType}
              />
              Other
              {formData.customerType == 'Other' && (
                <input
                  type="text"
                  name="otherCustomerType"
                  value={formData.otherCustomerType}
                  onChange={handleFormChange}
                  className="other-textbox"
                />
              )}
            </label>
          </fieldset>

          <fieldset>
            <legend>
              I'm available for a shoot (Please check all that apply){' '}
              <span className="required">*</span>
            </legend>
            <label>
              <input
                type="checkbox"
                name="availability"
                value="On a weekday"
                checked={formData.availability.includes('On a weekday')}
                onChange={handleCheckbox}
              />
              On a weekday
            </label>
            <label>
              <input
                type="checkbox"
                name="availability"
                value="On a weekend"
                checked={formData.availability.includes('On a weekend')}
                onChange={handleCheckbox}
              />
              On a weekend
            </label>
            <label>
              <input
                type="checkbox"
                name="availability"
                value="I'm flexible"
                checked={formData.availability.includes("I'm flexible")}
                onChange={handleCheckbox}
              />
              I'm flexible
            </label>
          </fieldset>

          <fieldset>
            <legend>
              I'd like to schedule a shoot <span className="required">*</span>
            </legend>
            <label>
              <input
                type="radio"
                name="schedule"
                value="ASAP"
                checked={formData.schedule == 'ASAP'}
                onChange={handleFormChange}
              />
              ASAP
            </label>
            <label>
              <input
                type="radio"
                name="schedule"
                value="In the next few weeks"
                checked={formData.schedule == 'In the next few weeks'}
                onChange={handleFormChange}
              />
              In the next few weeks
            </label>
            <label>
              <input
                type="radio"
                name="schedule"
                value="In the next few months"
                checked={formData.schedule == 'In the next few months'}
                onChange={handleFormChange}
              />
              In the next few months
            </label>
          </fieldset>
          <label>
            Anything else you'd like us to know
            <textarea
              name="additionalComment"
              onChange={handleFormChange}
              value={formData.additionalComment}
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className="button fill"
            disabled={isFormDisabled}
          />
          {formSubmitted && (
            <p>
              {formSubmitted == 'error' ? (
                <>
                  We were unable to receive your form. Please try again or reach
                  out to us at info@greenshirtstudio.com
                </>
              ) : (
                <>
                  We have received your request; we will get back to you
                  shortly.
                </>
              )}
            </p>
          )}
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
