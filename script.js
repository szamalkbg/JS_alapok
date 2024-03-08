window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    esemenyKezelo4();
});

function elemekElerese1() {
    const ELEM = document.querySelectorAll("section h2")[0]
    const cim = ELEM.innerHTML;
    console.log(cim)
}

function elemekElerese2() {
    const ELEM2=document.querySelectorAll("#ide")[0]
    ELEM2.innerHTML = "<p>Jó reggelt!</p>"
}
function elemekElerese3() {
    const ELEM3=document.querySelectorAll(".ide")[0]
    ELEM3.innerHTML = "<p>Jó reggelt!</p>"
}
function elemekElerese4() {
    const ELEM4 = document.querySelectorAll(".lista")[0];
    let txt = "<ul>";
    for (let i = 0; i < 5; i++) {
        let veletlenszam = Math.floor(Math.random() * (31 - 10 + 1)) + 10;
        txt += "<li>" + veletlenszam + "</li>";
    }
    txt += "</ul>";
    ELEM4.innerHTML = txt;
    
}
function elemekKezelese1() {
    const listaElem = document.getElementById('lista');
    listaElem.classList.add('formazott');
}
function esemenyKezelo4() {
    const tarolo = document.querySelector('.tarolo');
    const elemek = taroloElem.querySelectorAll('.elem');
    for (const elem of elemek) {
        elem.addEventListener('click', function(event) {
            const eredmenyDiv = document.querySelector('.megjelenito');
            eredmenyDiv.textContent = event.target.textContent;
        });
    }
}