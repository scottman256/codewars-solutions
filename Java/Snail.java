import java.util.ArrayList;
import java.util.List;

public class Snail {

    public static int[] snail(int[][] array) {
        final int RIGHT = 0;
        final int DOWN = 1;
        final int LEFT = 2;
        final int UP = 3;

        int rightBounds = array[0].length - 1;
        int bottomBounds = array.length - 1;
        int leftBounds = 0;
        int topBounds = 0;
        int dimensions = array[0].length * array.length;
        int x = 0;
        int y = 0;

        int direction = RIGHT;
        int visited = 0;
        List < Integer > solution = new ArrayList < Integer > ();

        while (visited != dimensions) {
            if (direction == RIGHT && y >= rightBounds) {
                direction = DOWN;
                topBounds++;
            }

            if (direction == DOWN && x >= bottomBounds) {
                direction = LEFT;
                rightBounds--;
            }

            if (direction == LEFT && y <= leftBounds) {
                direction = UP;
                bottomBounds--;
            }

            if (direction == UP && x <= topBounds) {
                direction = RIGHT;
                leftBounds++;
            }

            solution.add(array[x][y]);
            visited++;

            switch (direction) {
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
        return solution.stream()
            .mapToInt(Integer::intValue).toArray();
    }
}