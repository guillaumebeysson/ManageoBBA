window.onscroll = function () {
    growShrinkBackUp();
};
function growShrinkBackUp() {
    var Backup = document.getElementById("back-up");
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        Backup.style.bottom = "10px";
        Backup.style.right = "10px";
    } else {
        Backup.style.bottom = "10px";
        Backup.style.right = "-60px";
    }
}