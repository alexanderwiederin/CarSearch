import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: 'London, Uk',
      vehicle_type: 'Consumer',
      data: [],
      metadata: {},
    };

    this.getVehicleData = this.getVehicleData.bind(this);
  }

  componentDidMount() {
    this.getVehicleData();
  }

  getVehicleData() {
    const { location, vehicle_type } = this.state;
    axios.post('https://app.joindrover.com/api/web/vehicles', { location, vehicle_type })
      .then((response) => {
        const { data, metadata } = response.data;
        this.setState({ data, metadata });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>test</div>
    );
  }
}

export default App;
