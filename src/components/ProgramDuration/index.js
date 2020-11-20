import React from 'react'
import PropTypes from 'prop-types'

function ProgramDuration({ minutes }) {
  const convertedText = minutes
    ? `Duração de ${minutes} minutos.`
    : '';

  return (
    <p className="mt-2">
      <small>{convertedText}</small>
    </p>
  );
}

ProgramDuration.propTypes = {
  minutes: PropTypes.string.isRequired,
}

export default ProgramDuration

