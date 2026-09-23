using System;
using System.Linq;
using System.Collections.Generic;

public class Consecutives
{
	public static List<int> SumConsecutives(List<int> s) 
	{
    	List<int> solution = new List<int>();
      int prev = s[0];
      int sum = s[0];
      for (int i = 1; i < s.Count; i++)
      {
        if (prev == s[i])
          sum += s[i];
        else
          {
          solution.Add(sum);
          sum = s[i];
        }
        prev = s[i];
      }
    solution.Add(sum);
    return solution;
	}

}