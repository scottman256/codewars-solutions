public class Kata
{
  public static string Rgb(int r, int g, int b) 
  {
    return getHexValue(r) + getHexValue(g) + getHexValue(b);
  }
  
  public static string getHexValue(int value)
    {
    string hex;
    if (value > 255) value = 255;
    if (value < 0) value = 0;
    hex = value.ToString("X");
    if (hex.Length == 1) hex = "0" + hex;
    return hex;
    }
}