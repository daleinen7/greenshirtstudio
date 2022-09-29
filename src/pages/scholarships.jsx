import React from "react";
import Layout from "../components/Layout";
import SectionDivider from "../components/SectionDivider";
import TextContent from "../components/TextContent";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import scholarshipsHome from "../images/scholarships-home.png";

const Scholarships = () => {
  return (
    <Layout>
      <ImageAndContentHeader
        title="Scholarships"
        content="Green Shirt Pay-It-Forward Scholarships support our mission to make high quality performing arts training accessible for everyone and are made possible through generous contributions by sponsors, fellow students, and friends in our community. 

Contributions of any amount are greatly appreciated and will allow us to assist as many students as possible. Your contribution helps support students seeking training in Levels 1 - 5 of our Meisner Acting Program."
        image={scholarshipsHome}
      />
      <SectionDivider />
      <TextContent
        title="Mission"
        content={
          <p>
            Green Shirt Scholarships launched in April 2020 to help our
            community continue studying with us under the economic pressure of
            COVID-19. You can help make more scholarships available by clicking
            the sponsor button below.
          </p>
        }
        link="Sponser Us Today"
        linkAddress="https://buy.stripe.com/14k14h9lEdGNdos28g"
      />
      <SectionDivider />
      <TextContent
        title="Eligibility"
        content={
          <>
            <p>
              Our commitment to accessibility is inclusive to everyone
              regardless of their race, religion, gender expression, sexuality,
              identity, or experience in the arts or performance.
            </p>

            <p>
              To be eligible, you must be able to answer “Yes” to all of these
              questions.
            </p>
            <ul>
              <li>
                I live in Chicago, surrounding suburbs, or in a location where I
                am able to get to Green Shirt Studio in the immediate future to
                attend classes.
              </li>
              <li>I am at least 18 years of age.</li>
              <li>
                I am not currently enrolled in a degree program (e.g. Bachelor’s
                or Master’s; if pursuing a Ph.D., coursework must be completed).
              </li>
            </ul>
          </>
        }
        link="Apply Today"
        linkAddress="https://forms.gle/V4AX4dUSixmnsuXA7"
      />
      <SectionDivider />
      <TextContent
        title="Receiving the Scholarship"
        content={
          <>
            <ul>
              <li>
                Only complete applications will be reviewed for consideration.
              </li>
              <li>
                The application window for each session will close two weeks
                before that session begins and applicants selected will be
                notified via email one week prior to the session’s start date
              </li>

              <li>
                Applicants not selected are welcome to reapply for the next
                round of scholarship funding
              </li>
              <li>
                Personal information of scholarship recipients (including your
                name) will not be publicized
              </li>
            </ul>
            <p>
              Scholarships will be reviewed by Green Shirt’s administrative and
              artistic team and awarded based on:
            </p>
            <ul>
              <li>Financial need </li>
              <li>Expressed desire to join our community</li>
            </ul>
          </>
        }
        link="Learn More"
        linkAddress="#"
      />
    </Layout>
  );
};
export default Scholarships;

export const Head = () => <SEO title={`Scholarships - Green Shirt Studio`} />;
