// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsSXBYAtpFtowcfpdK9k5oYj707GPF5fY",
    authDomain: "feedbacks-27f8a.firebaseapp.com",
    databaseURL: "https://feedbacks-27f8a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "feedbacks-27f8a",
    storageBucket: "feedbacks-27f8a.firebasestorage.app",
    messagingSenderId: "909133431447",
    appId: "1:909133431447:web:7dae2f2dec2924535fdfd2"
  };

  // initialize Firebase
 firebase.initializeApp(firebaseConfig); 

 //reference your database
var feedbackdb = firebase.database().ref("feedback_data");

 document.getElementById('feedbackForm').addEventListener('submit', submitForm);
 function submitForm(e) {
  e.preventDefault();

  var name = getElementById('name');
  var email = getElementById('email');
  var message = getElementById('message');

  console.log(name, email, message);
 }

 const getElementById = (id) => {
  return document.getElementById(id).value;
};
