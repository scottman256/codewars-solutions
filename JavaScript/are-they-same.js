function comp(array1, array2) {
    if (!array1 || !array2 || array1.length != array2.length) return false;
  
    array1.sort(function(a, b){return a-b});
    array2.sort(function(a, b){return a-b});

    for (var i = 0; i < array1.length; i++)
    if (array1[i] * array1[i] != array2[i]) return false;

    return true;
}