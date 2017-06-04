import React from 'react';
import { shallow } from 'enzyme';
import Col from '../Col';
import breakpoints from './breakpoints';


describe('<Col />', () => {
  test('Should be render children', () => {
    const child = <div id="sample">Sample</div>;
    let wrapper = shallow(
      <Col>
        {child}
      </Col>
    );

    expect(wrapper.children().equals(child)).toBe(true);

    wrapper = shallow(
      <Col />
    );

    expect(wrapper.children().exists()).toBe(false);
  });


  test('Should be change tag', () => {
    const wrapper = shallow(<Col />);

    expect(wrapper.is('div')).toBe(true);

    wrapper.setProps({ tagName: 'span' });
    expect(wrapper.is('span')).toBe(true);
  });


  test('Should be set "col" by default', () => {
    const wrapper = shallow(<Col />);
    expect(wrapper.is('div.col')).toBe(true);
  });


  test('Should be set classes', () => {
    breakpoints.forEach((breakpoint) => {
      for (let i = 1; i <= 12; i += 1) {
        const wrapper = shallow(<Col />);

        wrapper.setProps({
          [breakpoint]: i,
        });

        expect(wrapper.is(`div.col-${breakpoint}-${i}`)).toBe(true);
        expect(wrapper.is('div.col')).toBe(false);
      }

      for (let i = 1; i <= 11; i += 1) {
        const wrapper = shallow(<Col />);

        wrapper.setProps({
          [`${breakpoint}Offset`]: i,
        });

        expect(wrapper.is(`div.col-${breakpoint}-offset-${i}`)).toBe(true);
      }
    });

    [
      'first',
      'last',
    ].forEach((prop) => {
      breakpoints.forEach((breakpoint) => {
        const wrapper = shallow(<Col />);
        wrapper.setProps({ [prop]: breakpoint });
        expect(wrapper.is(`div.col.col-${breakpoint}-${prop}`)).toBe(true);
      });

      const wrapper = shallow(<Col />);
      const classNames = breakpoints.map(s => `col-${s}-${prop}`).join('.');
      wrapper.setProps({ [prop]: breakpoints });
      expect(wrapper.is(`div.col.${classNames}`)).toBe(true);
    });
  });


  test('Should be set "first"', () => {
    const wrapper = shallow(<Col />);
    wrapper.setProps({ first: true });
    expect(wrapper.is('div.col.col-first')).toBe(true);
  });


  test('Should be set "last"', () => {
    const wrapper = shallow(<Col />);
    wrapper.setProps({ last: true });
    expect(wrapper.is('div.col.col-last')).toBe(true);
  });


  test('Should be pass original className', () => {
    let wrapper = shallow(
      <Col
        className="foo"
      />
    );

    expect(wrapper.is('div.foo.col')).toBe(true);

    wrapper = shallow(
      <Col
        className="foo bar baz"
        xs={12}
        sm={10}
        md={8}
        lg={6}
        xl={4}
        first={['xs', 'xl']}
        last="md"
      />
    );

    expect(wrapper.is(`div.${[
      'foo.bar.baz',
      'col-xs-12',
      'col-sm-10',
      'col-md-8',
      'col-lg-6',
      'col-xl-4',
      'col-xs-first',
      'col-xl-first',
      'col-md-last',
    ].join('.')}`)).toBe(true);
  });
});
