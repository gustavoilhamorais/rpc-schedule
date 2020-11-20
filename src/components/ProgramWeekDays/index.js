import React from 'react'
import PropTypes from 'prop-types'

function ProgramWeekDays({ weekDays }) {
  return (
    Object.keys(weekDays).map((day, index) => {
      return (
        <span
          key={index}
          title={weekDays[day] ? "Ocorre nesta data" : "Não ocorre nesta data"}
          className={`mr-2 badge ${weekDays[day] ? "badge-info" : "badge-secondary"}`}>
          {day}{" "}
        </span>
      )
    })
  )
}

ProgramWeekDays.propTypes = {
  weekDays: PropTypes.object.isRequired
}

export default ProgramWeekDays

