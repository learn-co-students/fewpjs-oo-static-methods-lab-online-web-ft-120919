class Formatter {
  //add static methods here
  static capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1)

  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
   
  let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    words = []
  }
}