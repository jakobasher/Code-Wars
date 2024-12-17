function rapNameGen(dob){
  let str1 = Math.ceil((+dob[0] + +dob[1]) / 2) + ""
  let str2 = Math.ceil((+dob[6] + +dob[7]) / 2) + ""

  return nameChanger(str1) + " " + nameChanger(str2)
}

function nameChanger(str) {
  if (str == 0) return "0ero";
  if (str == 1) return "1ne";
  if (str == 2) return "2wo";
  if (str == 3) return "3hree";
  if (str == 4) return "4our";
  if (str == 5) return "5ive";
  if (str == 6) return "6ix";
  if (str == 7) return "7even";
  if (str == 8) return "8ight";
  if (str == 9) return "9ine";
}
