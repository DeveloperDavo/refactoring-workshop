class Index {

  /**
   * Calculates the income after taxes and paying charity for one year.
   * Income tax is determined by the tax class and income before tax
   * and charity is determined by the the tax and income before tax.
   *
   *
   * @param income - income before tax
   * @param taxClass - single, couple or family
   * @returns {number} income after taxes and charity as a number
   */
  calculate(income, taxClass) {

    // calculate class rate
    let rate1 = 1;
    if (taxClass === 'single') {
      rate1 = 1;
    }

    if (taxClass === 'couple') {
      rate1 = 0.95;
    }

    if (taxClass === 'family') {
      rate1 = 0.9;
    }

    // calculate income tax rate
    let rate2 = 0;
    if (income < 20000) {
      rate2 = 0;
    } else if (income < 60000) {
      rate2 = 0.2;
    } else if (income < 100000) {
      rate2 = 0.37;
    } else if (income >= 100000) {
      rate2 = 0.55;
    }

    // calculate income tax
    const tax = income * rate1 * rate2;

    // calculate income after tax
    const leftOver = income - tax;

    // calculate charity rate
    let rate3 = 0;
    if (income < 20000) {
      rate3 = 0;
    } else if (income < 60000) {
      rate3 = 0.02;
    } else if (income < 100000) {
      rate3 = 0.037;
    } else if (income >= 100000) {
      rate3 = 0.055;
    }

    // calculate charity
    const charity = income * rate1 * rate3;

    // calculate net income
    return leftOver - charity;
  }
}
