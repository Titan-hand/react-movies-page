/**
 * unit testing for login
 */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import LoginForm from '../Components/LoginForm';


configure({ adapter: new Adapter() });

describe('<LoginForm />', () => {

    let state, onChange, wrapper;
    // inside beforeAll apply for all test
    beforeAll(() => {
        state = {
            email: 'user@mail.com',
            password: '12345678'
        }
    
        // this mock is for mount method, because the mock.calls property in mount is different than shallow.
        onChange = jest.fn( ({target}) => state[target.name] = target.value );
        
        wrapper = mount(
            <LoginForm
                onChangeCredentials={onChange}
                onSubmitForm={() => {}}
                isLoading={false}
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
        ).toEqual(state.email);
        expect(
            wrapper
                .find('input')
                .at(1)
                .prop('value')
        ).toEqual(state.password);
    })

    test('onChange has correct values', () => {
        // simulate onChange in the 2 inputs
        wrapper
            .find('input')
            .at(0)
            .simulate('change', { 
                target: { value: 'newmail@mail.com', name: 'email' }
            }); 
        wrapper
            .find('input')
            .at(1)
            .simulate('change', { 
                target: { value: 'newpassword123', name: 'password' }
            });
        expect(onChange.mock.calls.length).toEqual(2);
        expect(state).toEqual({
            email: 'newmail@mail.com',
            password: 'newpassword123'
        });

    })
});