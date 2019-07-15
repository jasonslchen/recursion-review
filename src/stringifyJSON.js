// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    let resultsArray = [];
    for (let i = 0; i < obj.length; i++) {
      resultsArray.push(stringifyJSON(obj[i]));
    }
    let results = resultsArray.join(',');
    return '[' + results + ']';
  } else if (typeof obj === 'object') {



    let pairsArray = [];
    var keysArray = Object.keys(obj);

    for (var i = 0; i < keysArray.length; i++) {
      if (typeof keysArray[i] === 'function' || typeof obj[keysArray[i]] === 'function' || keysArray[i] === undefined || obj[keysArray[i]] === undefined) {
        continue;
      }
      var keyValuePair = "";
      keyValuePair = stringifyJSON(keysArray[i]) + ":" + stringifyJSON(obj[keysArray[i]]);
      pairsArray.push(keyValuePair);
    }

    let results = pairsArray.join(',');
    return "{" + results + "}";
  }


};


