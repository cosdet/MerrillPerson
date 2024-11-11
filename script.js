let dia1 = true

function drop(event, id) {
    const el = document.getElementById(id);
    const button = event.target;

    if (dia1) {
        button.classList.remove("open");
        button.classList.add("closed");
        el.style.display = "none";
        dia1 = false;
    } else {
        button.classList.remove("closed");
        button.classList.add("open");
        el.style.display = "initial";
        dia1 = true;
    }
}