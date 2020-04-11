class Formatter {
  //add static methods here
  static capitalize(string){
    return string.slice(0).toUppercase() + string.slice(1)

  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
}