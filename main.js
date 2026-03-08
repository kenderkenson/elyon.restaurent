let a = 0
let b = 0
let c = 0 

setInterval( function () => {
    if (a < 500){
        a = a + 10
        document.getElementById("n1").innerText  = a + "+"
    }

        if (b < 100){
        b = b + 2
        document.getElementById("n2").innerText  = b + "+"
    }

        if (c < 10){
        c = c + 1
        document.getElementById("n3").innerText  = c + "%"
    }

}, 200 )