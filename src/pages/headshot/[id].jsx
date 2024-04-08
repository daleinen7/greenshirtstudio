import React, { useEffect } from 'react';
import { SEO } from '../../components/seo';
import Layout from '../../components/Layout';
import SessionHeader from '../../components/headshotComponents/SessionHeader';
import Description from '../../components/headshotComponents/Description';
import CancellationPolicy from '../../components/headshotComponents/CancellationPolicy';
import AttendancePolicy from '../../components/headshotComponents/AttendancePolicy';
import SpecialMessage from '../../components/headshotComponents/SpecialMessage';
import AboutPhotographer from '../../components/headshotComponents/AboutPhotographer';
import SessionDetails from '../../components/headshotComponents/SessionDetails';

const Headshot = ({ params }) => {
  const [headshotSession, setHeadshotSession] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          '/.netlify/functions/get-headshot-detail',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: params.id }),
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server');
        }
        const data = await response.json();
        setHeadshotSession(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <SEO title="Headshot" />
      {!headshotSession.error ? (
        headshotSession.length > 0 ? (
          <>
            <SessionHeader
              title={headshotSession[0].fields.title}
              subtitle={headshotSession[0].fields.subtitle}
              image={headshotSession[0].fields.image}
            />
            <Description description={headshotSession[0].fields.description} />
            <CancellationPolicy
              cancellationPolicy={headshotSession[0].fields.cancellationPolicy}
            />
            <AttendancePolicy
              attendancePolicy={headshotSession[0].fields.attendancePolicy}
            />
            <SpecialMessage
              specialMessage={headshotSession[0].fields.specialMessage}
            />
            <AboutPhotographer
              teacherName={headshotSession[0].fields.teacherName}
              teacherBio={headshotSession[0].fields.teacherBio}
              teacherImage={headshotSession[0].fields.teacherImage}
            />
            <SessionDetails
              classDetails={headshotSession[0].fields.classDetails}
            />
          </>
        ) : (
          <>loading ... </>
        )
      ) : (
        <>No Headshot Session Found</>
      )}
    </Layout>
  );
};
export default Headshot;
