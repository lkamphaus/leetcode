const needleInHaystack = (haystack, needle) => {
  const needleLength = needle.length;

  if (needleLength === 0) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    console.log(i)
    if (needle === haystack.substr(i, needleLength)) {
      return i;
    }
  }

  return -1;
}

console.log(needleInHaystack('hello', 'll')); //2