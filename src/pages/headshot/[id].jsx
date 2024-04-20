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
        setHeadshotSession(data[0].fields);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log('headshotSession:', headshotSession);

  return (
    <Layout>
      <SEO title="Headshot" />
      {!headshotSession.error ? (
        headshotSession['Photographer Name'] ? (
          <>
            <SessionHeader session={headshotSession} />
            <Description description={headshotSession['Page Description']} />
            <CancellationPolicy
              cancellationPolicy={headshotSession['Cancellation Policy']}
            />
            <SpecialMessage
              specialMessage={headshotSession['Special Message']}
            />
            <AboutPhotographer
              name={headshotSession['Photographer Name']}
              bio={headshotSession['Photographer Bio']}
              image={headshotSession['Photographer Image']}
            />
            <SessionDetails session={headshotSession} />
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
