describe("index", () => {
  let index;

  beforeEach(() => {
    index = new Index();
  });

  it("should determine tax rate from income", () => {
    const taxClass = 'single';
    expect(index.determineTaxRateFromIncome(19999, taxClass)).toBe(0);
    expect(index.determineTaxRateFromIncome(20000, taxClass)).toBe(0.2);
    expect(index.determineTaxRateFromIncome(60000, taxClass)).toBe(0.37);
    expect(index.determineTaxRateFromIncome(100000, taxClass)).toBe(0.55);
    expect(index.determineTaxRateFromIncome(100001, taxClass)).toBe(0.55);
  });

  it("should determine tax rate from income when couple", () => {
    const taxClass = 'couple';
    const taxRate = 0.95;
    expect(index.determineTaxRateFromIncome(19999, taxClass)).toBeCloseTo(0);
    expect(index.determineTaxRateFromIncome(20000, taxClass)).toBeCloseTo(0.2 * taxRate);
    expect(index.determineTaxRateFromIncome(60000, taxClass)).toBeCloseTo(0.37 * taxRate);
    expect(index.determineTaxRateFromIncome(100000, taxClass)).toBeCloseTo(0.55 * taxRate);
    expect(index.determineTaxRateFromIncome(100001, taxClass)).toBeCloseTo(0.55 * taxRate);
  });
});