import React from 'react';
import { shallow } from 'enzyme';
import Row from '../Row';
import breakpoints from './breakpoints';


describe('<Row />', () => {
  test('Should be render children', () => {
    const child = <div id="sample">Sample</div>;
    let wrapper = shallow(
      <Row>
        {child}
      </Row>
    );

    expect(wrapper.children().equals(child)).toBe(true);

    wrapper = shallow(<Row />);

    expect(wrapper.children().exists()).toBe(false);
  });


  test('Should be change tag', () => {
    const wrapper = shallow(<Row />);

    expect(wrapper.is('div')).toBe(true);

    wrapper.setProps({ tagName: 'span' });
    expect(wrapper.is('span')).toBe(true);
  });


  test('Should be set classes', () => {
    [
      'start',
      'center',
      'end',
      'top',
      'middle',
      'bottom',
      'around',
      'between',
      'reverse',
    ].forEach((prop) => {
      breakpoints.forEach((breakpoint) => {
        const wrapper = shallow(<Row />);
        wrapper.setProps({ [prop]: breakpoint });
        expect(wrapper.is(`div.row.row-${breakpoint}-${prop}`)).toBe(true);
      });

      const wrapper = shallow(<Row />);
      const classNames = breakpoints.map(s => `row-${s}-${prop}`).join('.');
      wrapper.setProps({ [prop]: breakpoints });
      expect(wrapper.is(`div.row.${classNames}`)).toBe(true);
    });
  });


  test('Should be set multiple classes', () => {
    const wrapper = shallow(<Row />);

    wrapper.setProps({
      start: 'xl',
      center: ['xs', 'md'],
    });

    expect(wrapper.is('div.row.row-xl-start.row-xs-center.row-md-center')).toBe(true);
  });


  test('Should be pass original className', () => {
    const wrapper = shallow(
      <Row
        className="foo"
      />
    );

    expect(wrapper.is('div.foo.row')).toBe(true);

    wrapper.setProps({
      className: 'foo bar baz',
      start: ['xs', 'xl'],
      around: 'md',
    });

    expect(wrapper.is(`div.${[
      'foo.bar.baz',
      'row',
      'row-xs-start',
      'row-xl-start',
      'row-md-around',
    ].join('.')}`)).toBe(true);
  });
});
