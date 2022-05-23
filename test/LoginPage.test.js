import React from 'react'
import LoginPage from '../src/screens/LoginPage'
import {fireEvent, render} from '@testing-library/react-native';
import mockStore from 'redux-mock-store';
global.__fbBatchedBridgeConfig = require('./bridge-mock');
describe('Login screen', () => {

  it('should go to home from login button', () => {
    const navigation = {navigate: () => {}}
    spyOn(navigation, 'navigate');
    const page = render(<LoginPage navigation={navigation} />);

    const loginButton = page.getByTestId('loginButton');

    fireEvent.press(loginButton);
    expect(navigation.navigate).toHaveBeenCalledWith('Home');
  })
}
)
