const path = require("path");

{
  /*
   The path module in Node.js is a built-in module that provides a way to work with file system paths . 
   It provides a number of methods and properties for manipulating paths, such as:
*/
}

//!---------------------------------------------- path.dirname(path)  ----------------------------------------
// path.dirname(path): It returns the directory name of a path.

console.log(path.dirname("E:/Node Js/PathModule/index.js"));
// Output : E:/Node Js/PathModule

//!---------------------------------------------- path.extname(path)  ---------------------------------------
// path.extname(path): Returns the extension of a file path.

console.log(path.extname("E:/Node Js/PathModule/index.js"));

// Output : .js

//!---------------------------------------------- path.basename(path)  ---------------------------------------
//  path.basename(path): Returns the last portion of a path.

console.log(path.basename("E:/Node Js/PathModule/index.js"));

// Output: index.js

//? -------------------  Note :  All above thing we can do with the help of " parse method  " -------------------

const Mypath = path.parse("E:/Node Js/PathModule/index.js");
console.log(Mypath); // Mypath return an object

console.log(Mypath.dir); // Output : E:/Node Js/PathModule
console.log(Mypath.root); // Output : E:/
console.log(Mypath.base); // Output :  index.js
console.log(Mypath.ext); // Output :  .js
console.log(Mypath.name); // Output :  index
