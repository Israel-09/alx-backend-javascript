export default function cleanSet(set, startString) {
  function getString(elem, startString) {
    return elem.slice(startString.length);
  }
  const array = Array.from(set);
  const filtStr = array.filter((elem) => elem.indexOf(startString) === 0);
  if (filtStr.length > 0 && startString.length > 0) {
    return filtStr.reduce((acc, current) => `${acc}-${getString(current, startString)}`, '');
  }
  return '';
}
