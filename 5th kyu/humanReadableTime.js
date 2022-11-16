function humanReadable (seconds) {
  let hrs = parseInt(seconds/60/60).toString().padStart(2,0)
  let min = parseInt(seconds/60 % 60).toString().padStart(2,0)
  let sec = parseInt(seconds % 60).toString().padStart(2,0)
  
//   if (hrs.length < 2) hrs = "0"+hrs
//   if (min.length < 2) min = "0"+min
//   if (sec.length < 2) sec = "0"+sec
     
  return hrs + ":" + min + ":" + sec 
}

// parseInt() returns integer
// .toString() returns as string
// .padStart() returns element with a specific length
// pad start may not work if hours is over 99, try +"0" then slice(-2)
