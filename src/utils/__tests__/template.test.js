import template from '../template';

describe('template()', () => {
  test('Should be replace %', () => {
    expect(template('foo-%-baz', 'bar')).toBe('foo-bar-baz');
    expect(template('%%%', 'foo')).toBe('foo%%');
    expect(template('', 'foo')).toBe('');
  });
});
