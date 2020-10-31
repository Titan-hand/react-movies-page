import React, { cloneElement } from 'react';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// inputs components
import Text from '../Text';
import Email from '../Email';
import Pass from '../Pass';
import GenericInput from '../Input';
// import InputIcon from '../InputIcon';
// import LabeledInput from '../LabeledInput/LabeledInput';

configure({ adapter: new Adapter()});

// function to test simple inputs (text, password, email and generic)
function testSimpleInputs(InputComponent){
    const onChange = jest.fn();
    const wrapper = shallow(
        <InputComponent 
            defaultValue='hello' 
            className='my-input'
            onChange={onChange} 
        /> 
    );
    // check default value
    const defaultValue = wrapper.prop('defaultValue');
    expect(defaultValue).toBe('hello');
    // simulate onChange and check onChange Mock
    wrapper.simulate('change', { target: { value: 'bye' } })
    expect(onChange.mock.calls).toEqual([ [{ target: {value: 'bye'}}] ]);
}

// start testing
describe('Testing Inputs', () => {
    it('input text', () => {
        testSimpleInputs(Text);
    });

    it('input email', () => {
        testSimpleInputs(Email);
    });

    it('input password', () => {
        testSimpleInputs(Pass);
    });

    it('input generic <In />', () => {
        testSimpleInputs(GenericInput);
    });

    // it('input icon', () => {

    // });

    // it('input labeled', () => {
    //     const onChange = jest.fn();
    //     const wrapper = shallow(<LabeledInput  />)
    // });
})

