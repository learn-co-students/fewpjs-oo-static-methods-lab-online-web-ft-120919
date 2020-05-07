class Formatter {
  static capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase())
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const smalls = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    return string.split(" ").map((w, i) => {
      if (!smalls.includes(w)) {
        return Formatter.capitalize(w)
      } else {
        return i == 0 ? Formatter.capitalize(w) : w 
      }
    }).join(" ")
  }
}