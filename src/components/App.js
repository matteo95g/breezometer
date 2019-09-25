import React from 'react'
import AddCityForm from '../containers/AddCityFormContainer'
import CityListContainer from '../containers/CityListContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        <AddCityForm />
        <CityListContainer />
      </div>
    );
  }
}

export default App;
