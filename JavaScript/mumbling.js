function accum(s) {
	var solution = "";
  for (let i=0; i < s.length; i++)
    {
      solution += s[i].toUpperCase();
      for (let j = 1; j <= i; j++)
        {
          solution += s[i].toLowerCase();
        }
      if (i != s.length - 1) 
        solution+= "-";
    }
  return solution;
}