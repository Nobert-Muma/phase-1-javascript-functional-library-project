const unmodifiedTestArr = [1, 2, 3, 4];
const unmodifiedTestObj = { one: 1, two: 2, three: 3, four: 4 };
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      callback(collection[key], key);
    }
  }
  return collection;
}

//push()>>to add to last
function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      result.push(callback(collection[key], key, collection));
    }
  }
  return result;
}
function myReduce(obj, callback, initialValue) {
    const keys=Object.keys(obj);
    let accumulator=initialValue===undefined?undefined:initialValue;
    for(let key of keys){
        if(accumulator===undefined){
            accumulator=obj[key];
        } else {
            accumulator=callback(accumulator, obj[key], key, obj);
        }
    }
    return accumulator;
    }
  function myKeys(obj){
    return Object.keys(obj);
  }
  function myValues(obj){
    return Object.values(obj);
  }
function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (predicate(collection[key])) {
        return collection[key];
      }
    }
  }
}
function myFilter(collection, predicate) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
  } else {
    const keys=Object.keys(collection);
    for (let i=0;i<keys.length; i++) {
      const key=keys[i];
      if (predicate(collection[key])) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}
function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}
function myFirst(array, n) {
  if (n===undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}
function myLast(array, n) {
  if (n===undefined) {
    return array[array.length-1];
  } else {
    return array.slice(Math.max(array.length-n, 0));
  }
}
module.exports = {myEach,myMap,myReduce,myFind,myFilter,mySize,myFirst,myLast};

