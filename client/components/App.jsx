import React from 'react';
import axios from 'axios';
import List from './List';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      vehicle_make: '',
      vehicle_type: 'Consumer',
      data: [],
      metadata: {},
    };

    this.getVehicleData = this.getVehicleData.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount() {
    this.getVehicleData();
  }

  getVehicleData() {
    const {
      vehicle_type,
      per_page,
      location,
      vehicle_make,
    } = this.state;

    axios.post('https://app.joindrover.com/api/web/vehicles', {
      vehicle_type,
      location,
      vehicle_make,
    })
      .then((response) => {
        const { data, metadata } = response.data;
        this.setState({ data, metadata });
      })
      .catch(error => console.log(error));
  }

  handleSearchInput(e, searchInput) {
    e.preventDefault();
    this.setState(searchInput);
    this.getVehicleData();
  }

  render() {
    const { data, metadata } = this.state;
    return (
      <div>
        <Search data={metadata.aggregations} search={this.handleSearchInput} />
        <List cars={data} />
      </div>

    );
  }
}

export default App;
