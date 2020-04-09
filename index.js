class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'' ']+/g, '')
  }

  static titleize(string) {
    let execeptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titlecase = []
    let words = string.split(' ')
    for (let i = 0; i < words.length; i++) {
      if (i == 0) {
        titlecase.push(this.capitalize(words[i]))
      } else {
        if (execeptions.includes(words[i])) {
          titlecase.push(words[i])
        } else {
          titlecase.push(this.capitalize(words[i]))
        }
      }
    }
    return titlecase.join(" ")
  }
}