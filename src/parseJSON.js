// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

/*
check if 
json[0] === '{'  ==> Object
json[0] === '['  ==> Array
json[0] === '"'  ==> String
  else
    

[A Recursive Descent Parser for JSON]  https://medium.com/@Mordoc/a-recursive-descent-parser-for-json-a6d68ab938ac
If we want to be especially strict: should have one function for each section of the grammar. 
Breaking  grammar down into separate functions for each section, such as object, array, string, etc. 
makes each function much simpler. In each function you have fewer cases that you need to worry about, 
and then you can make use of the other functions that you have written to parse the rest of the full string. 
They will possibly end up calling each other in a mutually recursive manner. For example, if an object 
has another object as a value, then as your parser follows the grammar, you will see that it will call 
both the string and object functions when it is parsing the object.

First we should write a “next character” convenience function to keep track of our place in the string and get the next character. This will help us as we use the parsing functions we will write to always be able to get the next usable character from the string. Remember that in a JSON string, we can add whitespace to make it easier to read, so we want to be able to skip over unneeded whitespace while keeping those that are needed and always get the next character that hasn’t been parsed yet. 

*/

var parseJSON = function(json) {
  // your code goes here
};
