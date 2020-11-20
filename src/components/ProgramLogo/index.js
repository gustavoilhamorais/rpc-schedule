import React from 'react'
import PropTypes from 'prop-types'
import './index.css';
import { Col } from 'shards-react';

function ProgramLogo({ url }) {
  return (
    <Col xs="2" sm="2" md="2" lg="1" xl="1">
      <img
        id="program-logo"
        name="program-logo"
        src={url}
        alt="Logo"
      />
    </Col>
  )
}

ProgramLogo.propTypes = {
  url: PropTypes.string.isRequired
}

export default ProgramLogo

