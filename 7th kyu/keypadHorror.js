function computerToPhone(numbers){
  return numbers
    .split("")
    .map(e =>
    e == 0
      ? 0
      : e == 7
        ? 1
        : e == 8
          ? 2
          : e == 9
            ? 3
            : e == 1
              ? 7
              : e == 2
                ? 8
                : e == 3
                  ? 9
                  : e
    ).join("")
}
// .split() returns as array
// .join() returns as string
// Try creating an object
