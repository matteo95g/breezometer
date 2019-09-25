import React from 'react'

import CityRow from '../components/CityRow'

const MAX_CITIES_DISPLAYED = 5;

class CityList extends React.Component {
  render() {
    let cityArray = this.props.cityArray.reverse();
    cityArray = cityArray.slice(0, MAX_CITIES_DISPLAYED);
    const rows = []
    cityArray.forEach( city => {
      if (city) {
        rows.push(
          <CityRow
            key={cityArray.indexOf(city)}
            city={city}
          />);
      }
    });

    return (
      <div>
        <h4>Last Searches:</h4>
        <table id='table'>
          <thead>
            <tr>
              <th>City</th>
              <th>Location</th>
              <th>Air Quality</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default CityList
