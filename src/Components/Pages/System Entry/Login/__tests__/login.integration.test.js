/**
 * integration testing for login
 */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import LoginForm from '../Components/LoginForm';


configure({ adapter: new Adapter() });