
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
        }, 4000);
    });
}