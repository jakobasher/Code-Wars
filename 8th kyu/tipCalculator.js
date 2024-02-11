function calculateTip(amount, rating) {
  rating = rating.toLowerCase()
  if (rating == "excellent") return Math.ceil(amount*0.2)
  if (rating == "great") return Math.ceil(amount*0.15)
  if (rating == "good") return Math.ceil(amount*0.1)
  if (rating == "poor") return Math.ceil(amount*0.05)
  if (rating == "terrible") return 0
  return "Rating not recognised"
}
// .toLowerCase() return as lower case
// Math.ceil() round up
