using System;
using System.Collections.Generic;

public class SnailSolution
{
 public static int[] Snail(int[][] array)
        {
            const int RIGHT = 0;
            const int DOWN = 1;
            const int LEFT = 2;
            const int UP = 3;

            int rightBounds = array[0].Length - 1;
            int bottomBounds = array.Length - 1;
            int leftBounds = 0;
            int topBounds = 0;
            int dimensions = array[0].Length * array.Length;
            int x = 0;
            int y = 0;

            int direction = RIGHT;
            int visited = 0;
            List<int> solution = new List<int>();

            while (visited != dimensions)
            {
                if (direction == RIGHT && y >= rightBounds)
                {
                    direction = DOWN;
                    topBounds++;
                }

                if (direction == DOWN && x >= bottomBounds)
                {
                    direction = LEFT;
                    rightBounds--;
                }

                if (direction == LEFT && y <= leftBounds)
                {
                    direction = UP;
                    bottomBounds--;
                }

                if (direction == UP && x <= topBounds)
                {
                    direction = RIGHT;
                    leftBounds++;
                }

                solution.Add(array[x][y]);
                visited++;

                switch (direction)
                {
                    case RIGHT:
                        y++;
                        break;
                    case DOWN:
                        x++;
                        break;
                    case LEFT:
                        y--;
                        break;
                    case UP:
                        x--;
                        break;

                }
            }
            return solution.ToArray();
        }
}