class Index {
  calculateTax(income, taxClass) {
    let classTaxRate = this.determineClassTaxRate(taxClass);
    let incomeTaxRate = this.determineIncomeTaxRate(income);
    return income * classTaxRate * incomeTaxRate;
  }

  determineIncomeTaxRate(income) {

    if (income < 20000) {
      return 0;
    }

    if (income < 60000) {
      return 0.2;
    }

    if (income < 100000) {
      return 0.37;
    }

    if (income >= 100000) {
      return 0.55;
    }

  }

  determineClassTaxRate(taxClass) {
    if (taxClass === 'single') {
      return 1;
    }

    if (taxClass === 'couple') {
      return 0.95;
    }

    if (taxClass === 'family') {
      return 0.9;
    }

  }

  determineCharityRate(netIncome) {
    if (netIncome < 20000) {
      return 0;
    }

    if (netIncome < 60000) {
      return 0.02;
    }

    if (netIncome < 100000) {
      return 0.037;
    }

    if (netIncome >= 100000) {
      return 0.055;
    }
  }
}
