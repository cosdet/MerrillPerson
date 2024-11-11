let dia1 = true

function drop(id) {
    const el = document.getElementById(id)
    if (dia1) {
        el.style.display = "none"
        dia1 = false
    } else {
        el.style.display = "initial"
        dia1 = true
    }
    
}