const scarf = 15.678; 
const shoes = 123.965; 
const coat = 90.2345;
const sumOfGoods = scarf + shoes + coat;
const aproxSumOfGoods = Math.floor(scarf) + Math.floor(shoes) + Math.floor(coat);
const hundredsSum = Math.floor(aproxSumOfGoods/100)*100;
const isEven = sumOfGoods % 2 == 0;
const customersMoney = 500;
const changeFromPayment = customersMoney - sumOfGoods;
const averageAprox = (sumOfGoods / 3).toFixed(2);
const randomDiscount = Math.random()*50;
const sumWithDiscount = ((1 - randomDiscount/100) * sumOfGoods).toFixed(2);
const netProfit = sumOfGoods/2 - sumOfGoods*randomDiscount/100;
 console.log('the highest prise in shop is ' + Math.max(scarf, shoes, coat));
 console.log('the lowest prise in shop is ' + Math.min(scarf, shoes, coat));
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
console.log(`the highest prise in shop is ${Math.max(scarf, shoes, coat)}
the lowest prise in shop is ${Math.min(scarf, shoes, coat)}
the total sum of money spent on goods is ${scarf + shoes + coat}
the approximately sum of money without coins is ${Math.floor(scarf) + Math.floor(shoes) + Math.floor(coat)}
the sum of money which is rounded number to hundreds is ${Math.floor((Math.floor(scarf) + Math.floor(shoes) + Math.floor(coat))/100)*100}
is the number is even? - ${(scarf + shoes + coat) % 2 == 0}
Don\'t forget to take ${customersMoney - (scarf + shoes + coat)} $
the average amount which is rounded to the second sign after comma is ${((scarf + shoes + coat) / 3).toFixed(2)}
CONGRATULATIONS ! your discount is ${randomDiscount} %
you need to pay ${((1 - randomDiscount/100) * (scarf + shoes + coat)).toFixed(2)}
Our profit is ${(scarf + shoes + coat)/2 - (scarf + shoes + coat)*randomDiscount/100}`);
