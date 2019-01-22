import React from 'react';
import PropTypes from 'prop-types';

const VehicleCard = ({ data }) => {
  const {
    reference_owner_price_pence,
    stock_image,
    year,
    vehicle_make,
    vehicle_model,
    engine_size_information,
  } = data;

  return (
    <div className="vehicle_card">
      <div className="price_module">
        <h3>
          £
          {reference_owner_price_pence / 100}
        </h3>
        <p>A month</p>
      </div>
      <img alt="Car" src={stock_image ? stock_image.main_image_url : null} />
      <div>
        <p>{`${year} ${vehicle_make}`}</p>
        <h4>{`${vehicle_model} - ${engine_size_information}`}</h4>
      </div>
    </div>
  );
};

VehicleCard.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default VehicleCard;
