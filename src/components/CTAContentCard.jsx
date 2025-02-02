import React from 'react';
import { Link } from 'gatsby';
import useWindowSize from '../lib/useWindowSize';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledCTACard = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.headerAlign === 'left' ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: ${(props) => ('left' ? 'start' : 'end')};

  max-width: 1440px;
  margin: 0 auto;
  padding: 4.75rem 4rem;

  .info {
    max-width: 33rem;
  }

  img.image,
  video {
    width: 63%;
    padding-left: ${(props) => (props.headerAlign === 'left' ? '2rem' : '0')};
    padding-right: ${(props) => (props.headerAlign === 'left' ? '0' : '2rem')};
  }

  h3 {
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
    margin-bottom: 3rem;
  }

  a {
    font-weight: 900;
    color: var(--black);
    background: var(--neon-green);
    text-decoration: none;
    font-size: 1.25rem;
    padding: 1rem 1.5rem;
    border: 2px solid var(--neon-green);
    :hover {
      background: var(--white);
    }

    :active {
      transform: translateY(2px) translateX(2px);
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
    }
  }

  @media (max-width: 785px) {
    flex-direction: column-reverse;
    padding: 3.75rem 0;

    h3 {
      font-family: 'Lato', sans-serif;
    }

    img.image,
    video {
      width: 100%;
      padding: 0;
    }

    .info {
      width: 100%;
      padding: 1.25rem 1rem 0;
    }
  }

  @media (max-width: 480px) {
    padding-top: 3.75rem;
    padding-bottom: 4.75rem;
  }
`;

const CTACard = ({
  headerAlign,
  title,
  image,
  imageAltText,
  info,
  ctaText,
  ctaLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  video,
}) => {
  const size = useWindowSize();

  return (
    <StyledCTACard headerAlign={headerAlign}>
      <div className="info">
        <h3>{title}</h3>
        <ReactMarkdown children={info.replace(/\n/gi, '\n &nbsp;')} />
        {
          // ctaLink has to be a full URL, not a relative path
          ctaLink.includes('http') ? (
            <a href={ctaLink}>
              {size.width < 915 && size.width > 785 ? 'Learn More' : ctaText}
            </a>
          ) : (
            <Link to={ctaLink}>
              {size.width < 915 && size.width > 785 ? 'Learn More' : ctaText}
            </Link>
          )
        }
        {
          // ctaLink has to be a full URL, not a relative path
          ctaSecondaryLink.includes('http') ? (
            <a href={ctaSecondaryLink}>
              {size.width < 915 && size.width > 785
                ? 'Learn More'
                : ctaSecondaryText}
            </a>
          ) : (
            <Link to={ctaSecondaryLink}>
              {size.width < 915 && size.width > 785
                ? 'Learn More'
                : ctaSecondaryText}
            </Link>
          )
        }
      </div>
      {video ? (
        <video src={video} autoPlay loop muted playsInline></video>
      ) : (
        <img src={image} alt={imageAltText} className={'image'} />
      )}
    </StyledCTACard>
  );
};
export default CTACard;
