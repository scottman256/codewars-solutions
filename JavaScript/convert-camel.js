function toCamelCase(str){
    let wordArray = str.replace(/_/g,"-");
    var position;
    while (wordArray.indexOf("-") != -1)
    {
        position = wordArray.indexOf("-");
        wordArray = wordArray.replace("-","");
        wordArray= wordArray.substr(0, position) + wordArray.charAt(position).toUpperCase() + wordArray.substr(position + 1, wordArray.length)
    }
    return wordArray;
}