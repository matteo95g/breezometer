import React from 'react'

class AddCityForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {userInput: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchCity(this.state.userInput);
  }
  
  handleChange(event) {
    this.setState({userInput: event.target.value});
  }

  render () {
    let { errorMsg, errorCode, errorInfo, isFetching, success, userInput } = this.props;
    if (!success && errorMsg && errorMsg.response){
      errorMsg = `${errorMsg.response.data.error.message}: ${userInput}`;
    }
    let loading = null;
    let errorLog = null;
    loading = isFetching ? <h4>Loading...</h4> : <h4> </h4>;
    if (!success){
      errorLog = (
        <div>
          <h4 id="error"> ERROR ({errorCode}) {errorMsg}: {userInput} </h4>
          <h5> {errorInfo} </h5>
        </div>
      )
    }
    return (
      <div>
        <h4>Enter a city:</h4>
        <form id="cityForm" onSubmit={this.handleSubmit}>
          <input id="textInput" type="text" name="city" onChange={this.handleChange} />
          <input id="submitButton" disabled={!this.state.userInput} type="submit" value="GO!" />
          {loading}
          {errorLog}
        </form>
      </div>
    )
  }
}

export default AddCityForm;
