function validParentheses(parens){
  var parenStack = [];
  
  for (let i = 0; i < parens.length; i++)
    {
      if (parens[i] == '(') parenStack.push('(');
      if (parens[i] == ')') 
        {
          if (parenStack.length == 0) return false;
          parenStack.pop();
        }
    }
  
  if (parenStack == 0) 
    return true; 
  else return false;
}