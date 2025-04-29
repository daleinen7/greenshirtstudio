import React from 'react';
import { SEO } from '../components/seo';
import coporateTrainingImg from '../images/corporateTraining.jpg';
import Layout from '../components/Layout';
import Subscribe from '../components/Subscribe';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import TextContent from '../components/TextContent';

const CorporateTraining = () => {
  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={coporateTrainingImg}
        title="Corporate Training"
        content=""
      />
      <TextContent
        title="Sexual Harassment Prevention Training Program"
        content={
          <>
            <p>
              Our Sexual Harassment Prevention Training Program is a
              collaboration between Green Shirt Studio, Human(ity) Resources
              LLC, and HR consultant Terilyn Eisenhauer—three partners with a
              shared commitment to creating safer, more inclusive workplaces.
            </p>
            <p>
              <a
                href="https://www.humanity-resources.com/about"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Human(ity) Resources
              </a>{' '}
              brings expertise in leadership development through actor-led
              simulations and applied theater techniques, transforming
              development training into engaging, behavior-changing experiences.
            </p>
            <p>
              <a
                href="https://www.helloterilyn.com/consulting"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Terilyn Eisenhauer
              </a>{' '}
              adds deep HR knowledge and a proven track record of building
              people-first cultures rooted in respect and accountability.
            </p>
            <p>
              With Green Shirt Studios' long-standing dedication to
              accessibility, community, and authentic connection, this
              partnership delivers training that is not only compliant—but truly
              impactful.
            </p>
            <p>
              Our interactive approach helps teams engage with sensitive
              material in a way that's honest, relatable, and
              actionable—building not just compliance, but a foundation of
              clarity, trust, and shared responsibility.
            </p>
            <p>
              Developed by DDI Certified facilitator Rachael Yoder and HR
              consultant Terilyn Eisenhauer, the program uses applied theater to
              spark active participation, honest dialogue, and practical
              learning. Participants move beyond passive content into
              experiential scenarios that help them build empathy, awareness,
              and everyday workplace skills.
            </p>
            <p>
              All program materials meet or exceed federal and City of Chicago
              Sexual Harassment Prevention Training requirements, while
              supporting a workplace culture rooted in respect, equity, and
              psychological safety.
            </p>
            <h3>Training Objectives:</h3>
            <p>By the end of the program, participants will be able to:</p>
            <ul>
              <li>
                Understand what legally constitutes sexual harassment—and
                recognize the gray areas that often show up in startup and tech
                environments
              </li>
              <li>
                Apply effective bystander intervention strategies through
                realistic, scenario-based practice
              </li>
              <li>
                Navigate the reporting process, employee rights, and the
                responsibilities of managers and supervisors
              </li>
              <li>
                Respond to challenging workplace situations with greater
                confidence, communication, and accountability
              </li>
            </ul>
            <a
              href="https://calendly.com/jack-hea/30min"
              class="button fill"
              style={{ width: 'auto', margin: '0 auto', 'margin-top': '3rem' }}
            >
              Schedule a Consultation
            </a>
          </>
        }
      />
      <div></div>
    </Layout>
  );
};
export default CorporateTraining;

export const Head = () => (
  <SEO title={`Corporate Training - Green Shirt Studio`} />
);
