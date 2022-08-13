import React from "react";
import { graphql } from "gatsby";

import styled from "styled-components";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.6875rem auto;
  padding: 0 4rem;

  .content {
    max-width: 40rem;

    h2 {
      margin-top: 3rem;
      margin-bottom: 0.375rem;
      line-height: 4.875rem;
      font-weight: 800;
      font-size: 3.75rem;
    }

    h3 {
      margin-bottom: 1.5rem;
      line-height: 2.625rem;
      font-size: 1.75rem;
      font-weight: 300;
    }
  }
`;

const UserPage = (props) => {
  const { strapiUser } = props.data;
  return (
    <Layout>
      <StyledUser>
        <div className="content">
          <img
            src="https://via.placeholder.com/637x444"
            alt="staff placeholder"
          />
          <h2>{strapiUser.username}</h2>
          <h3>{strapiUser.Title}</h3>
          <ReactMarkdown children={strapiUser.Bio.data} />
        </div>
      </StyledUser>
    </Layout>
  );
};
export default UserPage;

// export const query = graphql`
//   query ($id: String!) {
//     strapiUser(id: { eq: $id }) {
//       username
//       Title
//       Bio {
//         data
//       }
//     }
//   }
// `;
