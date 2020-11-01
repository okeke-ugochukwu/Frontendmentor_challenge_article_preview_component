var shareButtons = document.getElementById("share-btns");
var shareButtons2 = document.getElementById("share-btns-2");
var statusBar = document.getElementById("status-bar");
var subContent = document.getElementById("sub_content");
function showShareButtons2() {
    if (shareButtons2.style.display === "none") {
        shareButtons2.style.display = "block";
    } else {
        shareButtons2.style.display = "none";
    }
}
function showShareButtons() {
    if (shareButtons.style.display === "none") {
        shareButtons.style.display = "grid";
        statusBar.style.display = "none"
        subContent.style.padding = "40px 0px 0px 0px";
    } else {
        shareButtons.style.display = "none";
        statusBar.style.display = "flex"
        subContent.style.padding = "40px 0px ";
    }
}
