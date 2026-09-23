using System.Linq;

public class Kata
{
        public static int[] MoveZeroes(int[] arr)
        {
            int[] solution = new int[arr.Length];
            int[] nozeroes = arr.Where(m => m != 0).ToArray();
            for (int i = 0; i < nozeroes.Length; i++)
                solution[i] = nozeroes[i];
            return solution;
        }
}