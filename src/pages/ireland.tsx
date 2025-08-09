import React from 'react';
import { StyledClassPage } from '../utils/utils';
import { StyledDescription } from '../components/classComponents/Description';
import Layout from '../components/Layout';
import Accordion from '../components/Accordion';
import { StyledClassHeader } from '../components/classComponents/ClassHeader';
import { SEO } from '../components/seo';
import irelandVid from '../images/ireland-vid.mp4';

const EnsembleIntensive = () => {
  const class_info = {
    title: 'Green Shirt Goes to Ireland',
    dates: ['May 21 - 26, 2026'],
    cost: 2950,
    location: '4001 N Ravenswood Ave Unit 303-B Chicago, IL 60657',
  };

  return (
    <Layout>
      <StyledClassPage>
        <StyledClassHeader>
          <video src={irelandVid} controls autoPlay loop muted playsInline />
          <div className="info">
            <h2>{class_info.title}</h2>
            <p>May 21 - 28, 2026</p>
            <p>A week of theater, nature, and music on the Emerald Isle</p>
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
                      'https://forms.gle/bsh87cVnqSKb2MaK9',
                      '_blank',
                      'noopener,noreferrer'
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  Apply Now
                </button>
              </li>
            </ul>
          </div>
        </StyledClassHeader>
        <div className="main-content">
          <StyledDescription>
            <p>
              On our <b>study abroad trip for adults</b>, you'll have the
              opportunity to experience a new theatrical perspective that
              inspires artistic growth - plus an incredible vacation in a
              beautiful place.
            </p>
            <br />
            <h2>What's Included</h2>
            <br />
            <Accordion title="Part 1: Dublin (2 Nights)" defaultOpen={true} h3>
              <ul>
                <li>
                  Lodging in city center: Double occupancy - single occupancy
                  available for additional fee
                </li>
                <li>2 breakfasts, 1 group dinner</li>
                <li>Two theatre performances</li>
                <li>Guinness Storehouse tour & tasting</li>
                <li>Irish traditional music experience</li>
                <li>Free time for exploration and rest</li>
              </ul>
            </Accordion>
            <Accordion
              title="Part 2: Wicklow/Wexford Countryside (4 Nights)"
              defaultOpen
              h3
            >
              <ul>
                <li>
                  Lodging in the beautiful countryside: Double occupancy -
                  single occupancy available for additional fee
                </li>
                <li>4 breakfasts, 2 packed lunches, 1 dinner</li>
                <li>3 theatre workshops with Irish director Sally Stevens</li>
                <li>Private bus excursions to hikes and local sights</li>
                <li>Optional morning yoga or nature walks</li>
                <li>Evening play reading & closing group event</li>
              </ul>
            </Accordion>
            <h2>Important Details</h2>
            <br />
            <Accordion title="What's Not Included" defaultOpen h3>
              <ul>
                <li>
                  Flights are not included - early booking of flights is
                  recommended
                </li>
                <li>Travel Insurance is not included and highly recommended</li>
                <li>All participants must have a valid passport</li>
              </ul>
            </Accordion>
            <Accordion title="Leading Up To The Trip" defaultOpen h3>
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
            <Accordion title="Payment Plans" defaultOpen h3>
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

export default EnsembleIntensive;

export const Head = () => (
  <SEO title="Ensemble Intensive (Afternoon) - Green Shirt Studio" />
);
