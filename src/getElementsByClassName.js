// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  let elementsArray = [];

  var getElements = function(nodes) {
    if (nodes.classList && nodes.classList.length !== 0 && nodes.classList.contains(className)) {

      elementsArray.push(nodes);
    }

    if (nodes.childNodes.length !== 0) {
      for (let i = 0; i < nodes.childNodes.length; i++) {
        getElements(nodes.childNodes[i]);
      }
    }
  };

  getElements(document.body);

  return elementsArray;
};
