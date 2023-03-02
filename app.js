const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if (!pass1.value || !pass2.value) {
        alert("Írd be a jelszót!")
    }
    else if (pass1.value !== pass2.value) {
        alert("A két jelszó nem egyezik!")
    }
})