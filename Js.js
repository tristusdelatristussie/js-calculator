var result = document.querySelector("#resultat")
var buttest = document.querySelector("#butest")

var addition = function(a, b) {
    return a + b
}

var soustraction = function(a, b) {
    return a - b
}

var multiplication = function(a, b) {
    return a * b
}

var division = function(a, b) {
    return a / b
}

var cal = document.createElement("div")
cal.setAttribute("id", "cal")
cal.style.display = "flex"
document.querySelector("button").after(cal)


//J aurai aimé creer une div supplementaires une fois sur 3 dans la boucle et ajouter clear et entrée dedans aussi

for (i = 0; i < 10; i++) {

    var but1 = document.createElement("div")
    but1.setAttribute("class", "but" + i)
    but1.textContent = i
    but1.style.width = "100px"
    but1.style.height = "80px"
    but1.style.margin = "10px"
    but1.style.backgroundColor = "green"
    but1.style.textAlign = "center"
    but1.style.fontSize = "2em"
    cal.appendChild(but1)


}

// style a factoriser

var butC = document.createElement("div")
butC.setAttribute("class", "butC")
butC.textContent = "Clear"
butC.style.width = "100px"
butC.style.height = "80px"
butC.style.margin = "10px"
butC.style.backgroundColor = "green"
butC.style.textAlign = "center"
butC.style.fontSize = "2em"
cal.appendChild(butC)

var butEnt = document.createElement("div")
butEnt.setAttribute("class", "butEnt")
butEnt.textContent = "="
butEnt.style.width = "100px"
butEnt.style.height = "80px"
butEnt.style.margin = "10px"
butEnt.style.backgroundColor = "green"
butEnt.style.textAlign = "center"
butEnt.style.fontSize = "2em"
cal.appendChild(butEnt)

var cal = document.createElement("div")
cal.setAttribute("id", "operations")
cal.style.display = "flex"
document.querySelector("button").after(cal)

// Boutons operations

for (i = 0; i < 5; i++) {

    if (i < 4) {
        var but1 = document.createElement("div")
        but1.setAttribute("class", "opera" + i)
        but1.style.width = "100px"
        but1.style.height = "80px"
        but1.style.margin = "10px"
        but1.style.backgroundColor = "orange"
        but1.style.textAlign = "center"
        but1.style.fontSize = "2em"
        cal.appendChild(but1)
    }

}

var o = document.querySelectorAll("[class ^= opera]")
o[0].textContent = "+"
o[1].textContent = "-"
o[2].textContent = "*"
o[3].textContent = "/"


// A terminer

var aa = cal.querySelectorAll("div")






// Evenements

buttest.addEventListener("click", function(e) {

    var a = parseFloat(document.querySelector("#op1").value)
    var b = parseFloat(document.querySelector("#op2").value)

    var options = document.getElementById("operations")

    var elem = document.querySelectorAll("option")


    if (!(isNaN(a) && isNaN(b))) {


        if (options.selectedIndex == 0) {

            result.textContent = addition(a, b)
        }
        if (options.selectedIndex == 1) {

            result.textContent = soustraction(a, b)
        }
        if (options.selectedIndex == 2) {

            result.textContent = multiplication(a, b)
        }
        if (options.selectedIndex == 3 && b != 0) {

            result.textContent = division(a, b)

        } else if (b == 0) {

            result.textContent = "Pas de division par zero possible"

        }

    } else {

        console.log("Erreur entrez seulement des chiffres")
    }

})