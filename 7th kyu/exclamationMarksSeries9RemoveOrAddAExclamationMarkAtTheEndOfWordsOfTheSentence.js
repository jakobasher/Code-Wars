function removeOrAdd (string) {
	return string
    .split(" ")
    .map(e => e.split("").reverse().join(""))
    .map(e => e[0]=="!" 
         ? e[1]=="!" 
         ? e 
         : e.slice(1) 
         : "!"+e)
    .map(e => e.split("").reverse().join("")).join(" ")
}
