public class Int32toIPv4 {
	public static String longToIP(long ip) {
    byte[] bytes = new byte[4];
    bytes[0] = (byte)(ip >> 24);
    bytes[1] = (byte)(ip >> 16);
    bytes[2] = (byte)(ip >> 8);
    bytes[3] = (byte)(ip);
		return (int)(bytes[0] & 0xff) + "." + (int)(bytes[1] & 0xff)+ "." + (int)(bytes[2] & 0xff) + "." + (int)(bytes[3] & 0xff); 
	}
}