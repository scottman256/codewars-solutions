using System;
using System.Text.RegularExpressions;
using System.Linq;
using System.Text;

public class MorseCodeDecoder
{
      public static string DecodeBits(string bits)
      {
          string morseCode = bits.Trim('0');
          if (!morseCode.Contains('0')) return ".";
          int timeFactor = GetTimeFactor(morseCode);
          morseCode = Regex.Replace(morseCode, string.Concat(Enumerable.Repeat("111", timeFactor)) + "+", "-");
          morseCode = Regex.Replace(morseCode, string.Concat(Enumerable.Repeat("1", timeFactor)) + "+", ".");
          morseCode = Regex.Replace(morseCode, string.Concat(Enumerable.Repeat("0000000", timeFactor)) + "+", "   ");
          morseCode = Regex.Replace(morseCode, string.Concat(Enumerable.Repeat("000", timeFactor)) + "+", " ");
          morseCode = Regex.Replace(morseCode, string.Concat(Enumerable.Repeat("0", timeFactor)) + "+", "");
          return morseCode;
      }

    public static string DecodeMorse(string morseCode)
    {
        string solution = "";
        string[] morseCodeArray = morseCode.Replace("   "," * ").Split(" ");
        foreach(string morseLetter in morseCodeArray)
        {
            if ("*" == morseLetter)
                solution += " ";
            else
                solution += MorseCode.Get(morseLetter);
        }
        return solution;
    }
  
   public static int GetTimeFactor(string bits)
    {
    int length = bits.Length; 
    int count = Int32.MaxValue; 
    for (int i = 0; i < length; i++) 
    { 
        int temp_count = 1; 
        for (int j = i + 1; j < length; j++) 
        { 
            if (bits[i] != bits[j]) 
              {
              i = j - 1;
              break;
            }   
            temp_count++; 
        } 
        if (temp_count < count && i < length - temp_count) 
            count = temp_count; 
    } 
    return count; 
  }
}