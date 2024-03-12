const letterFrequency = (phrase) => {
  // letterFrequency('haha') {'h' : 2, 'a' : 2}
  console.log(phrase)
  // Make a frequency object
  let frequency = {}
  for (const letter of phrase) {
    // Check if letter exists in frequency
    if (letter in frequency) {
      // Increment the value by +1
      frequency[letter]++
      // Otherwise set the value to 1
    } else {
      frequency[letter] = 1
    }
  }
  return frequency
}

// console.log(letterFrequency('this shit is not easy, but ill get there eventually'))

// wordFrequency('lol, what is going on?') {'lol' : 1, 'what' : 1, 'is' : 1, 'going' : 1, 'on''}
const wordFrequency = (phrase) => {
  const words = phrase.split(' ')
  return letterFrequency(words)
}

console.log(wordFrequency('lol, what is going on?'))