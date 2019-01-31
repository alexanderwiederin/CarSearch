import React from 'react';
import PropTypes from 'prop-types';
import VehicleCard from './VehicleCard';

const List = ({ cars }) => (
  <div>
    {cars.map(car => <VehicleCard data={car} key={car.id} />)}
  </div>
);

List.propTypes = {
  cars: PropTypes.instanceOf(Array),
};

List.defaultProps = {
  cars: [],
};

export default List;
