describe("index", () => {
  let index;

  beforeEach(() => {
    index = new Index();
  });

  it("should determine tax rate from income", () => {
    expect(index.determineTaxRateFromIncome(19999)).toBe(0);
    expect(index.determineTaxRateFromIncome(20000)).toBe(0.2);
    expect(index.determineTaxRateFromIncome(60000)).toBe(0.37);
    expect(index.determineTaxRateFromIncome(100000)).toBe(0.55);
    expect(index.determineTaxRateFromIncome(100001)).toBe(0.55);
  });
});