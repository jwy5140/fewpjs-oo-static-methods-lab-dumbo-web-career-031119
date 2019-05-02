class Formatter {

  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace(/[^\w\s'-]/g,"")
  }
  static titleize(str){
    let arr = str.split(" ")    
    let noCaps = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    arr.forEach(function (word,n){
      if (n === 0 || !noCaps.includes(word))
      {
        arr[n] = word.charAt(0).toUpperCase() + word.slice(1)
      }
    }
    )
    return arr.join(" ")
  }
}