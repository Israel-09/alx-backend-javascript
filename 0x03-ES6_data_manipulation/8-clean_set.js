export default function cleanSet(set, startString) {
  function getString(elem, startString) {
    return elem.slice(startString.length);
  }
  const array = Array.from(set);
  const filtStr = array.filter((elem) => elem.indexOf(startString) === 0);
  if (filtStr.length > 0 && startString.length > 0) {
    let cleanStr = getString(filtStr[0], startString);
    for (const elem of filtStr.slice(1)) {
      cleanStr = `${cleanStr}-${getString(elem, startString)}`;
    }
    return cleanStr;
  }
  return '';
}
