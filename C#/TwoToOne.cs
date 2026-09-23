using System;
using System.Linq;

public class TwoToOne 
{
        public static string Longest(string s1, string s2)
        {
            string combinedString = s1 + s2;
            char[] distinctString = combinedString.Distinct().ToArray();
            Array.Sort(distinctString);
            return new string(distinctString);
        }
}