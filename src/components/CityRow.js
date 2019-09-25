import React from 'react'

class CityRow extends React.Component {
  render() {
    const cityName = this.props.city.cityName;
    const { location, cityAirQuality, color } = this.props.city.cityInfo;
    return (
      <tr>
        <td>{cityName}</td>
        <td>{location}</td>
        <td bgcolor={color}>{cityAirQuality}</td>
      </tr>
    );
  }
}

export default CityRow;
