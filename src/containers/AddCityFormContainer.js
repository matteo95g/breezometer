import  { fetchCity } from "../actions/actions"
import AddCityForm  from "../components/AddCityForm"
import { connect } from 'react-redux'

//here I receive state as parameter, the function could be (state) => ({...})
//but instead, I use destructuring to "disarm" state

const mapStateToProps = ({ appStatus: {errorMsg, errorCode, errorInfo, isFetching, success, userInput} }) => 
({
  errorMsg,
  errorCode,
  errorInfo,
  isFetching,
  success,
  userInput,
})

const mapDispatchToProps = {
  fetchCity,
}

const AddCityFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCityForm)

export default AddCityFormContainer;
