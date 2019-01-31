import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'London, Uk',
      vehicle_make: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  render() {
    const { data, search } = this.props;
    const { location, vehicle_make } = this.state;
 
    return (
      <form>
        Car Make
        <select id="vehicle_make" onChange={e => this.handleChange(e)}>
          <option key="all" value="">All</option>
          {data ? Object.keys(data.vehicle_make)
            .map(make => <option key={make} value={make}>{make}</option>) : null}
        </select>
        Location
        <input id="location" type="text" value={location} onChange={e => this.handleChange(e)} />
        <button type="submit" onClick={e => search(e, { location, vehicle_make })}>Submit</button>
      </form>
    );
  }
}

export default Search;
