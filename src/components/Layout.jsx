import React, { useState } from 'react';
import { Link } from 'gatsby';
import useWindowSize from '../lib/useWindowSize';
import Nav from './Nav';
import MobileNav from './MobileNav';
import logo from '../images/logo.svg';
import openNav from '../images/openNav.svg';
import closeNav from '../images/closeNav.svg';
import GlobalStyles from '../styles/globalStyles';
import Reset from '../styles/reset';
import facebook from '../images/socialMedia/facebook.svg';
import instagram from '../images/socialMedia/instagram.svg';
import twitter from '../images/socialMedia/twitter.svg';
import google from '../images/socialMedia/FaGoogle.svg';

import styled from 'styled-components';
import { useEffect } from 'react';

const StyledHeader = styled.header`
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) =>
    props.headerColor === 'green' ? 'var(--green)' : ' var(--white)'};
  color: ${(props) =>
    props.headerColor === 'green' ? 'var(--white)' : ' var(--black)'};
  height: 6rem;
  display: flex;
  justify-content: center;

  .header-wrapper {
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 90rem;
    padding: 0;
  }

  .layout-balance {
    width: 4.375rem;
    height: 1px;
  }

  .toggle-nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 900;
    background: none;
    border: none;
    color: var(--black);
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const StyledFooter = styled.footer`
  color: var(--white);
  background: var(--black);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3.75rem;

  .main-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 90rem;
    margin: 0 auto;
  }

  h3 {
    font-weight: 900;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .subscribe {
    display: flex;
    flex-direction: column;
    width: 19rem;

    h3 {
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }

    input[type='text'],
    input[type='email'] {
      padding: 0.875rem 0.75rem;
      border-radius: 5px;
      width: 100%;

      ::placeholder {
        font-weight: 400;
        font-size: 0.875rem;
      }
    }

    input[type='submit'] {
      color: var(--white);
      background: var(--black);
      border: 2px solid var(--white);
      border-radius: 5px;
      height: 3.5rem;
      font-weight: 900;
      font-size: 1rem;
      width: 120px;
    }

    .button {
      color: var(--white);
      background: var(--black);
      border: 2px solid var(--white);
      border-radius: 5px;
      font-weight: 900;
      font-size: 1.25rem;
      padding: 1rem 1.5rem;
      width: 100%;
      text-align: center;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 900;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }

  .map {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 1.5rem;
    max-width: 26rem;

    a {
      color: var(--white);
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    li {
      margin-right: 1rem;
    }
  }

  .contact {
    width: 18.6875rem;

    h3 {
      font-family: 'Lato', sans-serif;
    }
  }

  .copyright {
    margin-top: 3rem;
  }
  .social-media {
    padding-top: 4rem;
  }

  @media (max-width: 1040px) {
    .main-footer {
      flex-direction: column;
      gap: 3.75rem;
      max-width: 26rem;
    }
    .map {
      margin: 0;
    }
    iframe {
      width: 100%;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 3.75rem 1.5rem;
    .main-footer {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    form {
      max-width: 100%;
      margin-bottom: 4rem;
    }
    .map > a {
      font-size: 0.9rem;
      padding: 1rem 0;
    }
    .contact {
      padding: 4rem 0;
    }
    .copyright {
      margin-top: 0;
    }
  }
`;

const Layout = ({ children, headerColor }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNav = () => {
    setMobileNav(!mobileNav);
  };

  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 1024) {
      setMobileNav(false);
    }
  }, [size]);

  return (
    <>
      <Reset />
      <GlobalStyles />
      <StyledHeader headerColor={headerColor}>
        <div className="header-wrapper">
          <h1>
            <Link to="/">
              <img src={logo} alt={`Green Shirt Studio`} />
            </Link>
          </h1>
          {size.width > 1024 && <Nav headerColor={headerColor} />}
          {size.width <= 1024 &&
            (mobileNav ? (
              <button className="toggle-nav" onClick={toggleNav}>
                Close <img src={closeNav} alt="close nav" />
              </button>
            ) : (
              <button className="toggle-nav" onClick={toggleNav}>
                Menu <img src={openNav} alt="open nav" />
              </button>
            ))}
        </div>
      </StyledHeader>
      {size.width <= 1024 && mobileNav && <MobileNav />}
      <main>{children}</main>
      <StyledFooter>
        <div className="main-footer">
          <div className="subscribe">
            <h3>Sign up for our newsletter!</h3>
            <p>Find out more about upcoming classes and events.</p>
            <a
              href="https://greenshirtstudio.us1.list-manage.com/subscribe/post?u=cd12c56d3b216488464876fcb&id=859a5605d5"
              className="button fill"
            >
              Subscribe
            </a>
          </div>
          {/* <form>

            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                placeholder="What is your name?"
              />
            </label>
            <label htmlFor="email">
              Email Address
              <input
                type="email"
                name="email"
                id="email"
                placeholder="How can we contact you?"
              />
            </label>
            <input type="submit" value="Subscribe" />
          </form> */}
          <div className="map">
            <h3>Visit Us</h3>
            <a href="https://www.google.com/maps/place/Green+Shirt+Studio/@41.9545665,-87.6758402,17z/data=!3m2!4b1!5s0x880fd240b0e4760d:0x2acbde16d52556ad!4m5!3m4!1s0x880fd2232f34c5f3:0x8802314b46718d2c!8m2!3d41.9545665!4d-87.6736515">
              4001 N Ravenswood Ave, Unit 303-B Chicago, IL <br /> 60613
            </a>
            <iframe
              title="Map to Green Shirt Studio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.128891922789!2d-87.675840184167!3d41.95456647921637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2232f34c5f3%3A0x8802314b46718d2c!2sGreen%20Shirt%20Studio!5e0!3m2!1sen!2sus!4v1650140273910!5m2!1sen!2sus"
              width="416"
              height="238"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <div>info@greenshirtstudio.com</div>
              <div>773-217-9565</div>
            </div>
            <div className="social-media">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/greenshirtstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/greenshirtstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/GrnShirtStudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/search?q=green+shirt+studio&rlz=1C5CHFA_enUS885US885&oq=green+shirt+&aqs=chrome.0.69i59j69i57j69i59l2j0i271j69i60l2j69i65.1348j0j1&sourceid=chrome&ie=UTF-8&bshm=lbsc/1#ip=1&lrd=0x880fd2232f34c5f3:0x8802314b46718d2c,1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={google} alt="google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <small className="copyright">
          &copy; {new Date().getFullYear()} Green Shirt Studio
        </small>
      </StyledFooter>
    </>
  );
};

export default Layout;
