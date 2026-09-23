using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
        public static string SpinWords(string sentence)
        {
            string returnString = "";
            string[] words = sentence.Split(" ");

            foreach (string word in words)
            {
                if (word.Length >= 5)
                    returnString += Reverse(word);
                else
                    returnString += word;
                returnString += " ";
            }

            return returnString.Substring(0,returnString.Length -1);
        }
  
  public static string Reverse(string word)
    {
    char[] wordArray = word.ToCharArray();
    Array.Reverse(wordArray);
    return new string(wordArray);
  }
    
}