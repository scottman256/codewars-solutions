using System.Linq;
using System.Collections.Generic;
using System;

public class Mean
{
            public static int GetAverage(int[] marks)
            {
                int sum = 0;
                for (int counter = 0; counter < marks.Length; counter++)
                    {
                    sum += marks[counter];
                }
                return (int)Math.Floor((double)sum / marks.Length);
            }
}