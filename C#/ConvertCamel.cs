using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class ConvertCamel
{
  
 public static string ToCamelCase(string str)
        {
            string[] wordArray = str.Replace("_","-").Split("-");
            char[] characterArray;
            for (int li = 1; li < wordArray.Length; li++)
            {
                characterArray = wordArray[li].ToArray();
                characterArray[0] = Char.ToUpper(characterArray[0]);
                wordArray[li] = new string(characterArray);
            }
            return string.Join("", wordArray);
        }
}