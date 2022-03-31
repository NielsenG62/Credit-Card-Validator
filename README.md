# Practice: Credit Card Validator, Roman Numerals, or Cryptosquare


## Steps:

``` javascript

Describe: luhnDouble()

Test: "It will take the string and make an array"
Code: luhnDouble("4102")
expected output: ['4','1','0','2']

Test: "it will double every other number"
Code: luhnDouble("4102")
expected output: ['4','2','0','4']

Describe: luhnAddDouble()

Test: "it will add together each digit of double digit numbers"
Code: luhnAddDouble("6789")
expected output: ['6','5','8','9']