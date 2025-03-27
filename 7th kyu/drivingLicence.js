function driver(data) {
  var name = (data[2].slice(0,5).toUpperCase() +'99999').slice(0,5)
  var dob = new Date(data[3]);
  var dec = (dob.getYear().toString().length==2 ? dob.getYear().toString()[0] : dob.getYear().toString()[1])
  var month = (data[4] == "M" ? ("0" + (dob.getMonth()+1).toString()).slice(-2) : dob.getMonth()+51)
  var day = ("0" + dob.getDate().toString()).slice(-2)
  var yearDig = dob.getYear().toString().slice(-1)
  var inits = data[0][0] + (data[1]=="" ? "9" : data[1][0])
  var arb1 = "9"
  var arb2 = "AA"
  return name + dec + month + day + yearDig + inits + arb1 + arb2
}
