let btnn = document.querySelector(".up");

window.onscroll = function() {
    if (window.scrollY >= 600) {
        btnn.style.display = "block";
    } else {
        btnn.style.display = "none";
    }
}

btnn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    })
}
const modalBtn = document.querySelector(".search");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function() {
    modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function() {
    modal.classList.remove("open-modal");
});