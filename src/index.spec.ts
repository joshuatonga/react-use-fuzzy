import { hello } from './';

describe('hello', () => {
  it('should hello', () => {
    expect(hello()).toEqual(1);
  });
});
