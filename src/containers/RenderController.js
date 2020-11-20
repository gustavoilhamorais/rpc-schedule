import React, { useContext } from 'react'
import GlobalContext from './GlobalContext'
import PropTypes from 'prop-types'

export default function RenderController({ children, index }) {
  const { schedule, selectedCategory } = useContext(GlobalContext);
  const { program: { category } } = schedule[index];

  if (!selectedCategory.length || category === selectedCategory) {
    return (
      <>
        {children}
      </>
    );
  }

  return <></>
}

RenderController.propTypes = {
  index: PropTypes.number.isRequired,
}
