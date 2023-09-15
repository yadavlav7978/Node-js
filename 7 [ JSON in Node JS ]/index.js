const fs = require("fs");

{
  /*
     JSON : Json stands for javascript object notation. Json is light format for storing and transporting data.
            Json is often used when data is sent from server to a web page. 
*/
}

const data = {
  name: "Lav Yadav",
  Roll_No: 60,
  age: 22,
  course: "Btech",
};

{
  /*//! ------------------------------------- Task  ------------------------------
   1. Convert to JSON
   2. Dusri file main add krna is Json Data ko
   3. ReadFile
   4. Again Convert back json object into original data
   5. Orginal data ko console par show krna
         
*/
}

{
  /*
   Original Data : { name: 'Lav Yadav', Roll_No: 60, age: 22, course: 'Btech' }
   Json data :     {"name":"Lav Yadav","Roll_No":60,"age":22,"course":"Btech"}
*/
}

// 1. JSON.stringify() takes JavaScript object (data) and converts it into a JSON-format.
const jsonData = JSON.stringify(data);

//2.  Now write this JSON formatted data into another file.
/// Below code create a new file name 'JsonFile.json' and store jsonData into this file asynchronously.

fs.writeFile("JsonFile.json", jsonData, (err) => {
  console.log(err);
});

// 3. Now Read the Json data from file.

const jsonData1 = fs.readFile("JsonFile.json", "utf-8",(err ,data)=>{
    const orgData=JSON.parse(data);
    console.log("JSON Data :  " + data);
    console.log(orgData);
});
