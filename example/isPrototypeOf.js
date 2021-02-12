// Function purpose.
// The isPrototypeOf() method checks if an object exists in another object's prototype chain.

// Demo usage.
/*
var canine = {
  bark: function() {
    console.log('bark');
  }
};

var dog = Object.create(canine);
dog.fetch = function() {
  console.log('fetch');
};

var myDog = Object.create(dog);
var empty = Object.create(null);

isPrototypeOf(dog, myDog); // your function does the same
isPrototypeOf(dog, empty); // your function does the same
isPrototypeOf(Object.prototype, myDog); // your function does the same
isPrototypeOf(canine, myDog) // true
*/

// Function signature.
// isPrototypeof(prototypeObj, targetObj)

// Parameters.
// prototypeObj
// The object to check if it exists in the object prototype chain

// targetObj
// The object whose prototype chain will be searched.

// Return value.
// A Boolean indicating whether the calling object lies in the prototype chain of the specified object.

// Usefull notes.
// Each object has a private property which holds a link to another object called its prototype.
// That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
// By definition, null has no prototype, and acts as the final link in this prototype chain.

// var myObj = {};
// var myChildObj = Object.create(myObj);
// Object.getPrototypeOf(myObj) ==> Object.prototype
// Object.getPrototypeOf(Object.prototype) ==> null

// Requirements.
// It should return a Boolean.
// It should return true if prototypeObj lies in the prototype chain of the targetObj.
// It should return false if prototypeObj does not lie in the prototype chain of the targetObj.
// It should work for any number of prototype links.
// It should throw TypeError if prototypeObj is undefined or null.

// Edge cases.
// It should return false if targetObject is not an object.

// Implementation.
function isPrototypeOf(prototypeObj, targetObj) {
  // Check if prototypeObj is undefined or null and throw an error.
  if (prototypeObj === null || prototypeObj === undefined) {
    throw new TypeError('Cannot read property \'isPrototypeOf\' of ' + prototypeObj + '.');
  }

  // Check if passed in first argument (aka prototypeObj) type is not an object.
  // If so, return false.
  if (typeof targetObj !== 'object' && typeof targetObj !== 'function') {
    return false;
  }

  // Get prototype of targetObj.
  var prototypeOfTargetObj = Object.getPrototypeOf(targetObj);

  // Base case.
  // If targetObj' has no prototype, return false.
  if (prototypeOfTargetObj === null) {
    return false;
    // If targetObj' prototype is prototypeObj, return true.
  } else if (prototypeOfTargetObj === prototypeObj) {
    return true;

    // Recursive case.
  } else {
    return isPrototypeOf(prototypeObj, prototypeOfTargetObj);
  }
}