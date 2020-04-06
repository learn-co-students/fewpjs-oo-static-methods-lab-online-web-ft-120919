class Formatter {
  //add static methods here
  static capitalize(str){
    return str.slice(0,1).toUpperCase() + str.slice(1);
  }//capitalize

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }//sanitize

  static titleize(str){
    let nonCapWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let strArr = str.split(' ');
    let firstWord = Formatter.capitalize(strArr[0]);
    strArr = strArr.slice(1)
    let titleStrArr = strArr.map( function(word) {
      if (nonCapWords.includes(word)) {
        return word;
      } else {
        return Formatter.capitalize(word);
      }
    })
    return `${firstWord} ${titleStrArr.join(' ')}`;
  }//titleize
}//end class