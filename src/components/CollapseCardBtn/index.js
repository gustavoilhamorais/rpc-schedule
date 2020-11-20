import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button, Col } from 'shards-react'
import GlobalContext from '../../containers/GlobalContext'
import './index.css';

function CollapseCardBtn({ dataIndex, isOpen }) {
  const { setIsCardOpen } = useContext(GlobalContext);

  function toggleCardOpen() {
    setIsCardOpen(previousState => {
      return {
        ...previousState,
        [dataIndex]: !previousState[dataIndex]
      }
    });
  }

  return (
    <Col>
      <span id="collapse-card-btn" name="collapse-card-btn">
        <Button className="btn-primary" onClick={toggleCardOpen}>
          {!isOpen
            ? <>
              <i className="fas fa-plus mr-1" />
              Mais informações
            </>
            : <>
              <i className="fas fa-minus mr-1" />
              Menos informações
            </>
          }
        </Button>
      </span>
    </Col>
  )
}

CollapseCardBtn.propTypes = {
  dataIndex: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired
}

CollapseCardBtn.defaultProps = {
  isOpen: false
}

export default CollapseCardBtn;

