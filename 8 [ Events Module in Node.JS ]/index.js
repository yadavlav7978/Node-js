{
  /*
     
 1. Event is occured whenever any action perfomed by the user or program. Eg : user clicks on a button, a file is saved to the disk,an error occurs.
 2. Events are a way to communicate between different parts of an application. For example, you can use events to notify a listener when a file
    has been finished reading or when a new user has connected to a server.
 
 3. The 'events' module in Node.js is used to create the event , fire the event, and listen for events. 
 4. To use the 'events' module, we first need to create an instance of the 'EventEmitter' class. 
    This class provides methods for emitting and listening for events.

 5. Once we have an EventEmitter instance, we can listen for events using the on() method. 
    The on() method takes two arguments: the name of the event and a function to call when the event is fired.
    OR on() methods are functions that will be executed when a specific event occurs:

 6. To fire an event, we can use the emit() method. The emit() method takes the name of the event 
    and any arguments you want to pass to the callback functions.

*/
}

const EventEmitter = require("events");

const Event = new EventEmitter();

// On() method Listen when 'Greet' event fired , and then it execute its call back function
Event.on("Greet", (fname, lname) => {
  console.log(`My name is ${fname} ${lname}`);
});

// Emit or fire the 'Greet' Event
Event.emit("Greet", "Lav", "Yadav");
