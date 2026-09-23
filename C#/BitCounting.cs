using System;
using System.Linq;

public class BitCounting
{
        public static int CountBits(int n)
        {
            string binary = Convert.ToString(n, 2);
            return binary.Count(x => x == '1');
        }
}