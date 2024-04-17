function timestable(){
   let num = window.document.getElementById("num")
   let final = window.document.getElementById("final")
   if(num.value.length == 0 || final.value.length == 0){  // This will create an alert case the user dont input any number
    window.alert("Ops... Sorry you need to Type A Number")
   }else{             // else will then kick in case the user input the numbers.
        let  n = Number(num.value)
        let  e = Number(final.value)
        let x = 0     // need to build a loop this will add 1 until gets to "final"
        let  r = ""
        let res = window.document.getElementById("results")
        res.innerHTML = `The Multiplicaion Result of ${n} is:<br>`
        do {
        r = n*x
        res.innerHTML += `${x} x ${n}  = ${r}<br>`
        x++
        } while(x <= e)
   }   
}

// the key back and forth on top of capsLook will move all the lines at the same time and to mova them to left use shift ><



