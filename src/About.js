import React from "react";
import Layout from "./Components/Layout";
import { JumbotronAbout } from "./Components/Jumbotron";
import styled from "styled-components";
import { Form } from "react-bootstrap";

const Styles = styled.div`
  .overview {
    width: 60%;
  }
  .overview2 {
    width: 60%;
    float: right;
  }
`;
const AboutPage = () => (
  <React.Fragment>
    <JumbotronAbout />
    <Styles>
      <Layout>
        <div>
          <h2>Who are we?</h2>
          <div></div>
          <p className="overview">
            We probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.We
            probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.We
            probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.We
            probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.
          </p>

          <p className="overview2">
            <h2>Our Mission And Vision</h2>
            We probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.We
            probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.We
            probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.We
            probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.
          </p>
          <br />
          {/* <p className="overview3">
            <h2>Our Mission And Vision</h2>
            We probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.We
            probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.We
            probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.We
            probvide magnificent services to pilots and provate plane owners.
            Seriously, you should join us, and start using the services that we
            now provide to more than 50,000 clients around the country.
          </p> */}
        </div>
      </Layout>
    </Styles>
  </React.Fragment>
);

export default AboutPage;
