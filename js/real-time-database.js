
// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBUi05h6AW2ZjW0f2u1tGqrgUAg6yRLvLs",
    authDomain: "show-me-the-leads-blog-87279.firebaseapp.com",
    databaseURL: "https://show-me-the-leads-blog-87279.firebaseio.com",
    projectId: "show-me-the-leads-blog-87279",
    storageBucket: "show-me-the-leads-blog-87279.appspot.com",
    messagingSenderId: "185684396743"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();

    var nomeInput = document.getElementById('nome');
    var emailInput = document.getElementById('email');
    var empresaInput = document.getElementById('empresa');
   // var addButton = getElementById('addButton');

    // Save message
    saveMessage(nomeInput, emailInput, empresaInput);
  
    // Show alert
    //document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    //setTimeout(function(){
   //   document.querySelector('.alert').style.display = 'none';
   // },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(nomeInput,emailInput,empresaInput){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      nomeInput:nomeInput,
      emailInput:emailInput,
      empresaInput:empresaInput,
    
    });
  }