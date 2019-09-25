const requestCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "REQUEST_CITY":
      return Object.assign({}, state, {
        isFetching: true,
      })
    case "RECEIVE_CITY_SUCCESS":
      return Object.assign({}, state, {
        isFetching: false,
        success: true,
        errorMsg: '',
      })
    case "RECEIVE_CITY_ERROR":
    const { message, code, info } = action.payload.errorInfo;
    const { userInput } = action.payload;
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        errorMsg: message,
        errorCode: code,
        errorInfo: info,
        userInput,
      })
    default:
      return state;
  }
}

export default requestCityReducer;
