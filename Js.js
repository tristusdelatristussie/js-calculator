var result = document.querySelector("#resultat")
var buttest = document.querySelector("#butest")

var cal = document.createElement("div")
cal.setAttribute("id", "cal")
cal.style.display = "flex"
document.querySelector("body").after(cal)


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




var ob = {

    a: 0,
    b: 0,
    c: 0,
    calc: function() {

        if (this.c == 0) {
            this.a = parseFloat(addition(this.a, this.b))
            console.log("ob.cal = " + this.a)
            this.b = 0
        }
        if (this.c == 1) {
            this.a = soustraction(this.a, this.b)
            console.log("ob.cal = " + this.a)
            this.b = 0
        }
        if (this.c == 2) {
            this.a = multiplication(this.a, this.b)
            console.log("ob.cal = " + this.a)
            this.b = 0
        }
        if (this.c == 3) {
            this.a = division(this.a, this.b)
            console.log("ob.cal = " + this.a)
            this.b = 0
        }
    },
    clear: function() {
        this.a = 0
        this.b = 0
        this.c = 0


    }

}


//nombres et verif signe

var recup = result.textContent
var affiche = document.getElementById("resultat")

var numbers = document.getElementById("calNb").childNodes

function numbListn() {

    for (i = 0; i < numbers.length; i++) {

        var elem = numbers[i]
        elem.addEventListener("click", function(e) {


                if (e.target.textContent == "Clear") {

                    recup = 0
                    ob.clear()
                    affiche.textContent = ""


                } else {

                    recup += e.target.textContent
                    result.textContent = recup
                    console.log(" recup " + result.textContent)

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

            ob.b = parseFloat(recup)



            if (op.textContent == "+") {


                ob.calc()
                ob.c = 0
                recup = 0
                affiche.textContent = ob.a.toString()

            }

            if (op.textContent == "-") {

                ob.calc()
                ob.c = 1
                recup = 0
                affiche.textContent = ob.a.toString()

            }

            if (op.textContent == "*") {

                ob.calc()
                ob.c = 2
                recup = 0
                affiche.textContent = ob.a.toString()

            }

            if (op.textContent == "/") {

                ob.calc()
                ob.c = 3
                recup = 0
                affiche.textContent = ob.a.toString()

            }


        });
    }


}

numbListn()
operListn()