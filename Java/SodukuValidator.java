import java.util.ArrayList;
import java.util.Dictionary;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SudokuValidator {
    public static boolean check(int[][] board) {
        return checkColumns(board) && checkRows(board) && check3x3Grids(board);
    }

    public static boolean checkColumns(int[][] board) {
        Map < Integer, Boolean> lookup;
        for (int x = 0; x < 9; x++) {
            lookup = new HashMap <Integer, Boolean>();
            for (int y = 0; y < 9; y++) {
                int value = board[x][y];
                if (value == 0)
                    return false;

                if (lookup.containsKey(value))
                    return false;

                lookup.put(value, true);
            }
        }
        return true;
    }

    public static boolean checkRows(int[][] board) {
        Map <Integer, Boolean> lookup;
        for (int y = 0; y < 9; y++) {
            lookup = new HashMap <Integer, Boolean>();
            for (int x = 0; x < 9; x++) {
                int value = board[x][y];
                if (value == 0)
                    return false;

                if (lookup.containsKey(value))
                    return false;

                lookup.put(value, true);
            }
        }
        return true;
    }

    public static boolean check3x3Grids(int[][] board) {
        Map <Integer, Boolean> lookup;

        for (int x = 0; x < 3; x++) {
            for (int y = 0; y < 3; y++) {
                lookup = new HashMap <Integer, Boolean>();

                for (int i = 0; i < 3; i++) {
                    for (int j = 0; j < 3; j++) {
                        int value = board[x * 3 + i][y * 3 + j];
                        if (value == 0)
                            return false;

                        if (lookup.containsKey(value))
                            return false;

                        lookup.put(value, true);
                    }
                }
            }
        }

        return true;
    }
}