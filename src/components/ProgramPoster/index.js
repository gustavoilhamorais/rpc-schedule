import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'shards-react';

function ProgramPoster({ url }) {
  return (
    <Col xs="12" sm="12" md="3" lg="3" xl="3" className="mr-5 text-center">
      <img
        src={url}
        alt="Logo"
        width="300"
        id="program-poster"
        name="program-poster"
      />
    </Col>
  )
}

ProgramPoster.propTypes = {
  url: PropTypes.string.isRequired
}

export default ProgramPoster

