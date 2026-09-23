function tribonacci(signature, n) {
    if (n==0) return [];
    let length = n > signature.length ? signature.length : n;
    var solution = [];

    for (let i = 0; i < length; i++)
    solution[i] = signature[i];
    for (let i2 = signature.length; i2 < n; i2++)
    solution[i2] = solution[i2 - 3] + solution[i2 - 2] + solution[i2 - 1];
    return solution;
}