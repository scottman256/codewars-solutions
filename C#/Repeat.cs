using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;

namespace Solution
{
  public static class Program
  {
            public static string repeatStr(int n, string s)
            {
                return string.Concat(Enumerable.Repeat(s, n));
            }
  }
  }