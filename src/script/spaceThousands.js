export default (inputValue) => {
  // Clears put cluttering (text), sets decimal from , to . and spaces each thousands.
  let labelBeforeDecimal = ''
  let labelAfterDecimal = ''
  let label = ''
  let pastDecimal = false
  let counter = 0
  inputValue = String(inputValue)
  let isNegative = (inputValue[0] === '-')

  // Split up in before and after decimal
  for (let i = 0; i < inputValue.length; i++) {
    let character = inputValue[i]

    if (isNaN(Number(character)) || character === ' ') {
      if (character === ',') character = '.'
      else if (character !== '.') continue
    };

    if (character === '.') pastDecimal = true

    if (pastDecimal) labelAfterDecimal += character
    else labelBeforeDecimal += character
  };

  // Split up before decimal in thousands
  for (let i = labelBeforeDecimal.length - 1; i >= 0; i--) {
    let character = labelBeforeDecimal[i]
    label = character + label
    counter++

    if (counter % 3 === 0 && i !== 0) label = ' ' + label
  };

  label += labelAfterDecimal
  if (isNegative) label = '-' + label

  return label
}
