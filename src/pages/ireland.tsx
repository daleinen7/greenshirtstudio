import React from 'react';
import { StyledClassPage } from '../utils/utils';
import { StyledDescription } from '../components/classComponents/Description';
import Layout from '../components/Layout';
import Accordion from '../components/Accordion';
import { StyledClassHeader } from '../components/classComponents/ClassHeader';
import { SEO } from '../components/seo';
import irelandVid from '../images/ireland-vid.mp4';

const IrelandRetreat = () => {
  const class_info = {
    title: 'Ireland Retreat',
    cost: 2950,
  };

  return (
    <Layout>
      <StyledClassPage>
        <StyledClassHeader>
          <video src={irelandVid} controls autoPlay loop muted playsInline />
          <div className="info">
            <h2>{class_info.title}</h2>
            <p>May 21 - 28, 2026</p>
            <p>A week of theater, music, and nature</p>
            <div className="price">
              ${class_info.cost}
              <br />
              <p>(payment plans available)</p>
            </div>
            <ul className="pricing-buttons">
              <li>
                <button
                  className="register"
                  onClick={() => {
                    const newWindow = window.open(
                      'https://forms.gle/3J4dgkPzB4zUphBJ6',
                      '_blank',
                      'noopener,noreferrer'
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </StyledClassHeader>
        <div className="main-content">
          <StyledDescription>
            <p>
              Never studied abroad, or wishing you could again? Join us for our
              Ireland Retreat! You'll have the opportunity to experience a new
              theatrical perspective that inspires artistic growth - plus an
              incredible vacation in a beautiful place with the Green Shirt
              Studio community. See below for full trip details, and please
              reach out to{' '}
              <a href="mailto:info@greenshirtstudio.com">
                info@greenshirtstudio.com
              </a>{' '}
              with any questions.
            </p>
            <br />
            <h2>What's Included</h2>
            <br />
            <Accordion title="Dublin (2 Nights)" h3>
              <ul>
                <li>
                  4-star hotel lodging in city center: Double occupancy (single
                  occupancy available for additional fee)
                </li>
                <li>2 breakfasts</li>
                <li>Airport shuttle into Dublin</li>
                <li>Tickets to 2 plays</li>
                <li>Guinness Storehouse experience</li>
                <li>Optional group historical activity</li>
                <li>Free time to explore the city</li>
              </ul>
            </Accordion>
            <Accordion title="Wexford (4 Nights):" h3>
              <ul>
                <li>
                  4-star lodging in beautiful county Wexford: Double occupancy
                  (single occupancy available for additional fee)
                </li>
                <li>4 breakfasts, 2 lunches, 2 dinners</li>
                <li>3 Irish theater workshops with director Sally Stevens</li>
                <li>Private bus transport</li>
                <li>Optional yoga classes/nature walks</li>
                <li>Additional specialty workshop</li>
                <li>Community event with local artists</li>
                <li>
                  Sightseeing excursions to historic locations including
                  Glendalough Monastery and Ferns Castle
                </li>
              </ul>
            </Accordion>
            <h2>Important Details</h2>
            <br />
            <Accordion title="What's Not Included" h3>
              <ul>
                <li>
                  Flights are not included - early booking of flights is
                  recommended
                </li>
                <li>Travel Insurance is not included and highly recommended</li>
                <li>All participants must have a valid passport</li>
              </ul>
            </Accordion>
            <Accordion title="Leading Up To The Trip" h3>
              <ul>
                <li>
                  Green Shirt Studio will host a class & mixer in Chicago to
                  help prepare for the work we’ll be doing in Ireland
                </li>
                <li>
                  Green Shirt will help you prepare the scenes from Irish plays
                  ahead of the workshops, so you feel confident and ready to
                  dive in
                </li>
                <li>
                  All experience levels are welcome, but we recommend students
                  take Meisner Levels 1 & 2 at Green Shirt Studio (or
                  equivalent) prior to the trip
                </li>
              </ul>
            </Accordion>
            <Accordion title="Payment Plans" h3>
              <ul>
                <li>
                  Two payment plans are available: non-refundable $500 deposit
                  with 3 payments and non-refundable $500 deposit with 4
                  payments
                </li>
                <li>Payments are made once a month</li>
                <li>All payments are due in full by February 21, 2026</li>
              </ul>
            </Accordion>
          </StyledDescription>
        </div>
      </StyledClassPage>
    </Layout>
  );
};

export default IrelandRetreat;

export const Head = () => <SEO title="Ireland Retreat - Green Shirt Studio" />;
