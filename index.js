class Formatter {
  
  static capitalize(string) {
    let letter = string[0].toUpperCase()
    return letter.concat('', string.slice(1))
  }

  static sanitize(string) {
    return string.replace(/[^0-9a-zA-Z-' ]/gi, '')
  }

  static titleize(string) {
    let array = string.split(' ')
    const noNoWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return array.map((word, index) => {
      if (!noNoWords.includes(word) || index === 0) {
        let letter = word[0].toUpperCase()
        return letter.concat('', word.slice(1))
      } else {
        return word
      }
    }).join(' ')
  }

}