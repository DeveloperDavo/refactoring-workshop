describe("index", () => {
  let index;

  beforeEach(() => {
    index = new Index();
  });

  it("should calculate taxes", () => {
    expect(index.calculateTax(19000, 'family')).toBe(0);
    expect(index.calculateTax(35000, 'single')).toBeCloseTo(0.2 * 35000);
    expect(index.calculateTax(61000, 'couple')).toBeCloseTo(0.37 * 61000 * 0.95);
    expect(index.calculateTax(1000000, 'family')).toBeCloseTo(0.55 * 1000000 * 0.90);
  });
});