using System;

class AreTheySame
{
        public static bool comp(int[] a, int[] b)
        {
            if (a == null || b == null || a.Length != b.Length) return false;
            Array.Sort(a);
            Array.Sort(b);

            for (int i = 0; i < a.Length; i++)
                if (a[i] * a[i] != b[i]) return false;

            return true;
        }
}