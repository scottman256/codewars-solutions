using System.Collections.Generic;

public class Sudoku
{
       public static bool ValidateSolution(int[][] board)
        {
            return checkColumns(board) && checkRows(board) && check3x3Grids(board);
        }

        public static bool checkColumns(int[][] board)
        {
            Dictionary<int, bool> lookup;
            for (int x = 0; x < 9; x++)
            {
                lookup = new Dictionary<int, bool>();
                for (int y = 0; y < 9; y++)
                {
                    int value = board[x][y];
                    if (value == 0)
                        return false;

                    if (lookup.ContainsKey(value))
                        return false;

                    lookup.Add(value, true);
                }
            }
            return true;
        }

        public static bool checkRows(int[][] board)
        {
            Dictionary<int, bool> lookup;
            for (int y = 0; y < 9; y++)
            {
                lookup = new Dictionary<int, bool>();
                for (int x = 0; x < 9; x++)
                {
                    int value = board[x][y];
                    if (value == 0)
                        return false;

                    if (lookup.ContainsKey(value))
                        return false;

                    lookup.Add(value, true);
                }
            }
            return true;
        }

        public static bool check3x3Grids(int[][] board)
        {
            Dictionary<int, bool> lookup;

            for (int x = 0; x < 3; x++)
            {
                for (int y = 0; y < 3; y++)
                {
                    lookup = new Dictionary<int, bool>();

                    for (int i = 0; i < 3; i++)
                    {
                        for (int j = 0; j < 3; j++)
                        {
                            int value = board[x * 3 + i][y * 3 + j];
                            if (value == 0)
                                return false;

                            if (lookup.ContainsKey(value))
                                return false;

                            lookup.Add(value, true);
                        }
                    }
                }
            }

            return true;
        }
}