
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7F8TrkmdYbCgF7QKgqkuwxyhajR_0hYw",
    authDomain: "website-9448c.firebaseapp.com",
    projectId: "website-9448c",
    storageBucket: "website-9448c.appspot.com",
    messagingSenderId: "1014931886170",
    appId: "1:1014931886170:web:71c3720968d19b8b524863",
  measurementId: "G-Y2573KP0GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

function signup() {
    
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var passc = document.getElementById('passc').value;

    if (pass == passc) {
        
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                document.getElementById('message').innerText='Account created Sucessfully';
                // Signed in 
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                document.getElementById('message').innerText=errorMessage;
                // ..
            });

        

    } else {

        document.getElementById('message').innerText = 'Password Doesnot Match';
        document.getElementById('message').style.color = 'red'

    }



}

//getting the value of html 
