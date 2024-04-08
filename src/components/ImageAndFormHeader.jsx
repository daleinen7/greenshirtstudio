import React from 'react';
import styled from 'styled-components';

const StyledImageAndForm = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 90rem;
  margin: 4.625rem auto;
  align-items: center;

  h2 {
    font-size: 3.75rem;
    line-height: 1.3;
  }

  img,
  video {
    width: 50%;
    padding: 0 0 2rem 2rem;
  }

  .form-info {
    width: 50%;
    padding: 0 2.25rem 0 4rem;
    margin-bottom: 0;

    .subtitle {
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: var(--dark-gray);
    }

    #offerings-form {
      margin-top: 2.1875rem;

      & > div {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.4688rem;

        label {
          color: var(--dark-gray);
          margin-top: 0.5rem;
          margin-bottom: 0.1563rem;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid var(--dark-gray);
          border-radius: 2px;
        }

        input,
        select {
          height: 2.1875rem;
          color: var(--dark-gray);
        }

        textarea {
          height: 4.375rem;
        }
      }
    }

    .button {
      margin-top: 20px;
    }
  }

  @media (max-width: 785px) {
    flex-direction: column-reverse;
    margin: 0 auto;

    h2 {
      font-family: 'Lato', sans-serif;
      font-size: 2.25rem;
    }

    img {
      width: auto;
      margin-bottom: 1.25rem;
      padding: 0;
    }

    video {
      width: 100%;
      padding: 0;
    }

    .form-info {
      width: 100%;
      padding: 0 1rem;
      margin: 0px auto 4.75rem;

      .subtitle {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 560px) {
    .info p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

const ImageAndFormHeader = ({ title, subtitle, image, video }) => {
  return (
    <StyledImageAndForm>
      <div class="form-info">
        <h2>{title}</h2>
        <p class="subtitle">{subtitle}</p>
        <form id="offerings-form" data-netlify="true">
          <input type="hidden" name="form-name" value="offerings-form" />
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="offerings">Offerings:</label>
            <select name="offerings" id="offerings">
              <option value="grp-act-cls">Group Acting Classes</option>
              <option value="priv-act-coach">Private Acting Coaching</option>
              <option value="prof-dev-wksp">
                Professional Development Workshops
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <input type="submit" value="Submit" class="button fill" />
        </form>
      </div>
      {video ? (
        <video src={video} autoPlay loop muted playsInline></video>
      ) : (
        <img src={image} alt={title} />
      )}
    </StyledImageAndForm>
  );
};
export default ImageAndFormHeader;
