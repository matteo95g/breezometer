import axios from 'axios';
import { loadState } from '../persistence/localStorage'

const KEY = '9689f14a65b14893a9831467c1c15f76'

const persistedState = loadState();
let id = persistedState ? persistedState.cityArray.length : 0;

export const addCity = (cityName, cityInfo) => (
  {
    type: 'ADD_CITY',
    payload:{
      cityName,
      cityInfo,
    }
  }
)

export const requestCity = (userInput) => (
  {
    type: 'REQUEST_CITY',
    payload: userInput,
  }
)

export const receiveCity = (userInput) => (
  {
    type: 'RECEIVE_CITY_SUCCESS',
    payload: {
      city: userInput,
    }
  }
)

export const receiveCityError = (errorInfo, userInput) => (
  {
    type: 'RECEIVE_CITY_ERROR',
    payload: {
      errorInfo,
      userInput,
    } 
  }
)

export function fetchCity(userInput) {
  return function (dispatch) {
    dispatch(requestCity(userInput))
    const url = `https://api.breezometer.com/baqi/?location=${userInput}&key=${KEY}`
    axios.get(url)
      .then(
        response => {
          dispatch(receiveCity(userInput));
          let data = response.data;
          let cityInfo = {};
          if (data.data_valid){
            cityInfo = {
              cityName: userInput,
              location: data.country_name,
              cityAirQuality: data.breezometer_aqi,
              color: data.breezometer_color,
              id: id++,
            }
            dispatch(addCity(userInput, cityInfo));
          }
        }
      ).catch(function (error) {
        let errorInfo = error.response.data.error;
        dispatch(receiveCityError(errorInfo, userInput));
      });
  }
}