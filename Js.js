var result = document.querySelector("#resultat")
var buttest = document.querySelector("#butest")

var cal = document.createElement("div")
cal.setAttribute("id", "cal")
cal.style.display = "flex"
document.querySelector("button").after(cal)


//J aurai aimé creer une div supplementaires une fois sur 3 dans la boucle et ajouter clear et entrée dedans aussi


var calOp = document.createElement("div")
calOp.setAttribute("id", "calOp")
calOp.style.display = "flex"
document.querySelector("#cal").appendChild(calOp)



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
        calOp.appendChild(but1)
    }

}

var o = document.querySelectorAll("[class ^= opera]")
o[0].textContent = "+"
o[1].textContent = "-"
o[2].textContent = "*"
o[3].textContent = "/"



var calNb = document.createElement("div")
calNb.setAttribute("id", "calNb")
calNb.style.display = "flex"
document.querySelector("#cal").appendChild(calNb)


for (i = 0; i < 12; i++) {

    var but11 = document.createElement("div")
    but11.style.width = "100px"
    but11.style.height = "80px"
    but11.style.margin = "10px"
    but11.style.backgroundColor = "green"
    but11.style.textAlign = "center"
    but11.style.fontSize = "2em"

    if (i < 10) {

        but11.setAttribute("class", "but" + i)
        but11.textContent = i
        calNb.appendChild(but11)

    } else if (i == 10) {
        but11.setAttribute("class", "butC")
        but11.textContent = "Clear"
        but11.style.backgroundColor = "yellow"
        calNb.appendChild(but11)

    } else if (i == 11) {
        but11.setAttribute("class", "butEnt")
        but11.textContent = "="
        but11.style.backgroundColor = "yellow"
        calNb.appendChild(but11)

    }

}
// Partie calcul 

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

//nombres et verif signe

var memA = 0
var memB = 0
var recup = result.textContent
var affiche = document.getElementById("resultat")
var resu = 0
var signe = 4

var numbers = document.getElementById("calNb").childNodes

function numbListn() {

    for (i = 0; i < numbers.length; i++) {

        var elem = numbers[i]
        elem.addEventListener("click", function(e) {


                if (e.target.textContent == "Clear") {

                    memA = 0
                    memB = 0
                    recup = 0
                    signe = 4

                    affiche = 0

                } else {

                    recup += e.target.textContent

                    affiche.textContent += e.target.textContent

                    console.log(" recup " + recup)

                }

                memB = parseFloat(recup)




                if (signe == 0) {

                    memA = addition(parseFloat(memA), memB)
                    console.log(" result dans numbListn " + memA)
                    recup = 0

                    affiche.textContent = memA


                }
                if (signe == 1) {

                    memA = soustraction(parseFloat(memA), memB)
                    console.log(" result dans numbListn " + memA)
                    recup = 0

                    affiche.textContent = memA


                }

                if (signe == 2) {

                    memA = multiplication(parseFloat(memA), memB)
                    console.log(" result dans numbListn " + memA)
                    recup = 0

                    affiche.textContent = memA


                }

                if (signe == 3 && memB != 0) {


                    memA = division(parseFloat(memA), memB)
                    console.log(" result dans numbListn " + memA)
                    recup = 0



                } else if (signe == 3 && memB == 0) {
                    console.log("Erreur pas de division par zero")
                }


                if (signe == 4) {

                    memA = memB
                    console.log(" result dans numbListn " + memA)

                }




            }


        )
    }

}

//operateurs

var operators = calOp.querySelectorAll("div")

function operListn() {

    for (i = 0; i < operators.length; i++) {

        var elem = operators[i]
        elem.addEventListener("click", function(e) {


            var op = e.target;

            if (op.textContent == "+") {

                recup = 0
                signe = 0
            }

            if (op.textContent == "-") {

                recup = 0
                signe = 1
            }

            if (op.textContent == "*") {

                recup = 0
                signe = 2
            }

            if (op.textContent == "/") {

                recup = 0
                signe = 3
            }
        });
    }


}

numbListn()
operListn()