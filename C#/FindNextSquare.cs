using System;

public class Kata
{
        public static long FindNextSquare(long num)
        {
            long sqrt = (long)Math.Sqrt(num);
            if (num % sqrt != 0) return -1;
            else return (sqrt + 1) * (sqrt + 1);        
        }
}