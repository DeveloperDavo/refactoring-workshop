class Index {
  calculateTax(income, taxClass) {
    const classTaxRate = this.determineClassTaxRate(taxClass);
    const incomeTaxRate = this.determineIncomeTaxRate(income);
    return income * classTaxRate * incomeTaxRate;
  }

  calculateCharity(incomeAfterTax, taxClass) {
    const classTaxRate = this.determineClassTaxRate(taxClass);
    const charityRate = this.determineCharityRate(incomeAfterTax);
    return incomeAfterTax * classTaxRate * charityRate;
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

  determineCharityRate(incomeAfterTax) {
    if (incomeAfterTax < 20000) {
      return 0;
    }

    if (incomeAfterTax < 60000) {
      return 0.02;
    }

    if (incomeAfterTax < 100000) {
      return 0.037;
    }

    if (incomeAfterTax >= 100000) {
      return 0.055;
    }
  }
}
