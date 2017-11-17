describe("index", () => {
  let index;

  beforeEach(() => {
    index = new Index();
  });

  it("should calculate net income", () => {
    expect(index.calculateNetIncome(19000, 'family')).toBe(19000);
    expect(index.calculateNetIncome(35000, 'single')).toBeCloseTo(35000 - (0.2 + 0.02) * 35000);
    expect(index.calculateNetIncome(61000, 'couple')).toBeCloseTo(61000 - (0.37 + 0.037) * 61000 * 0.95);
    expect(index.calculateNetIncome(1000000, 'family')).toBeCloseTo(1000000 - (0.55 + 0.055) * 1000000 * 0.90);
  });

  it("should calculate charity", () => {
    expect(index.calculateCharity(19000, 'family')).toBe(0);
    expect(index.calculateCharity(35000, 'single')).toBeCloseTo(0.02 * 35000);
    expect(index.calculateCharity(61000, 'couple')).toBeCloseTo(0.037 * 61000 * 0.95);
    expect(index.calculateCharity(1000000, 'family')).toBeCloseTo(0.055 * 1000000 * 0.90);
  });

  it("should calculate income taxes", () => {
    expect(index.calculateTax(19000, 'family')).toBe(0);
    expect(index.calculateTax(35000, 'single')).toBeCloseTo(0.2 * 35000);
    expect(index.calculateTax(61000, 'couple')).toBeCloseTo(0.37 * 61000 * 0.95);
    expect(index.calculateTax(1000000, 'family')).toBeCloseTo(0.55 * 1000000 * 0.90);
  });

  it("should determine charity rate", () => {
    expect(index.determineCharityRate(19999)).toBe(0);
    expect(index.determineCharityRate(20000)).toBe(0.02);
    expect(index.determineCharityRate(60000)).toBe(0.037);
    expect(index.determineCharityRate(1000000)).toBe(0.055);
    expect(index.determineCharityRate(1000001)).toBe(0.055);
  });

});