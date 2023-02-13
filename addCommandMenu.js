
// Fonction pour ajouter les burgers dasns l'input de commande et pop up pou l'affichage
let buttons = document.querySelectorAll("button[data-info]");
let input = document.getElementById("menu");
let messagePop = document.getElementById("messagePop");
for (let btn of buttons) {
    btn.addEventListener("click", function () {
        if (input.value === "") {
            input.value += btn.getAttribute("data-info");
        } else {
            input.value += " + " + btn.getAttribute("data-info");
        }
        messagePop.innerHTML = "<i class='fa-solid fa-check'></i> " +
            btn.getAttribute("data-info") +
            " ajouté";
        messagePop.classList.add("view");
        setTimeout(function () {
            messagePop.classList.remove("view");
        }, 3000);
    });
}


// fonction pour delete pour supprimer le contenu de l'input des menus
let btnDeleteMenuInput = document.getElementById("deleteValueInputMenu");
btnDeleteMenuInput.addEventListener("click", function () {
    input.value = "";
})

// confetti quand commande est validée
const funButton = document.querySelector(".shake");
funButton.addEventListener("click", function (e) {
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
});
