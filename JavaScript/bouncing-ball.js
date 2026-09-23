function bouncingBall(h,  bounce,  window)  {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
    let heightOfBall = h, numberOfBounces = 0;
    while (heightOfBall > window)
    {
    numberOfBounces++;
    heightOfBall *=  bounce;
    if (heightOfBall > window) numberOfBounces++;
    }
    return numberOfBounces;
}