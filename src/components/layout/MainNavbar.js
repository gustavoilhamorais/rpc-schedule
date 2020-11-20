import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container, Navbar } from 'shards-react';
import './MainNavbar.css'

const MainNavbar = ({ stickyTop }) => {
  const classes = classNames(
    'main-navbar',
    'primary-background',
    stickyTop && 'sticky-top'
  );

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar className="primary-background flex-md-nowrap p-0">
          <img
            className="ml-3"
            width="60"
            src={process.env.REACT_APP_RCP_LOGO_URL}
            alt="RPC"
          />
          <h5 className="navbar-title">
            Grade de Programação
          </h5>
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
