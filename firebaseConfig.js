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
var commandes = document.getElementById("commande");
let messagePop = document.getElementById("messagePop");


// Push en base
function save() {
    set(ref(db, username.value.toUpperCase().replace(/[<>\/()]/g, '')), {
        username: username.value.replace(/[<>\/()]/g, ''),
        menu: menu.value,
        date: Date.now(),
    })
        .then(() => {
            messagePop.innerHTML = "<i class='fa-solid fa-check'></i> commande validée";
            messagePop.classList.add("view");
            setTimeout(function () {
                messagePop.classList.remove("view");
            }, 4000);
            // confetti quand commande est validée
            document.body.classList.add("fun");
            if (window.confetti) {
                console.log("🎉");

                var count = 200;
                var defaults = {
                    origin: { y: 0.7 }
                };

                function fire(particleRatio, opts) {
                    confetti(Object.assign({}, defaults, opts, {
                        particleCount: Math.floor(count * particleRatio)
                    }));
                }

                fire(0.25, {
                    spread: 26,
                    startVelocity: 55,
                });
                fire(0.2, {
                    spread: 60,
                });
                fire(0.35, {
                    spread: 100,
                    decay: 0.91,
                });
                fire(0.1, {
                    spread: 120,
                    startVelocity: 25,
                    decay: 0.92,
                });
                fire(0.1, {
                    spread: 120,
                    startVelocity: 45,
                });
            }
            ;

            console.log("commande envoyée");
        })
        .catch((error) => {
            alert("erreur " + error);
        });
    commandes.style.display = "none";
}


function selectData() {
    // toggle pour afficher ou non les commandes
    if (commandes.style.display === "block") {
        commandes.style.display = "none";
    } else {
        commandes.style.display = "block";
    }
    // récupère les données de firebase
    const dbref = ref(db);
    get(dbref, username.value)
        .then((snapshot) => {
            var data = snapshot.val();
            document.getElementById("commande").innerHTML = "";
            if (snapshot.exists()) {
                // trier par date
                data = Object.values(data).sort((a, b) => b.date - a.date);
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
                        "<li>" +
                        "<p class='dateCommande'>" +
                        formattedDate +
                        "</p>" +
                        "<p class='usernameCommande'>" +
                        name.toUpperCase() +
                        "</p>" +
                        "<p class='menuCommande'>" +
                        menu
                    //+ " <i id='deleteCommandInFirebase' class='fa-regular fa-trash-can'></i>"
                    "</p>" +
                        "</li>";
                    // let deleteButton = document.getElementById("deleteCommandInFirebase");
                    // deleteButton.addEventListener("click", function () {
                    //     delete (dbref, i.username);
                    // });
                }
            } else {
                alert("No data found");
            }
        })
}

valid.addEventListener("click", save);
voirCommande.addEventListener("click", selectData);
