function fourSeasons(d) {
  if (d > 365) return "The year flew by!"
  if (d > 355 || d < 80) return "Winter Season"
  if (d > 260) return "Autumn Season"
  if (d > 173) return "Summer Season"
  return "Spring Season"
}
///
