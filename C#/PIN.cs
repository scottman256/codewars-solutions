using System;
using System.Collections.Generic;

public class Kata
{
        public static int[][] jaggedArray = new int[10][];

        public static List<string> GetPINs(string observed)
        {
            List<string> solution = new List<string>();
            InitializeJaggedArray();
            GetCombos(solution, observed, "");
            return solution;
        }
  
        public static void InitializeJaggedArray()
          {
            jaggedArray[0] = new int[] { 0, 8 };
            jaggedArray[1] = new int[] { 1, 2, 4 };
            jaggedArray[2] = new int[] { 1, 2, 3, 5 };
            jaggedArray[3] = new int[] { 2, 3, 6 };
            jaggedArray[4] = new int[] { 1, 4, 5, 7 };
            jaggedArray[5] = new int[] { 2, 4, 5, 6, 8 };
            jaggedArray[6] = new int[] { 3, 5, 6, 9 };
            jaggedArray[7] = new int[] { 4, 7, 8 };
            jaggedArray[8] = new int[] { 0, 5, 7, 8, 9 };
            jaggedArray[9] = new int[] { 6, 8, 9 };
        }

        public static void GetCombos(List<string> combos, string observed, string previousCharacters)
        {
            if (previousCharacters.Length == observed.Length)
            {
                combos.Add(previousCharacters);
                return;
            }
            else
            {
                int nextDigit = (int)Char.GetNumericValue(observed[previousCharacters.Length]);
                foreach (int digit in jaggedArray[nextDigit])
                {
                    GetCombos(combos, observed, previousCharacters + digit.ToString());
                }
            }
        }
    }