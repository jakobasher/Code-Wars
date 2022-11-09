function largest(n,xs){
    let array = xs.sort((a,b) => a-b).slice(-n)
    return n > 0 ? array : []
}
// .sort() a-b returns value in ascending order
// .slice() -n returns array starting from end
