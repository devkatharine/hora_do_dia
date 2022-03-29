function carregar () {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha250.jpg'
        document.body.style.background = '#b9deec'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'tarde250.jpg'
        document.body.style.background = '#ecae5ce'
    } else {
        //Boa noite
        img.src = 'noite250.png'
        document.body.style.background = '#070624ec'
    }
}


