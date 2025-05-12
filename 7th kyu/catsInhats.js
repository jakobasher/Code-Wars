function height(n) {
    return Array.from({length: n+1}, (e,i)=> 2000000 / 2.5 ** i)
      .reduce((a,c)=>a+c,0)
      .toFixed(3)
}
