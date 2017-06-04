import colClassNames from '../colClassNames';

describe('colClassNames()', () => {
  test('Should be create classes', () => {
    expect(colClassNames('col-%', null))
      .toEqual({});

    expect(colClassNames('col-%', undefined))
      .toEqual({});

    expect(colClassNames('col-%', 1))
      .toEqual({ 'col-1': true });

    expect(colClassNames('col-%', 1))
      .toEqual({ 'col-1': true });

    expect(colClassNames('col-%', 5))
      .toEqual({ 'col-5': true });
  });
});
