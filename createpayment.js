  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var firebase = require("firebase");
  var config = {
    apiKey: "AIzaSyBp5xOVikCrlQBK0pxfU43Me2qy4zkMQh4",
    authDomain: "payphone-f4a67.firebaseapp.com",
    databaseURL: "https://payphone-f4a67.firebaseio.com",
    storageBucket: "payphone-f4a67.appspot.com",
    messagingSenderId: "202102323605"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  