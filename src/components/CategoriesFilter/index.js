import React, { useContext } from 'react';
import { Col } from 'shards-react';
import GlobalContext from '../../containers/GlobalContext';

export default function CategoriesFilter() {
  const { programsCategories, updateFilters } = useContext(GlobalContext);
  return (
    <Col xs="12" sm="12" md="6" lg="4" xl="3" className="mt-5">
      <h5 className="text-primary">Filtrar categorias</h5>
      <select className="custom-select" onChange={updateFilters}>
        <option value="">
          Todas as categorias
        </option>
        {programsCategories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </Col>
  )
}
