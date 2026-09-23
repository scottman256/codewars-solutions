function order(words){
  let wordsArray = words.split(" ");
  var solution = [];
  for (let i = 0; i < wordsArray.length; i++)
    solution[parseInt(wordsArray[i].replace(/\D/g,''))-1] = wordsArray[i];
  return solution.join(" ");
}