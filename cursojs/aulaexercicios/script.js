function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = `manha.jpg`
        document.body.style.background = `#e2cd9f`
    } else if (hora >= 12 && hora <= 18) {
        img.src = `tarde.jpg`
        document.body.style.background = `#ffbbaa`
    } else {
        img.src = `noite.jpg`
        document.body.style.background = `#515154`
    }
}
