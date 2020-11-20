import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Col } from 'shards-react';

function ProgramExhibitionTime({ startTime, endTime }) {
  return (
    <Col className="mt-2" xs="6" sm="6" md="4" lg="3" xl="3">
      <span className="exhibition-hour" id="hour-from" name="hour-from">
        Das {startTime}
      </span>
      {" "}
      <span className="exhibition-hour" id="hour-to" name="hour-to">
        às {startTime !== endTime
          ? endTime
          : <b>-</b>
        }
      </span>
    </Col>
  )
}

ProgramExhibitionTime.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired
}

export default ProgramExhibitionTime;

