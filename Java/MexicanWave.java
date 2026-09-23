public class MexicanWave {

    public static String[] wave(String str) {
        StringBuilder strBuild;
        int skip = 0;
      
        String result[] = new String[str.replaceAll(" ","").length()];
        for (int i = 0; i < str.length(); i++) {
          
          if (str.charAt(i) != ' ') {
            strBuild = new StringBuilder(str);
            Character upperChar = Character.toUpperCase(strBuild.charAt(i));
            strBuild.setCharAt(i,upperChar);
            result[i - skip] = strBuild.toString();
            } else 
              skip++;
        }
          
        return result;
    }
    
}