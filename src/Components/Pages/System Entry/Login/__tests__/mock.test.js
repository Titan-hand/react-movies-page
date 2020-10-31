/**
 * file for mock and asynchronous practice
 */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// for update the state
import { act } from 'react-dom/test-utils';
// component
import FetchDataAndShow from '../mockTestFile';
// mocks
import axiosMock from 'axios';

configure({ adapter: new Adapter() });


describe('<FetchDataAndShow />', () => {
    test('fetching and display data', async () => {
        // set the return data to this particular test.
        axiosMock.get.mockResolvedValueOnce({ data: { movies: ['movie1', 'movie2'] } });
        let wrapper;
        await act(async () => {
            wrapper = mount(<FetchDataAndShow url="/some-endpoint" />)
            // loading text
            expect(wrapper.text()).toEqual("loading");
        });
        expect(axiosMock.get).toHaveBeenCalledWith("/some-endpoint");
        wrapper.update()
        wrapper.find('#container').simulate('click');  
    })
})