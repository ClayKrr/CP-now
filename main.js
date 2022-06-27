function myFunction() {
    alert("Successfully added to your Wishlist!");
}

window.scrollTo({
    top: 0,
    behavior: 'smooth'
});

function sendMail() {
    var link = "mailto:clay.focus2015@gmail.com" +
        "?cc=" +
        "&subject=" + encodeURIComponent("") +
        "&body=";

    window.location.href = link;
}