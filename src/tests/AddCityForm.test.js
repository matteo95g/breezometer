import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import AddCityForm from '../components/AddCityForm';

it('renders without crashing', () => {
  mount(<AddCityForm/>);
});

describe('enable and disable button', () => {
  it('enable button when text input is not empty', () =>{
    const wrapper = mount(<AddCityForm />);
    wrapper.setState({ userInput: 'Now the button is enabled' });
    const submitButton = wrapper.find('#submitButton');
    expect(submitButton.prop('disabled')).toBe(false);
  });

  it('disable button when text input is empty', () =>{
    const wrapper = mount(<AddCityForm />);
    wrapper.setState({ userInput: '' });
    const submitButton = wrapper.find('#submitButton');
    expect(submitButton.prop('disabled')).toBe(true);
  });
});




