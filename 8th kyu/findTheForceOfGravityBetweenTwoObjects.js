solution = (arr_val, arr_unit) => {
  let G = 6.67e-11
  let obj = {
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    μg: 1e-9,
    lb: 0.453592,
    m: 1,
    cm: 1e-2,
    mm: 1e-3,
    μm: 1e-6,
    ft: 0.3048
  };

  let mass1 = arr_val[0] * obj[arr_unit[0]];
  let mass2 = arr_val[1] * obj[arr_unit[1]];
  let distance = arr_val[2] * obj[arr_unit[2]];
  let force = G * (mass1 * mass2) / Math.pow(distance, 2);

  return force
};
