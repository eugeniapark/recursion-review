// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
Inputs/Outputs:
Booleans, Numbers, Strings 
  strings => 'strings'
  123 => '123'
  true => 'true'

undefined, Function, Symbol
  *omitted (Object)
  => null (Array)

Infinity, NaN, null 
  => null

Object
  { a: 1 } => '{"a": 1}'


Pseudocode:
//if string
    //return "'\"" + value + "'\""

  //if bool, num
    //return "'" + value + "'"

  //if undefined, Function, Infinity, NaN, null, Symbol*
    //return null

  //if Array
    //var array = '"'
      //array =  + "'[' + ',' +


    //if it's an Object
      //return nothing (*null?)
    //it in Array
      //return null

  //

  //if object
    //var obj = '{'
      //obj = obj + ... '}'
      //return obj
  */


var stringifyJSON = function(obj) {
  if (typeof obj === "string") {
    return "\"" + obj + "\"";
  }

  if (typeof obj === "boolean" || typeof obj === "number") {
    return "" + obj;  
  }

  if (typeof obj === "undefined" || typeof obj === "function") {  //typeof obj === "symbol"
    return '';
  }

  if (obj === null) {
    return "null";
  }

  if (Array.isArray(obj)) {
    var arr = '[';
    if (!obj.length) {
      return '[]';
    } else {
      for (var i = 0; i < obj.length; i++) {
        arr += stringifyJSON(obj[i]) + ',';
      }
      return arr.slice(0,-1) + ']';
    }
  }

  if (typeof obj === "object") {
    var objString = '{';
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      for (var key in obj) {
        if (typeof obj[key] !== "function" && typeof obj[key] !== "undefined") {
          objString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      if (objString === '{') {
        return '{}';
      } else {
        return objString.slice(0,-1) + '}';
      }
    }
  }
};
