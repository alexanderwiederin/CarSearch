import React from 'react';
import axios from 'axios';
import List from './List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: 'London, Uk',
      vehicle_type: 'Consumer',
      data: [],
      metadata: {},
      per_page: 30,
    };

    this.getVehicleData = this.getVehicleData.bind(this);
  }

  componentDidMount() {
    this.getVehicleData();
  }

  getVehicleData() {
    const { location, vehicle_type, per_page } = this.state;
    axios.post('https://app.joindrover.com/api/web/vehicles', { location, vehicle_type, per_page })
      .then((response) => {
        const { data, metadata } = response.data;
        this.setState({ data, metadata });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <List cars={data} />
      </div>

    );
  }
}

export default App;
