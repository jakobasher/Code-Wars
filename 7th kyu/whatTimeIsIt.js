var getMilitaryTime = function(input) {
  const timeParts = input.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  const seconds = parseInt(timeParts[2].substr(0, 2), 10);
  const ampm = timeParts[2].substr(2).toUpperCase();

  let militaryHours = hours;
  if (ampm === 'PM' && hours !== 12) {
    militaryHours += 12;
  } else if (ampm === 'AM' && hours === 12) {
    militaryHours = 0;
  }

  const militaryHoursStr = militaryHours.toString().padStart(2, '0');
  const militaryMinutesStr = minutes.toString().padStart(2, '0');
  const militarySecondsStr = seconds.toString().padStart(2, '0');
  return `${militaryHoursStr}:${militaryMinutesStr}:${militarySecondsStr}`;
};
// Wow5
// .split() returns array from string
// parseInt() returns integer
// .substr() returns portion between string
// .toUpperCase() returns string as capital
// .toString() return as string
// .padStart() adds padding begin
