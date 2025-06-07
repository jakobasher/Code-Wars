const cannonsReady = (gunners) => {
  return Object.values(gunners).every(e=>e=="aye") ? "Fire!" : "Shiver me timbers!"
}
