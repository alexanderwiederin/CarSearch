import React from 'react';
import axios from 'axios';
import List from './List';
import Search from './Search';

const convertStateToSearchInput = state => Object.entries(state).reduce((searchQuery, tuple) => {
  const [key, value] = tuple;
  if (typeof value === 'string') {
    searchQuery[key] = value; // eslint-disable-line no-param-reassign
  }
  return searchQuery;
}, {});


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: 'London, Uk',
      vehicle_make: null,
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
    const searchInput = convertStateToSearchInput(this.state);

    axios.post('https://app.joindrover.com/api/web/vehicles', searchInput)
      .then((response) => {
        const { data, metadata } = response.data;
        this.setState({ data, metadata });
      })
      .catch(error => console.log(error));
  }

  handleSearchInput(e, searchInput) {
    e.preventDefault();
    this.setState(searchInput, () => this.getVehicleData());
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
