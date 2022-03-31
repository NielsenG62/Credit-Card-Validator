function luhnDouble(input) {
  const card = input.split('')
  const doubled = [];
  for (i = 0; i < card.length; i++) {
    if (i % 2 === 0) {
      doubled.push(card[i] * 1)
    }
    else {
      doubled.push(card[i] * 2)
    }
  }
  return doubled;
}

function luhnAddDouble(input) {
  let doubled = luhnDouble(input)
  for (i = 0; i < doubled.length; i++) {
    if (doubled[i] >= 10) {
      let splitDouble = doubled[i].toString().split('');
      let firstDigit = number(splitDouble[0])
      let secondDigit = number(splitDouble[1])
    }
  }
}



