function match(job, candidates) {
  return candidates.filter(c => 
                           (
    job.equityMax > 0 || !c.desiresEquity) && 
    job.locations.some(l => c.currentLocation == l || c.desiredLocations.includes(l))
                          )
}
