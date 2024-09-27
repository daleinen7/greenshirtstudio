import React from 'react';
import { StyledClassPage } from './{wpClass.slug}';
import { StyledDescription } from '../../components/classComponents/Description';
import SpecialMessage from '../../components/classComponents/SpecialMessage';
import AboutTeacher from '../../components/classComponents/AboutTeacher';
import ClassDetails from '../../components/classComponents/ClassDetails';
import Layout from '../../components/Layout';
import Accordion from '../../components/Accordion';
import { StyledClassHeader } from '../../components/classComponents/ClassHeader';
import { SEO } from '../../components/seo';

const EnsembleIntensive = () => {
  const { wpClass } = {
    wpClass: {
      title: 'Ensemble Intensive',
      author: {
        node: {
          name: 'Jack Schultz',
          description:
            'Jack Schultz is an actor, teacher, and storyteller in Chicago. He’s the Artistic Director of Green Shirt Studio and former Artistic Director of The Agency where his solo show I’m Falling In Love All The Time enjoyed a sold out run on Chicago’s off-loop theatre scene. A story exploring opioid addiction through the lens of caffeine and romantic relationships, I’m Falling In Love All The Time now travels to colleges around the country to tackle stigma around substance use disorders. \r\n\r\nOther performance credits with The Agency include I Wish To Apologize to the People of Illinois, The Spirit of ’76, and Hellcab (2017 and 2018). Jack is a graduate of the iO Training Center, a 200 level RYT Yoga instructor, completed the True Acting Diploma Course with Master Meisner Teacher Larry Silverberg, created the Storytelling Program and teaches the Meisner technique at Green Shirt Studio. He also appears in Season 7 Episode 2 of The Carbonaro Effect where Michael Carbonaro tricked him into believing a viking skeleton tried to attack him at a construction site outside of O’Hare Airport. \r\n\r\nTo find out more about Jack visit jackgschultz.com.',
        },
      },
      databaseId: 123456,
      classGroup: {
        age: 'This is an adult acting class ages 18+',
        classSize: '12 students maximum',
        program: 'Meisner Acting Program',
        stripeId: 'price_1LeMSaJ2Dog8kO2SNmtDUxcG',
        stripeInstallmentId: 'price_1LeMSaJ2Dog8kO2SW3zbfQFT',
        day: 'Mondays - Thursdays',
        instructor: 'Andrew Gallant',
        dates: [
          {
            date: 'January 6 - March 6',
          },
          {
            date: 'Showcase on March 8',
          },
        ],
        price: 2950,
        linkInstructor: {
          id: 'cG9zdDozMDI5NjI=',
          title: 'Andrew Gallant',
          slug: 'andrew-gallant',
          content:
            '<p>Andrew Gallant holds an M.F.A in Acting from DePaul University, a postgraduate diploma from the Liverpool Institute for Performing Arts, a BA in Theatre from UW-Madison and is a proud member of Actor’s Equity. For the last 15 years, Andrew has worked professionally in Chicago as an actor, playwright, director, and artistic director. His plays I Wish to Apologize to the People of Illinois and At the Center both received 3-star reviews (out of 4) from the Chicago Tribune and his short play Mackerel Sky is currently being adapted into a short film with festival submissions pending.</p>\n<p>Before joining Dean, Andrew was an adjunct faculty member at DePaul University’s Theatre School as well as its Digital Cinema Program and was an adjunct professor of theatre and the director of theatre at Triton College. He is co-founder of Green Shirt Studio, an acting school in Chicago specializing the Meisner approach to actor training. His students have appeared in Stranger Things, Moonlight, Molly’s Game, Chicago PD, Chicago Fire, Chicago Med, 9-1-1: Lone Star, The Chi, Easy, Empire, Fargo, The Book of Mormon (Broadway), and many other projects all over the world.</p>\n',
          instructors: {
            title: 'Co-Founder, Instructor',
            image: {
              altText: '',
              gatsbyImage: {
                images: {
                  sources: [
                    {
                      srcSet:
                        '/_gatsby/image/5c9d3104dca339a026350ec0c06ac402/fb4d555011bf77a7c5f7a78f9f909f81/Andrew.avif?u=https%3A%2F%2Fi0.wp.com%2Fgreenshirtstudiowp.us%2Fwp-content%2Fuploads%2F2022%2F11%2FAndrew.png%3Ffit%3D480%252C480%26ssl%3D1&a=w%3D120%26h%3D120%26fm%3Davif%26q%3D75&cd=b568386dad94998ce3e8c3ae6d3ca2e3 120w,/_gatsby/image/5c9d3104dca339a026350ec0c06ac402/125ef5de85ec246509bc314e94db7c6d/Andrew.avif?u=https%3A%2F%2Fi0.wp.com%2Fgreenshirtstudiowp.us%2Fwp-content%2Fuploads%2F2022%2F11%2FAndrew.png%3Ffit%3D480%252C480%26ssl%3D1&a=w%3D240%26h%3D240%26fm%3Davif%26q%3D75&cd=b568386dad94998ce3e8c3ae6d3ca2e3 240w,/_gatsby/image/5c9d3104dca339a026350ec0c06ac402/645cb8d87daadb1fae6cd5d5e1262632/Andrew.avif?u=https%3A%2F%2Fi0.wp.com%2Fgreenshirtstudiowp.us%2Fwp-content%2Fuploads%2F2022%2F11%2FAndrew.png%3Ffit%3D480%252C480%26ssl%3D1&a=w%3D480%26h%3D480%26fm%3Davif%26q%3D75&cd=b568386dad94998ce3e8c3ae6d3ca2e3 480w',
                      type: 'image/avif',
                      sizes: '(min-width: 480px) 480px, 100vw',
                    },
                    {
                      srcSet:
                        '/_gatsby/image/5c9d3104dca339a026350ec0c06ac402/58675926a537122d3ab749f32a9f81d6/Andrew.webp?u=https%3A%2F%2Fi0.wp.com%2Fgreenshirtstudiowp.us%2Fwp-content%2Fuploads%2F2022%2F11%2FAndrew.png%3Ffit%3D480%252C480%26ssl%3D1&a=w%3D120%26h%3D120%26fm%3Dwebp%26q%3D75&cd=b568386dad94998ce3e8c3ae6d3ca2e3 120w,/_gatsby/image/5c9d3104dca339a026350ec0c06ac402/7c9adc2795d9c31663052e6d301ce083/Andrew.webp?u=https%3A%2F%2Fi0.wp.com%2Fgreenshirtstudiowp.us%2Fwp-content%2Fuploads%2F2022%2F11%2FAndrew.png%3Ffit%3D480%252C480%26ssl%3D1&a=w%3D240%26h%3D240%26fm%3Dwebp%26q%3D75&cd=b568386dad94998ce3e8c3ae6d3ca2e3 240w,/_gatsby/image/5c9d3104dca339a026350ec0c06ac402/61b65ddba45eeb401fe9f92e114bfe0b/Andrew.webp?u=https%3A%2F%2Fi0.wp.com%2Fgreenshirtstudiowp.us%2Fwp-content%2Fuploads%2F2022%2F11%2FAndrew.png%3Ffit%3D480%252C480%26ssl%3D1&a=w%3D480%26h%3D480%26fm%3Dwebp%26q%3D75&cd=b568386dad94998ce3e8c3ae6d3ca2e3 480w',
                      type: 'image/webp',
                      sizes: '(min-width: 480px) 480px, 100vw',
                    },
                  ],
                  fallback: {
                    src: '/_gatsby/image/5c9d3104dca339a026350ec0c06ac402/43b6847283e972a185377ade3468b59b/Andrew.png?u=https%3A%2F%2Fi0.wp.com%2Fgreenshirtstudiowp.us%2Fwp-content%2Fuploads%2F2022%2F11%2FAndrew.png%3Ffit%3D480%252C480%26ssl%3D1&a=w%3D120%26h%3D120%26fm%3Dpng%26q%3D75&cd=b568386dad94998ce3e8c3ae6d3ca2e3',
                    srcSet:
                      '/_gatsby/image/5c9d3104dca339a026350ec0c06ac402/43b6847283e972a185377ade3468b59b/Andrew.png?u=https%3A%2F%2Fi0.wp.com%2Fgreenshirtstudiowp.us%2Fwp-content%2Fuploads%2F2022%2F11%2FAndrew.png%3Ffit%3D480%252C480%26ssl%3D1&a=w%3D120%26h%3D120%26fm%3Dpng%26q%3D75&cd=b568386dad94998ce3e8c3ae6d3ca2e3 120w,/_gatsby/image/5c9d3104dca339a026350ec0c06ac402/272bb637320a34f033aa96d549143cef/Andrew.png?u=https%3A%2F%2Fi0.wp.com%2Fgreenshirtstudiowp.us%2Fwp-content%2Fuploads%2F2022%2F11%2FAndrew.png%3Ffit%3D480%252C480%26ssl%3D1&a=w%3D240%26h%3D240%26fm%3Dpng%26q%3D75&cd=b568386dad94998ce3e8c3ae6d3ca2e3 240w,/_gatsby/image/5c9d3104dca339a026350ec0c06ac402/d08793572b3f8a27f9add9dbf5319529/Andrew.png?u=https%3A%2F%2Fi0.wp.com%2Fgreenshirtstudiowp.us%2Fwp-content%2Fuploads%2F2022%2F11%2FAndrew.png%3Ffit%3D480%252C480%26ssl%3D1&a=w%3D480%26h%3D480%26fm%3Dpng%26q%3D75&cd=b568386dad94998ce3e8c3ae6d3ca2e3 480w',
                    sizes: '(min-width: 480px) 480px, 100vw',
                  },
                },
                layout: 'constrained',
                width: 480,
                height: 480,
                backgroundColor: 'rgb(24,24,24)',
              },
            },
          },
        },
        location: '4001 N Ravenswood Ave Unit 303-B Chicago, IL 60657',
        optionalSpecialHeader: 'Who should apply?',
        optionalSpecialMessage:
          '<p>Dedicated, passionate students willing to immerse themselves in their craft and be a part of an ensemble.</p>\n',
        time: '6:30 PM to 9:30 PM CST',
        classImage: {
          sourceUrl:
            'https://i0.wp.com/greenshirtstudiowp.us/wp-content/uploads/2022/08/Meisner-1-1.png?fit=1248%2C870&ssl=1',
        },
      },
    },
  };

  return (
    <Layout>
      <StyledClassPage>
        <StyledClassHeader>
          {wpClass.classGroup.classImage && (
            <img
              src={wpClass.classGroup.classImage.sourceUrl}
              alt={wpClass.title}
            />
          )}
          <div className="info">
            <h2>{wpClass.title}</h2>
            <p>
              Mondays – Thursdays, January 6 – March 6, 6:30-9:30PM with Andrew
              Gallant
            </p>

            <div className="price">
              ${wpClass.classGroup.price}
              <br />
              <p>(payment plans available)</p>
            </div>
            <ul className="pricing-buttons">
              <li>
                <button className="register">Apply Now</button>
              </li>
            </ul>
          </div>
        </StyledClassHeader>
        <div className="main-content">
          <div className="left-column">
            <h2>Description</h2>
            <p>
              Immerse yourself in your craft surrounded by a supportive
              community in this nine-week intensive program.
            </p>
            <br />
            <StyledDescription>
              <Accordion
                title="Over the nine weeks, you’ll grow by:"
                defaultOpen={true}
                h3
              >
                <ul>
                  <li>
                    Building trust as an ensemble and encouraging each other to
                    grow as actors and artists
                  </li>
                  <li>
                    Over 100 hours of classroom instruction with your lead
                    instructor and Green Shirt co-founder Andrew Gallant
                  </li>
                  <li>
                    Experiencing in depth training in Meisner technique
                    including partner attention, connection to impulse,
                    emotional preparation, character point of view,
                    personalization, script analysis 
                  </li>
                  <li>
                    Exploring physical and vocal expressivity that dynamic
                    acting requires
                  </li>
                  <li>
                    Gaining a working knowledge of consent based industry best
                    practices
                  </li>
                  <li>
                    Learning audition technique including self-tape, monologues,
                    and how to prepare a side
                  </li>
                  <li>
                    Getting a hands on introduction to Chicago’s acting industry
                  </li>
                  <li>
                    Attending a one-on-on coaching session to plan next steps on
                    how to market yourself as an actor
                  </li>
                </ul>
              </Accordion>
              <Accordion title="You’ll walk away with:" h3>
                <ul>
                  <li>
                    A refined toolkit to tackle text for stage, TV, and film
                  </li>
                  <li>
                    Coaching on materials to market yourself as an actor
                    including headshots, clips for your online profiles, and
                    resumes
                  </li>
                  <li>
                    Guides outlining concrete steps on how to best produce your
                    own digital content and shows in the Chicago theatre
                    community
                  </li>
                  <li>
                    Two handpicked audition monologues in collaboration with
                    your instructor
                  </li>
                  <li>
                    Showcase for invited friends, family, and industry
                    professionals 
                  </li>
                  <li>
                    You’ll finish the intensive with the skills, materials, and
                    connections to take next steps in your acting and creative
                    career
                  </li>
                </ul>
              </Accordion>
              <Accordion title="What is the commitment?" h3>
                <ul>
                  <li>
                    All students are expected to be in-person at Green Shirt
                    Studio Monday-Thursday evening 6:30-9:30pm
                  </li>
                  <li>
                    Additional weekend hours will be scheduled to accommodate
                    rehearsals and homework
                  </li>
                  <li>
                    As this is an ensemble based training program, your
                    attendance is extremely important. If you would like to
                    apply but have conflicts, please contact us via email
                    info@greenshirtstudio.com to discuss your conflicts
                  </li>
                </ul>
              </Accordion>
              <Accordion title="Who should apply?" h3>
                <ul>
                  <li>
                    Adults ages 18+ interested in developing their skills in a
                    fun, welcoming environment
                  </li>
                  <li>
                    Actors who want to develop a reliable, solid technique to
                    act on stage and for the camera
                  </li>
                  <li>
                    No prerequisite is required. We are looking to work with
                    dedicated, passionate students looking to immerse themselves
                    in their craft and take next steps in their acting career.
                  </li>
                </ul>
              </Accordion>
              <Accordion title="Do you offer payment plans?" h3>
                <p>
                  Yes! We are able to discuss on a case by case basis upon
                  acceptance into the program.
                </p>
              </Accordion>
            </StyledDescription>
          </div>
          <div className="right-column">
            {wpClass.classGroup.optionalSpecialMessage && (
              <SpecialMessage wpClass={wpClass} />
            )}
            <AboutTeacher wpClass={wpClass} />
            <ClassDetails wpClass={wpClass} />
          </div>
        </div>
      </StyledClassPage>
    </Layout>
  );
};

export default EnsembleIntensive;

export const Head = () => (
  <SEO title="Ensemble Intensive - Green Shirt Studio" />
);
