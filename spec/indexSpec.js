describe("index", () => {
  const Index = require ('../src/Index');
  let index;

  beforeEach(() => {
    index = new Index();
  });

  it("Index should exist", () => {
    expect(index).toBeTruthy();
  });
});