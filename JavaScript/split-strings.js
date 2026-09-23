public class StringSplit {
    public static String[] solution(String s) {
       String[] solution = s.split("(?<=\\G.{2})");
      if (s.length() % 2 == 1) solution[solution.length - 1] += "_";
      return solution;
    }
}