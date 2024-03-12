export default function hasValuesFromArray(set, array) {
  const arraySet = new Set(array);
  let value = true;
  for (const elem of arraySet) {
    if (!set.has(elem)) {
      value = false;
    }
  }
  return value;
}
