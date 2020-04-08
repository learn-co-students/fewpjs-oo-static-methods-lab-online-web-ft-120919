class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'" "]+/g, '');
  }

  static titleize(string) {
    let array = string.split(" ")
    let newString = []
    newString.push(Formatter.capitalize(array.shift()))
    
    array.forEach(word => {
      if (word === 'of') {
        newString.push(word)
      }
      else if (word === 'the') {
        newString.push(word)
      }
      else if (word === 'and') {
        newString.push(word)
      }
      else if (word === 'a') {
        newString.push(word)
      }
      else if (word === 'an') {
        newString.push(word)
      }
      else if (word === 'but') {
        newString.push(word)
      }
      else if (word === 'for') {
        newString.push(word)
      }
      else if (word === 'at') {
        newString.push(word)
      }
      else if (word === 'by') {
        newString.push(word)
      }
      else if (word === 'from') {
        newString.push(word)
      }
      else {
        newString.push(Formatter.capitalize(word))
      }
    });
    return newString.join(" ")
  }

}


// string.split(" ").forEach(word => {
//   if (word === "the" || "a" || "an" || "but" || "of" || "and" || "for" || "at" || "by" || "from") {
//     newString.push(word)
//   }
//   else {
//     newString.push(Formatter.capitalize(word))
//   }
// })