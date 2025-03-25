import React from 'react';
import { StyledClassPage } from '../../utils/utils';
import { StyledDescription } from '../../components/classComponents/Description';
import SpecialMessage from '../../components/classComponents/SpecialMessage';
import AboutTeacher from '../../components/classComponents/AboutTeacher';
import ClassDetails from '../../components/classComponents/ClassDetails';
import Layout from '../../components/Layout';
import Accordion from '../../components/Accordion';
import { StyledClassHeader } from '../../components/classComponents/ClassHeader';
import { SEO } from '../../components/seo';
import EnsembleIntensiveProgram from '../../images/ensembleIntensiveProgram.png';
import ensembleIntensiveVideo from '../../images/ensemble-intensive-video.mp4';

const EnsembleIntensive = () => {
  const class_info = {
    title: 'Ensemble Intensive',
    age: 'This is an adult acting class ages 18+',
    classSize: '12 students maximum',
    type: 'Meisner Acting Program',
    day: 'Mondays - Thursdays',
    startTime: '11:00 AM',
    endTime: '2:00 PM',
    dates: ['June 9 - August 7', 'Showcase on August 9'],
    cost: 2950,
    instructors: [
      {
        slug: 'andrew-gallant',
        name: 'Andrew',
        lastName: 'Gallant',
        bio: {
          raw: `{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Andrew Gallant holds an M.F.A in Acting from DePaul University, a postgraduate diploma from the Liverpool Institute for Performing Arts, a BA in Theatre from UW-Madison and is a proud member of Actor's Equity. For the last 15 years, Andrew has worked professionally in Chicago as an actor, playwright, director, and artistic director. His plays I Wish to Apologize to the People of Illinois and At the Center both received 3-star reviews (out of 4) from the Chicago Tribune and his short play Mackerel Sky is currently being adapted into a short film with festival submissions pending.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Most recently, Andrew was Assistant Professor of Theatre & Theatre Program Coordinator at Dean College. He has also been a adjunct faculty member at DePaul University's Theatre School, its Digital Cinema Program, and an adjunct professor of theatre and the director of theatre at Triton College. He is co-founder of Green Shirt Studio, an acting school in Chicago specializing the Meisner approach to actor training. His students have appeared in Stranger Things, Moonlight, Molly's Game, Chicago PD, Chicago Fire, Chicago Med, 9-1-1: Lone Star, The Chi, Easy, Empire, Fargo, The Book of Mormon (Broadway), and many other projects all over the world.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}`,
        },
        profilePicture: {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://images.ctfassets.net/8e2qnaqilu43/6p8xxYzh1slbFOOGJhhvbv/b4a105473877ff81ae3eac0dcb7bc08b/Andrew.jpg?w=159&h=193&q=50&fm=webp 159w,\nhttps://images.ctfassets.net/8e2qnaqilu43/6p8xxYzh1slbFOOGJhhvbv/b4a105473877ff81ae3eac0dcb7bc08b/Andrew.jpg?w=319&h=388&q=50&fm=webp 319w,\nhttps://images.ctfassets.net/8e2qnaqilu43/6p8xxYzh1slbFOOGJhhvbv/b4a105473877ff81ae3eac0dcb7bc08b/Andrew.jpg?w=637&h=774&q=50&fm=webp 637w',
                  sizes: '(min-width: 637px) 637px, 100vw',
                  type: 'image/webp',
                },
              ],
              fallback: {
                src: 'https://images.ctfassets.net/8e2qnaqilu43/6p8xxYzh1slbFOOGJhhvbv/b4a105473877ff81ae3eac0dcb7bc08b/Andrew.jpg?w=637&h=774&fl=progressive&q=50&fm=jpg',
                srcSet:
                  'https://images.ctfassets.net/8e2qnaqilu43/6p8xxYzh1slbFOOGJhhvbv/b4a105473877ff81ae3eac0dcb7bc08b/Andrew.jpg?w=159&h=193&fl=progressive&q=50&fm=jpg 159w,\nhttps://images.ctfassets.net/8e2qnaqilu43/6p8xxYzh1slbFOOGJhhvbv/b4a105473877ff81ae3eac0dcb7bc08b/Andrew.jpg?w=319&h=388&fl=progressive&q=50&fm=jpg 319w,\nhttps://images.ctfassets.net/8e2qnaqilu43/6p8xxYzh1slbFOOGJhhvbv/b4a105473877ff81ae3eac0dcb7bc08b/Andrew.jpg?w=637&h=774&fl=progressive&q=50&fm=jpg 637w',
                sizes: '(min-width: 637px) 637px, 100vw',
              },
            },
            layout: 'constrained',
            backgroundColor: '#282828',
            width: 637,
            height: 774,
          },
        },
      },
    ],
    location: '4001 N Ravenswood Ave Unit 303-B Chicago, IL 60657',
    alertBannerTitle: 'Who should apply?',
    alertBannerContent:
      'Dedicated, passionate students willing to immerse themselves in their craft and be a part of an ensemble.',
  };

  return (
    <Layout>
      <StyledClassPage>
        <StyledClassHeader>
          <video
            src={ensembleIntensiveVideo}
            controls
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="info">
            <h2>{class_info.title}</h2>
            <p>
              Mondays - Thursdays, June 9 - August 7, 11:00 AM - 2:00 PM with
              Andrew Gallant
            </p>

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
          <div className="left-column">
            <h2>Description</h2>
            <p>
              Immerse yourself in your craft surrounded by a supportive
              community in this nine-week intensive program.
            </p>
            <br />
            <StyledDescription>
              <Accordion
                title="Over the nine weeks, you'll:"
                defaultOpen={true}
                h3
              >
                <ul>
                  <li>
                    Build trust as an ensemble and encourage each other to grow
                    as actors and artists
                  </li>
                  <li>
                    Experience 100 hours of classroom instruction with your lead
                    instructor and Green Shirt co-founder Andrew Gallant
                  </li>
                  <li>
                    Cover in depth training in Meisner technique including
                    partner attention, connection to impulse, emotional
                    preparation, character point of view, personalization,
                    script analysis
                  </li>
                  <li>
                    Explore physical and vocal expressivity that dynamic acting
                    requires
                  </li>
                  <li>
                    Gain a working knowledge of consent based industry best
                    practices
                  </li>
                  <li>
                    Learn on camera audition technique including self-tape,
                    monologues, and how to prepare a side
                  </li>
                  <li>
                    Get a hands on introduction to Chicago's acting industry
                  </li>
                  <li>
                    Attend a one-on-on coaching session to plan next steps on
                    how to market yourself as an actor
                  </li>
                </ul>
              </Accordion>
              <Accordion title="You'll walk away with:" h3>
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
                    You'll finish the intensive with the skills, materials, and
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
            <SpecialMessage
              title={class_info.alertBannerTitle}
              content={class_info.alertBannerContent}
            />
            <AboutTeacher instructors={class_info.instructors} />
            <ClassDetails class_info={class_info} />
          </div>
        </div>
      </StyledClassPage>
    </Layout>
  );
};

export default EnsembleIntensive;

export const Head = () => (
  <SEO title="Ensemble Intensive (Afternoon) - Green Shirt Studio" />
);
