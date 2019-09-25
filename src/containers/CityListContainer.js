import CityList from "../components/CityList"

import { connect } from 'react-redux'

const mapStateToProps = ({cityArray}) => ({
  cityArray,
})

const CityListContainer = connect(
  mapStateToProps,
)(CityList)

export default CityListContainer;
