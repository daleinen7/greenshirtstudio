import React, { useEffect } from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import ClassHeader from '../components/classComponents/ClassHeader';
import Description from '../components/classComponents/Description';
import CancellationPolicy from '../components/classComponents/CancellationPolicy';
import AttendancePolicy from '../components/classComponents/AttendancePolicy';
import SpecialMessage from '../components/classComponents/SpecialMessage';
import AboutTeacher from '../components/classComponents/AboutTeacher';
import ClassDetails from '../components/classComponents/ClassDetails';

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

  return !headshotSession.error ? (
    headshotSession.length > 0 ? (
      <Layout>
        <SEO title="Headshot" />
        <ClassHeader
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
        <AboutTeacher
          teacherName={headshotSession[0].fields.teacherName}
          teacherBio={headshotSession[0].fields.teacherBio}
          teacherImage={headshotSession[0].fields.teacherImage}
        />
        <ClassDetails classDetails={headshotSession[0].fields.classDetails} />
      </Layout>
    ) : (
      <>loading ... </>
    )
  ) : (
    <Layout>
      <SEO title="Headshot" />
      <h2>Headshot Session Not Found</h2>
    </Layout>
  );
};
export default Headshot;
