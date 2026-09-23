public class Kata {
   public static int[] doubleEveryOther(int[] a){
      for (int i = 1; i < a.length; i+=2) {
        a[i] = a[i] * 2;
      }
     return a;
  }
}