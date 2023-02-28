function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        //Bom dia!!!
        img.src = 'img/manhã.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!!!
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite!!!
        img.src = 'img/noite.png'
        document.body.style.background = "#515154"
    }
}

function showTime() {
    var date = new Date();
    var h = date.getHours(); //0 - 23
    var m = date.getMinutes(); //0 - 59
    var s = date.getSeconds(); //0 - 59
    var session = "AM";

    if(h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();