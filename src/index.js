class Index {
  calculateNetIncome(income, taxClass) {
    const incomeAfterTax = income - this.calculateTax(income, taxClass);
    return incomeAfterTax - this.calculateCharity(income, taxClass);
  }

  calculateTax(income, taxClass) {
    const classTaxRate = this.determineClassTaxRate(taxClass);
    const incomeTaxRate = this.determineIncomeTaxRate(income);
    return income * classTaxRate * incomeTaxRate;
  }

  calculateCharity(income, taxClass) {
    const classTaxRate = this.determineClassTaxRate(taxClass);
    const charityRate = this.determineCharityRate(income);
    return income * classTaxRate * charityRate;
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

  determineCharityRate(income) {
    if (income < 20000) {
      return 0;
    }

    if (income < 60000) {
      return 0.02;
    }

    if (income < 100000) {
      return 0.037;
    }

    if (income >= 100000) {
      return 0.055;
    }
  }
}
