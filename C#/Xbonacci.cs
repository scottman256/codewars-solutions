public class Xbonacci
{
        public double[] Tribonacci(double[] signature, int n)
        {
            if (n==0) return new double[] {};
            int length = n > signature.Length ? signature.Length : n;
            double[] solution = new double [n];
        
            for (int i = 0; i < length; i++)
                solution[i] = signature[i];
            for (int i2 = signature.Length; i2 < n; i2++)
                solution[i2] = solution[i2 - 3] + solution[i2 - 2] + solution[i2 - 1];
            return solution;
        }
}