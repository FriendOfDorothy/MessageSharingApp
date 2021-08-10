let form = document.querySelector("form");

let { hash } = window.location;
let message = atob(hash.replace("#", ""));

if (message) {
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");

    document.querySelector("h1").innerHTML = message;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");

    let inputField = document.querySelector("#message-input");
    let string = inputField.value;
    let encrypted = btoa(string);
    let input = document.querySelector("#link-input");

    input.value = `${window.location}#${encrypted}`;
    input.select();
});