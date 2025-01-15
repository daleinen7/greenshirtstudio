import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import ClassHeader from '../components/classComponents/ClassHeader';
import Description from '../components/classComponents/Description';
import SpecialMessage from '../components/classComponents/SpecialMessage';
import AboutTeacher from '../components/classComponents/AboutTeacher';
import ClassDetails from '../components/classComponents/ClassDetails';
import Policy from '../components/Policy';
import { StyledClassPage } from '../utils/utils';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ClassPage = ({ pageContext }) => {
  const {
    instructors,
    description,
    policies,
    alertBannerTitle,
    alertBannerContent,
    customAttendancePolicy,
    customCancellationPolicy,
  } = pageContext;

  return (
    <Layout>
      <StyledClassPage>
        <ClassHeader class_info={pageContext} />
        <div className="main-content">
          <div className="left-column">
            {description && (
              <Description
                content={documentToReactComponents(JSON.parse(description.raw))}
              />
            )}
            {((policies && policies.includes('Default Attendance Policy')) ||
              customAttendancePolicy) && (
              <Policy title="Attendance Policy">
                {customAttendancePolicy ? (
                  documentToReactComponents(
                    JSON.parse(customAttendancePolicy.raw)
                  )
                ) : (
                  <div>
                    <p>
                      In order to get the most out of your work with us, our
                      students should make showing up to every class on time a
                      priority.
                    </p>
                    <p>
                      We understand that things do come up so if you know you're
                      going to miss a class, please give your instructor as
                      advance notice as possible. This will help them get you
                      caught up and not throw off the rest of the group.
                      Scheduling a make-up class is possible but not guaranteed.
                    </p>
                    <p>
                      Students enrolled in our Meisner Acting Program can only
                      advance to the next level if they've attended at least 6
                      of their 8 sessions. If a student misses more than 2
                      sessions, they will need to retake the level in order to
                      advance in the program.
                    </p>
                  </div>
                )}
              </Policy>
            )}
            {((policies &&
              [
                'Default Cancellation Policy (Student)',
                'Default Cancellation Policy (Studio)',
              ].some((policy) => policies.includes(policy))) ||
              customCancellationPolicy) && (
              <Policy title="Cancellation Policy">
                {customCancellationPolicy ? (
                  documentToReactComponents(
                    JSON.parse(customCancellationPolicy.raw)
                  )
                ) : (
                  <>
                    {policies.includes(
                      'Default Cancellation Policy (Student)'
                    ) && (
                      <>
                        <p>
                          <b>Student Cancellation</b>
                        </p>
                        <p>
                          If a student is withdrawing from a workshop more than
                          7 days prior to the day of the workshop, the tuition
                          will be kept on file for a future class or workshop
                          for a calendar year.
                        </p>
                        <p>
                          If a student withdraws from a workshop less than 7
                          days prior to the day of the workshop, the tuition is
                          non-refundable or transferable.
                        </p>
                        <p>
                          We appreciate you respecting this policy for the best
                          experience for our instructors and students!
                        </p>
                        <p>
                          Please reach out at 773-217-9565 if you have any
                          questions.
                        </p>
                      </>
                    )}
                    {policies.includes(
                      'Default Cancellation Policy (Studio)'
                    ) && (
                      <>
                        <p>
                          <b>Studio Cancellation</b>
                        </p>
                        <p>
                          Occasionally we'll have to cancel a workshop due to
                          low enrollment. We're sorry if that happens to you! If
                          we have to cancel a workshop you've signed up for, we
                          will give you at least 48 hours notice and promptly
                          start your refund process.
                        </p>
                        <p>
                          In the event that class is canceled due to
                          circumstances beyond our control (including but not
                          limited to extreme weather and pandemic related
                          shutdowns), a make-up will be scheduled as soon as
                          it's safe for our students and instructors to be
                          together safely at the studio.
                        </p>
                        <p>
                          In some cases classes may transfer to an online
                          platform. If a student is unable to attend the
                          rescheduled class due to circumstances beyond our
                          control (including but not limited to extreme weather
                          and pandemic related shutdowns) that student will
                          receive credit on their account for the value of
                          missed classes.
                        </p>
                      </>
                    )}
                  </>
                )}
              </Policy>
            )}
          </div>
          <div className="right-column">
            {(alertBannerTitle || alertBannerContent) && (
              <SpecialMessage
                title={alertBannerTitle}
                content={documentToReactComponents(
                  JSON.parse(alertBannerContent.raw)
                )}
              />
            )}
            <AboutTeacher instructors={instructors} />
            <ClassDetails class_info={pageContext} />
          </div>
        </div>
      </StyledClassPage>
    </Layout>
  );
};
export default ClassPage;

export const Head = ({ pageContext }) => (
  <SEO title={`${pageContext.title} - Green Shirt Studio`} />
);
