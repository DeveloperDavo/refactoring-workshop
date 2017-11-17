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

    let incomeTaxRate = 0;
    if (income < 20000) {
      incomeTaxRate = 0;
    } else if (income < 60000) {
      incomeTaxRate = 0.2;
    } else if (income < 100000) {
      incomeTaxRate = 0.37;
    } else if (income >= 100000) {
      incomeTaxRate = 0.55;
    }

    const tax = income * classTaxRate * incomeTaxRate;
    const incomeAfterTax = income - tax;

    let charityRate = 0;
    if (income < 20000) {
      charityRate = 0;
    } else if (income < 60000) {
      charityRate = 0.02;
    } else if (income < 100000) {
      charityRate = 0.037;
    } else if (income >= 100000) {
      charityRate = 0.055;
    }

    const charity = income * classTaxRate * charityRate;
    
    return incomeAfterTax - charity;
  }
}
