import React, { useContext } from 'react'
import { Container, Row } from 'shards-react';
import ProgramCard from '../components/ProgramCard';
import GlobalContext from '../containers/GlobalContext';
import ReactLoading from 'react-loading';
import CategoriesFilter from '../components/CategoriesFilter';
import DateNavigator from '../components/DateNavigator';

export default function ScheduleGrid() {
  const { schedule, isLoading } = useContext(GlobalContext);

  return !isLoading ? (
    <Container>
      <CategoriesFilter />
      <DateNavigator />
      <Row className="mt-5">
        {schedule.map((_, index) => {
          return (
            <ProgramCard key={index} dataIndex={index} />
          );
        })}
      </Row>
    </Container>
  ) : (
    <Container className="loading-container" fluid>
      <ReactLoading type="cubes" color="#006497" height={270} width={90} />
    </Container>
    )
}
