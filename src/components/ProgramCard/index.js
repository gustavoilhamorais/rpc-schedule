import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Row,
  Collapse
} from "shards-react";
import GlobalContext from '../../containers/GlobalContext';
import ProgramDuration from '../ProgramDuration';
import ProgramExhibitionTime from '../ProgramExhibitionTime';
import ProgramDescription from '../ProgramDescription';
import ProgramTitle from '../ProgramTitle';
import ProgramWeekDays from '../ProgramWeekDays';
import ProgramPoster from '../ProgramPoster';
import ProgramLogo from '../ProgramLogo';
import CollapseCardBtn from '../CollapseCardBtn';
import RenderController from '../../containers/RenderController';

function ProgramCard({ dataIndex }) {
  const { schedule, isCardOpen, setIsCardOpen } = useContext(GlobalContext);
  const isOpen = useMemo(() => {
    if (isCardOpen && isCardOpen[dataIndex] !== undefined && isCardOpen[dataIndex] !== null) {
      return isCardOpen[dataIndex];
    } else {
      setIsCardOpen(previousState => {
        return {
          ...previousState,
          [dataIndex]: false
        }
      });
      return false;
    }
  }, [dataIndex, isCardOpen, setIsCardOpen]);

  const {
    title,
    description,
    human_start_time,
    human_end_time,
    duration_in_minutes,
    custom_info: { Dias, Graficos: { ImagemURL, LogoURL } }
  } = schedule[dataIndex];

  return (
    <RenderController index={dataIndex}>
      <Col className="mb-3" xs="12">
        <Card id={`program-card-${dataIndex}`} name="program-card">
          <CardHeader className="border-bottom">
            <Row>
              <ProgramLogo url={LogoURL} />
              <ProgramTitle title={title} programId={dataIndex} />
              <ProgramExhibitionTime startTime={human_start_time} endTime={human_end_time} />
              <CollapseCardBtn dataIndex={dataIndex} isOpen={isOpen} />
              {/* <ProgramCategory category={category} /> */}
            </Row>
          </CardHeader>
          <Collapse open={isOpen}>
            <CardBody>
              <Row>
                <ProgramDescription description={description} />
                <ProgramPoster url={ImagemURL} />
              </Row>
            </CardBody>
            <CardFooter>
              <ProgramWeekDays weekDays={Dias} />
              <ProgramDuration minutes={duration_in_minutes} />
            </CardFooter>
          </Collapse>
        </Card>
      </Col>
    </RenderController>
  )
}

ProgramCard.propTypes = {
  dataIndex: PropTypes.number.isRequired,
}

export default ProgramCard

