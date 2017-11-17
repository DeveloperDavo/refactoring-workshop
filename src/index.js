class Index {
  calculate(income, taxClass) {
    let classTaxRate = 1;
    if (taxClass === 'single') {
      classTaxRate = 1;
    }

    if (taxClass === 'couple') {
      classTaxRate = 0.95;
    }

    if (taxClass === 'family') {
      classTaxRate = 0.9;
    }

    const incomeTaxRate = this.determineIncomeTaxRate(income);
    const tax = income * classTaxRate * incomeTaxRate;
    const incomeAfterTax = income - tax;
    const charityRate = this.determineCharityRate(income);
    const charity = income * classTaxRate * charityRate;
    return incomeAfterTax - charity;
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
