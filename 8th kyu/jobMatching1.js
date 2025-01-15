function match(candidate, job) {
  if (typeof candidate.minSalary === 'undefined' || typeof job.maxSalary === 'undefined') {
    throw Error
  }
  return candidate.minSalary * 0.9 <= job.maxSalary
}
