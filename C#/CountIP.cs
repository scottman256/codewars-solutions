using System;
using System.Net;

public class CountIPAddresses
{
        static long ToLong(string ipAddress)
        {

            return (long)(uint)IPAddress.NetworkToHostOrder(
    (int)IPAddress.Parse(ipAddress).Address);
        }

        public static long IpsBetween(string start, string end)
        {
            return ToLong(end) - ToLong(start);
        }

}