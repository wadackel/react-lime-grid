import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container';


describe('<Container />', () => {
  test('Should be render children', () => {
    const child = <div id="foo">Child</div>;
    let wrapper = shallow(
      <Container>
        {child}
      </Container>
    );

    expect(wrapper.children().equals(child)).toBe(true);

    wrapper = shallow(
      <Container />
    );

    expect(wrapper.children().exists()).toBe(false);
  });


  test('Should be change tag', () => {
    const wrapper = shallow(
      <Container />
    );

    expect(wrapper.is('div')).toBe(true);

    wrapper.setProps({ tagName: 'span' });
    expect(wrapper.is('span')).toBe(true);
  });


  test('Should be fluid', () => {
    const wrapper = shallow(
      <Container
        fluid
      />
    );

    expect(wrapper.is('div.container-fluid')).toBe(true);
    expect(wrapper.is('div.container')).toBe(false);
  });


  test('Should be pass original className', () => {
    const wrapper = shallow(
      <Container
        className="foo"
      />
    );

    expect(wrapper.is('div.foo.container')).toBe(true);

    wrapper.setProps({ className: 'foo bar baz' });
    expect(wrapper.is('div.foo.bar.baz.container')).toBe(true);

    wrapper.setProps({
      className: 'hoge fuga',
      fluid: true,
    });
    expect(wrapper.is('div.hoge.fuga.container-fluid')).toBe(true);
  });
});
