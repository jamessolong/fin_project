 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCVCsHaZ6kxJWA2hbCkCejpzUFDyMtRMiY",
  authDomain: "project-891f6.firebaseapp.com",
  databaseURL: "https://project-891f6.firebaseio.com",
  projectId: "project-891f6",
  storageBucket: "project-891f6.appspot.com",
  messagingSenderId: "598738662442",
  appId: "1:598738662442:web:aec1eca40d006cfcda7f53",
  measurementId: "G-YZXB77GED4"
};
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function (user) {  //Manage Users in Firebase
    var user = firebase.auth().currentUser;
    document.getElementById('user').innerHTML = user.email;
  });
  function logout() {
    firebase.auth().signOut();   
    window.location = "index.html";
  }



document.getElementById("login_div").style.display = "block";


firebase.auth().onAuthStateChanged(function (user) { 
  if (user) {
    // User is logged in.

  
    document.getElementById("login_div").style.display = "block";

    var user = firebase.auth().currentUser;
    console.log(user.email)
    if (user != null) {
      window.location = "main.html";
      console.log("success")
      
    } else {
     
      window.location = "index.html";
    }

  } else {
    document.getElementById("login_div").style.display = "block";

  }
});


var user = null;

function login() {

 

  var email = document.getElementById("email_txt").value;
  var password = document.getElementById("password_txt").value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {  
   
    var errorCode = error.code;
    var errorMessage = error.message;

    if(errorCode === 'auth/wrong-password'){
      alert('Wrong password');
    } else {
      alert(errorMessage);
    }
    console.log(error);
   

  });
  

}


function logout() {
  firebase.auth().signOut();   
  window.location = "index.html";
}





