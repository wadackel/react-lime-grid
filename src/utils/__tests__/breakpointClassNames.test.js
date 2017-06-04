import breakpointClassNames from '../breakpointClassNames';

describe('breakpointClassNames()', () => {
  test('Should be create classes', () => {
    expect(breakpointClassNames('row-%-start', null))
      .toEqual({});

    expect(breakpointClassNames('row-%-start', undefined))
      .toEqual({});

    expect(breakpointClassNames('row-%-start', []))
      .toEqual({});

    expect(breakpointClassNames('row-%-start', 'xs'))
      .toEqual({ 'row-xs-start': true });

    expect(breakpointClassNames('row-%-start', 'sm'))
      .toEqual({ 'row-sm-start': true });

    expect(breakpointClassNames('foo-%', 'lg'))
      .toEqual({ 'foo-lg': true });

    expect(breakpointClassNames('row-%-around', ['md']))
      .toEqual({ 'row-md-around': true });

    expect(breakpointClassNames('row-%-around', ['xs', 'xl']))
      .toEqual({ 'row-xs-around': true, 'row-xl-around': true });
  });
});
