
const fs=require('fs');

//!--------------------------------------  write file Asynchronously -----------------------------------------------
// Syntax : fs.writeFile ('file path','Data' ,'Call Back Function')

fs.writeFile('Asynfile.txt','This is Async file data',(error)=>{
    console.log('File is Created');
    console.log(error);
});

{/*
The 'writeFile' function in Node.js is an asynchronous function. This means that it does not block the execution of the current thread while writing the file.
Instead, it calls the callback function when the file has been written successfully or an error has occurred.
With the help of callback function user get the result of the file write operation , wheather my data write succusfully or it gives some error.
*/}

//!--------------------------------------Append Data Asynchronously -----------------------------------------------
// Syntax : fs.appendFile('file path' , 'data' ,'call back function');

fs.appendFile('Asynfile.txt','  Add another Data',(error)=>{
    console.log('Data append sucessfully');
    console.log(error);
});

//!-------------------------------------- Read Data Asynchronously -----------------------------------------------
// Syntax : fs.appendFile('file path' , 'Encoding standered' ,'call back function');

fs.readFile('Asynfile.txt','utf-8',(error,data)=>{
    console.log('Data Read sucessfully');
    console.log(data);
});

