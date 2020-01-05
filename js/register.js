
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



document.getElementById("register_div").style.display = "block";


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("register_div").style.display = "block";

        var user = firebase.auth().currentUser;
        console.log(user.email)
        if (user != null) {
          alert('REGISTERED');
          logout();
          console.log("success")
         
        } else {
         
          window.location = "register.html";
        }
    } else {
        document.getElementById("login_div").style.display = "block";
    }
  });

function logout() {
    firebase.auth().signOut();   
    window.location = "index.html";
  }

function validateEmail(){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById('email_txt').value;

    if(email.match(mailformat)){
        document.getElementById('email_txt').style.borderColor = "white";
        checkPassword();   
    }

    else if((email != mailformat)&&email != ""){
        alert("You entered the wrong type of email");
        document.getElementById('email_txt').style.borderColor = "red";
       
        document.formRegister.email_txt.focus();   
    }

    else {
        alert("Please enter email");
        document.getElementById('email_txt').style.borderColor = "red";    
        }
    }

function checkPassword() { 

    var password = document.getElementById('password_txt').value;
    var repassword = document.getElementById('repassword_txt').value;
   
    if (password == ''){
        alert ("Please enter Password"); 
        document.getElementById('password_txt').style.borderColor = "red";
    }

    else if (repassword == ''){
        alert ("Please enter confirm password"); 
        document.getElementById('repassword_txt').style.borderColor = "red";
    } 
   
   else if (password != repassword) { 
        alert ("Password did not match Please try again") 
        document.getElementById('password_txt').style.borderColor = "red";
        document.getElementById('repassword_txt').style.borderColor = "red";    
    } 

    else { 
        Register() ;
        } 
    } 

  function Register(){


    var email = document.getElementById('email_txt').value;
    var password = document.getElementById('password_txt').value;
    
    
   
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if(errorCode === 'auth/weak-password'){
                alert('The password must more than 6 character');   
                document.getElementById('password_txt').style.borderColor = "red";
               
            } else {
                alert(errorMessage);
               
               
            }
    
            console.log(error);
              
           
        });
    
        
} 



















    
      
       
        
    
  



  




