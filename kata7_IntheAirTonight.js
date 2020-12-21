const checkAir = function (samples, threshold) {
  let clean = 0;
  let dirty = 0;
  for (sample of samples) {
    if (sample === "clean") {
      clean++;
    } else if (sample === "dirty") {
      dirty++;
    }
  }
  console.log(dirty / samples.length);
  if (dirty / samples.length < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));