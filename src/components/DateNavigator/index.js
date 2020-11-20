import React, { useContext } from 'react';
import { Col, Row } from 'shards-react';
import GlobalContext from '../../containers/GlobalContext';

export default function DateNavigator() {
  const {
    fetchScheduleGrid,
    currentDate,
    setCurrentDate
  } = useContext(GlobalContext);

  const dateFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  function dropDate() {
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    const utfFormated = new Date(yesterday).toISOString().split("T")[0];

    setCurrentDate(() => utfFormated);
    fetchScheduleGrid(utfFormated);
  }

  function increaseDate() {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const utfFormated = new Date(tomorrow).toISOString().split("T")[0];

    setCurrentDate(() => utfFormated);
    fetchScheduleGrid(utfFormated);
  }


  return (
    <Row className="text-center mt-5">
      <Col onClick={dropDate} title="Dia seguinte">
        <i className="pointer fas fa-arrow-left" />
      </Col>
      <Col>
        <h3 className="text-muted">
          {new Date(currentDate).toLocaleDateString('pt-BR', dateFormatOptions)}
        </h3>
      </Col>
      <Col onClick={increaseDate} title="Dia anterior">
        <i className="pointer fas fa-arrow-right" />
      </Col>
    </Row>
  )
}
