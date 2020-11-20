import React, { createRef, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import GlobalContext from '../../containers/GlobalContext';

function IsProgramLive({ programId }) {
  const { currentDate, schedule } = useContext(GlobalContext);
  const { human_start_time, human_end_time } = schedule[programId];

  const isCurrentProgramOnAir = useMemo(() => {
    if (new Date().toISOString().split('T')[0] === currentDate) {
      const startHour = human_start_time.split(':')[0];
      const startMinute = human_start_time.split(':')[1];

      const endHour = human_end_time.split(':')[0];
      const endMinute = human_end_time.split(':')[1];

      let formatedStartTime = new Date();
      formatedStartTime.setHours(startHour, startMinute, 0);

      let formatedEndTime = new Date();
      formatedEndTime.setHours(endHour, endMinute, 0);

      const now = new Date().getTime();

      const isLive = formatedStartTime.getTime() <= now && formatedEndTime.getTime() > now;

      return isLive;
    }
    return false;
  }, [currentDate, human_start_time, human_end_time]);

  return isCurrentProgramOnAir ? (
    <span className="badge badge-danger ml-3">
      AO VIVO
    </span>
  ) : <></>
}

IsProgramLive.propTypes = {
  programId: PropTypes.number.isRequired,
}

export default IsProgramLive;
