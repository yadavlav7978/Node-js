const fs=require('fs');

{/*  
    In the given line of code, we are importing the built-in Node.js module fs, which stands for "file system."
    This module allows us to work with the file system on our computer, enabling us to read, write, manipulate, 
    and perform various operations on files and directories. 
*/}

//! ---------------------------------------- Create directory or folder -----------------------------------------------------
//fs.mkdirSync('Nodefile'); 
//? fs.mkdirSync() used to create new folder or directory

//! ---------------------------------------------- write Data ---------------------------------------------------------------

//fs.writeFileSync('Nodefile/file.txt','Hi ,My Name is Lav Yadav .'); 
//? It write data into file (file.txt) which present in folder NodeFile , if file not present in the specify path then it create new file and add data into the file.

//*---------------------- Override data -----------

//fs.writeFileSync('Nodefile/file.txt','This text override the previous text .');
//? If file present and it contain the data , then it overrides existing data .

//*---------------------- Append data -----------

// fs.appendFileSync('Nodefile/file.txt','  This text append with the previous text .');
//? fs.appendFileSync() funtion append the data in the file . 

//! ---------------------------------------------- Read Data ---------------------------------------------------------------
//const buffer_data=fs.readFileSync('Nodefile/file.txt'); 
//? fs.readFileSync () read the content of file ,it return the binary data of file , if we want orginal data than we need to convert biffer data into string . 

//console.log(buffer_data);                               
//const Orginal_data=buffer_data.toString(); // Convert Binary data into orginal data
//console.log(Orginal_data);

//!-------------------------------------------------Rename the file --------------------------------------------------------
// fs.renameSync('Nodefile/file.txt','Nodefile/Text.txt');

//? fs.renameSync() used to rename the file 


