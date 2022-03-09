
_ = {
    clamp (num, lowerBound, upperBound) {
      const a = Math.max(num, lowerBound);
      const b = Math.min(a, upperBound);
      return b
    },
    inRange (num, start, end) {
      if (!end) {
        end = start;
        start = 0
      }
      if (start > end) {
        let temp = start;
        start = end;
        end = temp;
      }
      if (num >= start && num < end) {
        return true
      } else {
        return false
      }
    },
    words (string) {
      let words = string.split(' ');
      return words;
    },
    pad (string, length) {
      if (string.length >= length) {
        return string;
      }
      let padStart = Math.floor((length - 2)/2);
      let padEnd = length - (string.length + padStart);
      let paddedString = ' '.repeat(padStart) + string + ' '.repeat(padEnd);
      return paddedString;
    },
    has (obj, key) {
      if (obj[key]) {
        return true
      } else {
        return false
      }
    },
    invert (obj) {
      let invObj = {}
      for (let property in obj) {
        let originalValue = obj[property];
        invObj[originalValue] = property;
      }
      return invObj
    },
    findKey (obj, predicate) {
      for (let key in obj) {
        let value = obj[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key
        }
      }
      return undefined
    },
    drop (arr, num) {
      if (!num) {
        num = 1;
      }
      const newCopy = arr.slice(num);
      return newCopy;
    },
    dropWhile (arr, predicate) {
      let dropNumber = arr.findIndex(function (element, index) {
        return !predicate(element, index, arr);
      })
      const droppedArray = this.drop(arr, dropNumber);
      return droppedArray
    },
    chunk (arr, s) {
      if (!s) {
        s = 1;
      };
      let chunks = [];
      for (let i = 0; i < arr.length; i += s) {
        let arrayChunk = arr.slice(i, i+s)
        chunks.push(arrayChunk)
      }
      return chunks
    },
  };
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;