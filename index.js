class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const badWordArray = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const stringArray = string.split(' ');
    const newStringArray = []

    for (let word of stringArray) {
      if (word === stringArray[0]) {
        newStringArray.push(Formatter.capitalize(word))
      } else if (!badWordArray.includes(word)) {
        newStringArray.push(Formatter.capitalize(word))
      } else {
        newStringArray.push(word)
      }
    }

    return newStringArray.join(' ')
  }
}