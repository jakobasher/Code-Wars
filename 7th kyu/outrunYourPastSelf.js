function number_lappings(my_speed,ghost_speed,time,round_length){
  let lap1 = (my_speed * time) / round_length
  let lap2 = (ghost_speed * time) / round_length
  let lappings = Math.ceil(lap1-lap2) - 1
  return lappings > 0 ? lappings : 0
}
// Math.ceil() round up
