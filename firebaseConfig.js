// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkid7lN5W3T52Hfe7rzaNizom_-PVUvsg",
  authDomain: "fir-9cb64.firebaseapp.com",
  databaseURL:
    "https://fir-9cb64-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-9cb64",
  storageBucket: "fir-9cb64.appspot.com",
  messagingSenderId: "938406475697",
  appId: "1:938406475697:web:0a3b420234856e36b66f90",
  measurementId: "G-GKKLV6XWPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

const db = getDatabase();

var username = document.getElementById("username");
var valid = document.getElementById("valid");
var menu = document.getElementById("menu");
var masquer = document.getElementById("masquerCommande");

// Push en base
function save() {
  set(ref(db, username.value.toUpperCase()), {
    username: username.value,
    menu: menu.value,
    date: Date.now(),
  })
    .then(() => {
      alert("commande envoyée");
      console.log("commande envoyée");
    })
    .catch((error) => {
      alert("erreur " + error);
    });
}

// function selectData() {
//     db.ref.once(username.value, function (snapshot) {
//         console.log(snapshot.val());
//     })
// }

// read data
// function selectData() {
//     const dbref = ref(db);
//     get(child(dbref, username.value))
//         .then((snapshot) => {
//             if (snapshot.exists()) {
//                 username.value = snapshot.val().username;
//                 console.log(snapshot.val());
//                 menu.value = snapshot.val().menu;
//                 document.getElementById("commande").innerHTML =
//                     snapshot.val().username.toUpperCase() + ": " + snapshot.val().menu;
//             } else {
//                 alert("No data found");
//             }
//         })
//         .catch((error) => {
//             alert("erreur " + error);
//         });
// }
//

function selectData() {
  const dbref = ref(db);
  get(dbref, username.value)
    .then((snapshot) => {
      var data = snapshot.val();
      document.getElementById("commande").innerHTML = "";
      if (snapshot.exists()) {
        for (let i in data) {
          console.log(data[i]);
          // transforme la date sous forme de timestamp en DD/MM/YYYY
          let timestamp = data[i].date;
          let date = new Date(timestamp);
          let options = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          };
          let formattedDate = date.toLocaleDateString("fr-FR", options);
          // récupère le nom
          let name = data[i].username;
          // récupère le menu
          let menu = data[i].menu;
          // push la date, le nom et le menu en html
          document.getElementById("commande").innerHTML +=
            formattedDate + ": " + name.toUpperCase() + " --> " + menu + "<br>";
          // document.getElementById("masquerCommande").innerHTML =
          //   "<button id='btnMasquerCommande' class='validBtn'>Masquer les commandes</button>";
        }
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert("erreur " + error);
    });
}

// function masquerCommande() {
//   document.getElementById("btnMasquerCommande").classList.add("hidden");
//   document.getElementById("commande").classList.add("hidden");
// }

// masquer.addEventListener("click", masquerCommande);
valid.addEventListener("click", save);
voirCommande.addEventListener("click", selectData);
