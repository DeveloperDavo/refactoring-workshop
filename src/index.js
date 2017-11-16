class Index {

  determineTaxRateFromIncome(income) {
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
}
