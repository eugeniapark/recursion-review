// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*
document.getElementsByClassName()

Input: Element name (string)
Output: Array-like Object
Returns: Array-like object of all child elements with given class name

Pseudocode:
//var classNameElements = []

//function getElement(element)
  //if element.classList.contains(className)                      
    //classElements.push(element) 
    //if element has childNodes
      //for (var i = 0; i < element.childNodes.length; i++) {
        //getElement(element.childNodes[i])    
      //}
  
//getElement(document.body)

//return classNameElements
*/

var getElementsByClassName = function(className) {
  var classNameElements = [];

  var getElement = function(elem) {
    if (elem.classList !== undefined) {
      if (elem.classList.contains(className)) {                      
        classNameElements.push(elem); 
      }
      
      if (elem.hasChildNodes()) {
        for (var i = 0; i < elem.childNodes.length; i++) {
          getElement(elem.childNodes[i]);    
        }
      }
    }
  };
  getElement(document.body);

  return classNameElements;
};
