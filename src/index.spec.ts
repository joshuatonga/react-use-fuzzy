const hello = () => 1;

describe('hello world', () => {
  it('should greet', () => {
    expect(hello()).toEqual(1);
  });
});
