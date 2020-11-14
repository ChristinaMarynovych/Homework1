const SCARF = 15.678; 
const SHOES = 123.965; 
const COAT = 90.2345;
const sumOfGoods = SCARF + SHOES + COAT;
const aproxSumOfGoods = Math.floor(SCARF) + Math.floor(SHOES) + Math.floor(COAT);
const hundredsSum = Math.ceil(aproxSumOfGoods/100)*100;
const isEven = sumOfGoods % 2 === 0;
const CUSTOMERS_MONEY = 500;
const changeFromPayment = CUSTOMERS_MONEY - sumOfGoods;
const averageAprox = (sumOfGoods / 3).toFixed(2);
const randomDiscount = (Math.random()*50).toFixed(2);
const sumWithDiscount = ((1 - randomDiscount/100) * sumOfGoods).toFixed(2);
const netProfit = (sumOfGoods/2 - sumOfGoods*randomDiscount/100).toFixed(2);
 console.log('the highest prise in shop is ' + Math.max(SCARF, SHOES, COAT));
 console.log('the lowest prise in shop is ' + Math.min(SCARF, SHOES, COAT));
 console.log('the total sum of money spent on goods is ' + sumOfGoods);
 console.log('the approximately sum of money without coins is ' + aproxSumOfGoods);
 console.log('the sum of money which is rounded number to hundreds is ' + hundredsSum);
 console.log('is the number is even? - ' + isEven);
 console.log('Don\'t forget to take ' + changeFromPayment + ' \$');
 console.log('the average amount which is rounded to the second sign after comma is ' + averageAprox);
 console.log('CONGRATULATIONS \! your discount is ' + randomDiscount + ' \%!');
 console.log('you need to pay ' + sumWithDiscount);
 console.log('Our profit is ' + netProfit);

//advavced
console.log(`the highest prise in shop is ${Math.max(SCARF, SHOES, COAT)}
the lowest prise in shop is ${Math.min(SCARF, SHOES, COAT)}
the total sum of money spent on goods is ${sumOfGoods}
the approximately sum of money without coins is ${aproxSumOfGoods}
the sum of money which is rounded number to hundreds is ${hundredsSum}
is the number is even? - ${isEven}
Don\'t forget to take ${changeFromPayment} $
the average amount which is rounded to the second sign after comma is ${averageAprox}
CONGRATULATIONS ! your discount is ${randomDiscount} %
you need to pay ${sumWithDiscount}
Our profit is ${netProfit}`);
