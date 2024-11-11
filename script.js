const dialogues = {
    dia1: true,
    dia2: true,
    dia3: true,
    dia4: true,
    dia5: true
}   

function drop(event, id) {
    const el = document.getElementById(id);
    const button = event.target;

    if (dialogues[id]) {
        button.classList.remove("open");
        button.classList.add("closed");
        el.style.display = "none";
        dialogues[id] = false;
    } else {
        button.classList.remove("closed");
        button.classList.add("open");
        el.style.display = "initial";
        dialogues[id] = true;
    }
}