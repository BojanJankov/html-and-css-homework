let priceOfThePhones = 119.95;
let numberOfPhones = 30;
let resultPriceOfPhonesWithTax = priceOfThePhones * numberOfPhones;
let resultPriceOfThePhonesWithoutTax = (resultPriceOfPhonesWithTax * 5) / 100;
let finalResultOfPrice =
  priceOfThePhones * numberOfPhones - resultPriceOfThePhonesWithoutTax;

console.log(finalResultOfPrice);
