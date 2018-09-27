// Initialize Firebase
var config = {
    apiKey: "AIzaSyBpbbR6E-6rneEZ1ChJm5ATbilDOZ07ENk",
    authDomain: "semanaiproject.firebaseapp.com",
    databaseURL: "https://semanaiproject.firebaseio.com",
    projectId: "semanaiproject",
    storageBucket: "semanaiproject.appspot.com",
    messagingSenderId: "694158137766"
};
firebase.initializeApp(config);
const auth=firebase.auth();

var login = document.getElementById("login");
var email = document.getElementById("email");
var password = document.getElementById("password");
var logout = document.getElementById("logout");
var alertClose = document.getElementById("alertClose");
var alertMessage = document.getElementById("alertMessage");


login.addEventListener("click", function() {
    let email_v = email.value;
    let password_v = password.value;

    auth.signInWithEmailAndPassword(email_v, password_v).catch(function(error) {
        // TODO Check this
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alertMessage.innerHTML = error.message;
        $(".alert").hide().show('medium');
        console.log(errorMessage);
        // ...
    });
});

auth.onAuthStateChanged(function(user) {
    if (user) {
        $("#loginDiv").addClass("collapse");
        $("#infoDiv").removeClass("collapse");
    }

    else {
        // Cuando no se ha hecho login, solo muestra esta sección
        $("#infoDiv").addClass("collapse");
        $("#loginDiv").removeClass("collapse");
    }
});

logout.addEventListener("click",function(){
    auth.signOut ();
});

alertClose.addEventListener("click", function() {
   $(".alert").hide();
});
