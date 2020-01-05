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

  
var result = null,
tmp = [];
location.search
.substr(1)
.split("?")
.forEach(function (item) {
  tmp = item.split("=");
  result = decodeURIComponent(tmp[1]);
});
firebase.auth().onAuthStateChanged(function (user) {  //Manage Users in Firebase
var user = firebase.auth().currentUser;
var firebaseRef = firebase.database().ref(`${user.uid}/${result}`);




var r = confirm("คุณต้องการยืนยันการลบครั้งนี้หรือไม่?");
if (r == true) {
firebaseRef.remove().then(function () {
  window.location.href = "./managePerson.html";
}).catch(function (err) {
  console.log(err.message);
})
} else {
window.location.href = "./managePerson.html";
}
document.getElementById("demo").innerHTML = txt;




});
