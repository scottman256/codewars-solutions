public class BouncingBall {
        public static int bouncingBall(double h, double bounce, double window)
        {
            if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
            double heightOfBall = h;
            int numberofBounces = 0;
            while (heightOfBall > window)
            {
                numberofBounces++;
                heightOfBall *=  bounce;
                if (heightOfBall > window) numberofBounces++;
            }
            return numberofBounces;
        }
}