class Index {
  calculateTax(income, taxClass) {
    return income * this.determineIncomeTaxRate(income, taxClass);

  }

  determineIncomeTaxRate(income, taxClass) {
    let taxRate = 1;
    if (taxClass === 'couple') {
      taxRate = 0.95;
    } else if (taxClass === 'family') {
      taxRate = 0.9;
    }

    if (income < 20000) {
      return 0;
    }

    if (income < 60000) {
      return 0.2 * taxRate;
    }

    if (income < 100000) {
      return 0.37 * taxRate;
    }

    if (income >= 100000) {
      return 0.55 * taxRate;
    }

  }
}
