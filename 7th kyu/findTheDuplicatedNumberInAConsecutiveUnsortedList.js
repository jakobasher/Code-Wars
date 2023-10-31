function findDup(arr) {
    arr.sort()
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == arr[i + 1])
            return arr[i]
}
// .sort() sort array in ascending, in this case
