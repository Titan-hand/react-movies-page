/**
 * integration testing for signup
 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from '@testing-library/react';
// login container
import SignupContainer from '../SignupContainer';
// mocks
import RequestMock from '../__mocks__/Request';

configure({ adapter: new Adapter() });

describe('<SignupContainer />', () => {

    // variable to use in all tests
    let wrapper;
    
    
    test('render without crashing', () => {
        wrapper = mount(
            <Router>
                <SignupContainer />
            </Router>
        );
        expect(wrapper ? true : false).toBe(true);
    });


    test('set input data with form inputs', () => {
        wrapper
            .find('input')
            .at(0)
            .simulate('change', { target: { name: 'username', value: 'user1' } } );
        wrapper
            .find('input')
            .at(1)
            .simulate('change', { target: { name: 'email', value: 'user@mail.com' } } );
        wrapper
            .find('input')
            .at(2)
            .simulate('change', { target: { name: 'password', value: 'password123' } } );
        // state updated, check inputs values
        expect(
            wrapper.find('input').at(0).prop('value')
        ).toBe('user1');
        expect(
            wrapper.find('input').at(1).prop('value')
        ).toBe('user@mail.com');
        expect(
            wrapper.find('input').at(2).prop('value')
        ).toBe('password123');
    });


    test('submit form', async () => {
        // this code will update the component state asynchronously
        await act(async () => {
            wrapper
                .find('form')
                .simulate('submit');
        })
        // signup called with correct form data
        expect(RequestMock.signup).toHaveBeenCalledWith(
            {
                username: 'user1',
                email: 'user@mail.com',
                password: 'password123',
            }
        );
    })


})