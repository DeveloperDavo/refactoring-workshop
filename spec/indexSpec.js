describe("index", () => {
  let index;

  beforeEach(() => {
    index = new Index();
  });

  it("should calculate net income", () => {
    expect(index.calculate(19000, 'family')).toBe(19000);
    expect(index.calculate(35000, 'single')).toBeCloseTo(35000 - (0.2 + 0.02) * 35000);
    expect(index.calculate(61000, 'couple')).toBeCloseTo(61000 - (0.37 + 0.037) * 61000 * 0.95);
    expect(index.calculate(1000000, 'family')).toBeCloseTo(1000000 - (0.55 + 0.055) * 1000000 * 0.90);
  });
});