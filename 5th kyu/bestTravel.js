function chooseBestSum(t, k, ls) {
 return ls
   .reduce((a,c) => a
           .concat(a
                   .filter(e => e.length < k)
                   .map(e => e.concat([c]))
                  ), [[]]
    )
   .filter(e => e.length == k)
   .map(e => e.reduce((a,b) => a+b))
   .filter(s => s<=t)
   .sort((a,b) => b-a)[0] || null
}
