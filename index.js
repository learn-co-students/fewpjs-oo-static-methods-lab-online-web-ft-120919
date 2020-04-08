class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\ ]+/g, ''); 
  }

  static titleize(string) {
    let s = Formatter.capitalize(string)
    let exceptions = ['the',  'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    console.log(s)
    let array = s.split(" ")
    let capitalizedArray = array.map(function(word) {
      if (!exceptions.includes(word)){
        return Formatter.capitalize(word)
      } else {
        return word
      }
    })
    return capitalizedArray.join(' ')
  }

}