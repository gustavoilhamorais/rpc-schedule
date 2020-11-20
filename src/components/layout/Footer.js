import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Row } from "shards-react";
import './Footer.css';

const MainFooter = ({ contained, menuItems, copyright }) => {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <footer id="footer" name="footer" className="main-footer d-flex p-2 px-3 bg-white border-top">
      <Container fluid={contained}>
        <Button onClick={topFunction} className="btn-dark float-right">
          <i className="fa fa-arrow-up" />
        </Button>
        <Row>
          {menuItems.map((item, index) => (
            <a key={index} href={item.to} className="mr-5" target="_blank" rel="noreferrer">
              {item.title}
            </a>
          ))}
          <span className="copyright ml-auto my-auto mr-2">
            {copyright}
          </span>
        </Row>
      </Container>
    </footer>
  )
};

MainFooter.propTypes = {
  contained: PropTypes.bool,
  menuItems: PropTypes.array,
  copyright: PropTypes.string
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright © 2020 Gustavo Ilha Morais",
  menuItems: [
    {
      title: "LinkedIn",
      to: "https://www.linkedin.com/in/gustavo-ilha-morais-283b19161/"
    },
    {
      title: "GitHub",
      to: "https://github.com/gustavoilhamorais"
    },
    {
      title: "GitLab",
      to: "https://gitlab.com/gustavoilhamorais"
    },
    {
      title: "Facebook",
      to: "https://www.facebook.com/gustavo.ilhamorais/"
    },
    {
      title: "Instagram",
      to: "https://www.instagram.com/gust.1977/"
    }
  ]
};

export default MainFooter;
