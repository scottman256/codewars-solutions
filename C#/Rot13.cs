using System;
using System.Text;
using System.Text.RegularExpressions;

public class Kata
{
  public static string Rot13(string input)
  {
    StringBuilder solution = new StringBuilder();
    Regex expression = new Regex("[A-Za-z]");
 
    foreach (char character in input)
    {
        if (expression.IsMatch(character.ToString()))
            solution.Append((char)(((character & 223) - 52) % 26 + (character & 32) + 65));
        else
            solution.Append(character);
    }
 
    return solution.ToString();
  }
}