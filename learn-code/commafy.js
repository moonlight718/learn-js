function commafy(number) {
  const numberArr = ('' + number).split('.');
  const integer = numberArr[0] || '';
  const decimal = numberArr[1] || '';

  const integerArr = integer.split('');
  for (let i = integerArr.length - 3; i > 0; i -= 3) {
    integerArr.splice(i, 0, ',');
  }

  return integerArr.join('') + '.' + decimal;
}

console.log(commafy(1609.11));