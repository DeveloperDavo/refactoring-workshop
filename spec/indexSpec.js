describe("index", () => {
  let index;

  beforeEach(() => {
    index = new Index();
  });

  it("should determine income tax rate", () => {
    const taxClass = 'single';
    expect(index.determineIncomeTaxRate(19999, taxClass)).toBe(0);
    expect(index.determineIncomeTaxRate(20000, taxClass)).toBe(0.2);
    expect(index.determineIncomeTaxRate(60000, taxClass)).toBe(0.37);
    expect(index.determineIncomeTaxRate(100000, taxClass)).toBe(0.55);
    expect(index.determineIncomeTaxRate(100001, taxClass)).toBe(0.55);
  });

  it("should determine income tax rate for couples", () => {
    const taxClass = 'couple';
    const taxRate = 0.95;
    expect(index.determineIncomeTaxRate(19999, taxClass)).toBeCloseTo(0);
    expect(index.determineIncomeTaxRate(20000, taxClass)).toBeCloseTo(0.2 * taxRate);
    expect(index.determineIncomeTaxRate(60000, taxClass)).toBeCloseTo(0.37 * taxRate);
    expect(index.determineIncomeTaxRate(100000, taxClass)).toBeCloseTo(0.55 * taxRate);
    expect(index.determineIncomeTaxRate(100001, taxClass)).toBeCloseTo(0.55 * taxRate);
  });

  it("should determine income tax rate for families", () => {
    const taxClass = 'family';
    const taxRate = 0.90;
    expect(index.determineIncomeTaxRate(19999, taxClass)).toBeCloseTo(0);
    expect(index.determineIncomeTaxRate(20000, taxClass)).toBeCloseTo(0.2 * taxRate);
    expect(index.determineIncomeTaxRate(60000, taxClass)).toBeCloseTo(0.37 * taxRate);
    expect(index.determineIncomeTaxRate(100000, taxClass)).toBeCloseTo(0.55 * taxRate);
    expect(index.determineIncomeTaxRate(100001, taxClass)).toBeCloseTo(0.55 * taxRate);
  });

});