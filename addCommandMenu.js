
let buttons = document.querySelectorAll("button[data-info]");
let input = document.getElementById("menu");
let messagePop = document.getElementById("messagePop");
for (let btn of buttons) {
    btn.addEventListener("click", function () {
        input.value += btn.getAttribute("data-info") + " + ";
        messagePop.innerHTML = "<i class='fa-solid fa-check'></i> " +
            btn.getAttribute("data-info") +
            " ajouté";
        messagePop.style.display = "block";
        setTimeout(function () {
            messagePop.style.display = "none";
        }, 4000);
    });
}