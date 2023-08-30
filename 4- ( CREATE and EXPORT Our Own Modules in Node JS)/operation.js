const Add = (a,b) =>{
    return a+b;
};

const Sub = (a,b)=>{
    return a-b;
};

const Mul = (a,b)=>{
    return a*b;
};

const name="Lav Yadav";

module.exports={Add,Sub,Mul,name};

{/*
   1. " module.exports " keyword used to export the functions, variables, or constants that we defined.
   2. To import this module in another Node.js file, we need to use the  " require() " function:
   
   3. Here are some additional things to keep in mind when creating and exporting modules in Node.js:

     a)  The name of the module file must match the name of the module.
     b)  The module.exports object can contain any value, including functions, variables, and constants.
     c)  You can export multiple values from a module by assigning them to the module.exports object as an object literal.
     d)  You can import a module from any other module in your project.
*/}