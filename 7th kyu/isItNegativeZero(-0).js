function isNegativeZero(n) {
  return Object.is(n, -0);
}
// Object.is() used to compare var with "-0", since 0 is different
