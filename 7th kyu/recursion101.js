function solve(a,b){
    while ((a >= 2 * b || b >= 2 * a) && a * b !== 0) {
        a = a % (2 * b);
        b = b % (2 * a);
    }
    return [a, b?b:1];
}
