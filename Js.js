var result = document.querySelector("#resultat")

var buttest = document.querySelector("#butest")



var addition = function(a,b){
    return a+b
}

var soustraction = function(a,b){
    return a-b
}

var multiplication = function(a,b){
    return a*b
}

var division = function(a,b){
    return a/b
}

var regTest = function(a,b){
    
        var myRegex = /[a-zA-Z]/;
    
        if(myRegex.test(a) ||myRegex.test(b) ){
            return false
        }
    
    }



buttest.addEventListener("click", function(e){

    var a = parseFloat(document.querySelector("#op1").value)
    var b = parseFloat(document.querySelector("#op2").value)



    // console.log(a)
    // console.log(b)

    var options = document.getElementById("operations")

    var elem = document.querySelectorAll("option")


    if(!(isNaN(a)&&isNaN(b))){
    

    if(options.selectedIndex == 0 )
    {
        console.log("Addition " + (a+b))
        result.textContent =  addition(a,b)
    }
    if(options.selectedIndex == 1){

        console.log("soustraction " + (a-b))
        result.textContent =  soustraction(a,b)
    }
    if(options.selectedIndex == 2){

        console.log("multiplication " + (a*b))
        result.textContent =  multiplication(a,b)
    }
    if(options.selectedIndex == 3 && b != 0){

        console.log("division " + (a/b))
        result.textContent =  division(a,b)
        
    }else if(b == 0){
        console.log("Erreur pas de division par zero")
        result.textContent =  "Pas de division par zero possible"
        
    }

    }else{

        console.log("Erreur entrez seulement des chiffres")
    }

////////////


    // if(elem[0].textContent == "addition" )
    // {
    //     // console.log("Addition test " + (a+b))
    //     result.textContent =  addition(a,b)
    // }
    // if(elem[1].textContent == "soustraction"){

    
    //     console.log("soustraction " + (a-b))
    //     result.textContent =  soustraction(a,b)
    // }
    // if(elem[2].textContent == "multiplication"){
    //     console.log("multiplication " + (a*b))
    //     result.textContent =  multiplication(a,b)
    // }
    // if(elem[3].textContent == "division"){
    //     console.log("division " + (a/b))
    //     result.textContent =  division(a,b)
    // }

    
        // var res = parseFloat(a * b)
        // console.log("Resultat " + res)
        // result.textContent = parseFloat(a * b)

})



