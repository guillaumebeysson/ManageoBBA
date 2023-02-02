// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkid7lN5W3T52Hfe7rzaNizom_-PVUvsg",
    authDomain: "fir-9cb64.firebaseapp.com",
    databaseURL: "https://fir-9cb64-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-9cb64",
    storageBucket: "fir-9cb64.appspot.com",
    messagingSenderId: "938406475697",
    appId: "1:938406475697:web:0a3b420234856e36b66f90",
    measurementId: "G-GKKLV6XWPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, get, child, update, remove } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

const db = getDatabase();

var username = document.getElementById("username");
var valideUsername = document.getElementById("valideUsername");

// Push en base
function save() {
    set(ref(db, "username/"), {
        username: username.value
    })
        .then(() => {
            alert("donnée envoyée")
        })
        .catch((error) => {
            alert("erreur " + error)
        })
    const dbref = ref(db);
    get(child(dbref, "username/")).then((snapshot) => {
        if (snapshot.exists()) {
            username.value = snapshot.val().username;
            document.getElementById("ajoutname").innerHTML = snapshot.val().username;
        }
        else {
            alert("No data found")
        }
    })
        .catch((error) => {
            alert("erreur " + error)
        })
}


//read data
function selectData() {

}

valideUsername.addEventListener('click', save)
voirCommande.addEventListener('click', selectData)