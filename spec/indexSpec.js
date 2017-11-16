describe("index", () => {
  let index;

  beforeEach(() => {
    index = new Index();
  });

  it("should determine tax rate to be 20% for income less than 20k", () => {
    const income = 19999;
    expect(index.determineTaxRateFromIncome(income)).toBe(0.2);
  });
});