import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'shards-react';
import IsProgramLive from '../IsProgramLive';
import './index.css';

function ProgramTitle({ title, programId }) {
  return (
    <Col xs="8" sm="8" md="6" lg="4" xl="4">
      <span
        id="program-name"
        name="program-name"
        className="text-left text-primary"
      >
        {title}
      </span>
      <IsProgramLive programId={programId} />
    </Col>
  )
}

ProgramTitle.propTypes = {
  title: PropTypes.string.isRequired,
  programId: PropTypes.number.isRequired,
}

export default ProgramTitle

