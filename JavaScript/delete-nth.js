function deleteNth(arr,n){
  var solution =[]; 
  var frequencyTable = { };
  for (let i = 0; i < arr.length; i++)
    {   
      if(arr[i] in frequencyTable) 
        frequencyTable[arr[i]]++;
      else 
       frequencyTable[arr[i]] = 1;
        
      if (frequencyTable[arr[i]] <= n)
          solution.push(arr[i]);
    }
  return solution;
}