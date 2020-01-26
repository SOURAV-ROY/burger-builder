import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter});

describe('<NavigationItems/>', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallow(<NavigationItems/>);
    });

    it('should render two <navigationItem /> element if not Authenticated', () => {

        // const wrapper = shallow(<NavigationItems/>);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <navigationItem /> element if Authenticated', () => {

        wrapper = shallow(<NavigationItems isAuthenticated/>);

        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
});
