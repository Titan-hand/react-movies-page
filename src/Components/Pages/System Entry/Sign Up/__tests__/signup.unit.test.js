/**
 * unit testing for signup form
 */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import SignupForm from '../Components/SignupForm';

configure({ adapter: new Adapter() });

describe('<SignupForm />', () => {

    let state,
        onChange, 
        wrapper;
    // inside beforeAll apply for all test
    beforeAll(() => {
        state = {
            username: 'user1',
            email: 'user1@mail.com',
            password: 'password123'
        }
    
        // this mock is for mount method, because the mock.calls property in mount is different than shallow.
        onChange = jest.fn( ({target}) => state[target.name] = target.value );
        
        wrapper = mount(
            <SignupForm
                onChangeCredentials={onChange}
                onSubmitForm={() => {}}
                isLoading={false}
                username={state.username}
                email={state.email}
                password={state.password}
            />
        )
    });


    test('inputs have default values', () => {
        expect(
            wrapper
                .find('input')
                .at(0)
                .prop('value') 
        ).toEqual(state.username);
        expect(
            wrapper
                .find('input')
                .at(1)
                .prop('value')
        ).toEqual(state.email);
        expect(
            wrapper
                .find('input')
                .at(2)
                .prop('value')
        ).toEqual(state.password);
    })


    test('onChange has correct values', () => {
        // simulate onChange in the 3 inputs
        wrapper
            .find('input')
            .at(0)
            .simulate('change', { 
                target: { value: 'user2', name: 'username' }
            }); 
        wrapper
            .find('input')
            .at(1)
            .simulate('change', { 
                target: { value: 'user2@mail.com', name: 'email' }
            }); 
        wrapper
            .find('input')
            .at(2)
            .simulate('change', { 
                target: { value: 'password123', name: 'password' }
            });

        expect(onChange.mock.calls.length).toEqual(3);
        expect(state).toEqual({
            username: 'user2',
            email: 'user2@mail.com',
            password: 'password123'
        });

    })
});