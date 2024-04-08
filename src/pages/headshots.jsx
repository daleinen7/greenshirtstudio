import React, { useEffect } from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import ClassCard from '../components/ClassCard';
import Testimonial from '../components/Testimonial';
import privateCoaching from '../images/privateCoaching.png';
import ContentCard from '../components/ContentCard';
import ContentStack from '../components/ContentStack';

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
    headshotSessions.map((session) => (
      <ClassCard
        title={session.name}
        content={session.description}
        imgUrl={session.image}
        altText="Headshot session"
        price={session.price}
        slug={session.id}
        program={`${session.month}, ${session.dayOfWeek} the ${session.dayOfMonth} at ${session.time}`}
        headshot
      />
    ));

  return (
    <Layout headerColor="white">
      <ImageAndContentHeader
        image={privateCoaching}
        title="Headshots"
        content="Schedule your headshots with us and get the perfect shot for your professional portfolio."
      />
      {sessions ? (
        <ContentStack title={'Available Photo Sessions'} content={sessions} />
      ) : (
        <p>Loading...</p>
      )}
      {/* <ContentStack title={'In-Person & Zoom Coaching'} content={coaching} /> */}
      {/* <Testimonial quotes={testimonials} /> */}
      {/* <CoachingSignup /> */}
    </Layout>
  );
};
export default Headshots;

export const Head = () => <SEO title={`Headshots - Green Shirt Studio`} />;
