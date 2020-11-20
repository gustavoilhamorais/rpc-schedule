import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'shards-react';
import './index.css';

function ProgramDescription({ description }) {
  return (
    <Col xs="12" sm="12" md="12" lg="8" xl="8" className="text-left">
      <h5 className="text-muted">{description}</h5>
    </Col>
  )
}

ProgramDescription.propTypes = {
  description: PropTypes.string.isRequired
}

export default ProgramDescription

