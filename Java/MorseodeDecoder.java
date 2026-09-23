public class MorseCodeDecoder {
    public static String decode(String morseCode) {
        String solution = "";
        String[] morseCodeArray = morseCode.trim().replace("   ", " * ").split(" ");
        for (String morseLetter : morseCodeArray)
        {
            if ("*".equals(morseLetter))
                solution += " ";
            else
                solution += MorseCode.get(morseLetter);
        }
      return solution;
  }
}