let dollarUser = document.getElementById("dollar")
let pesoColombianoUser = document.getElementById("pesoColombiano")


dollarUser.addEventListener("keyup",function(){
    let conversion = 3887.88 * parseInt(dollarUser.value)
    pesoColombianoUser.value = conversion
})
pesoColombianoUser.addEventListener("keyup",function(){
    let conversion = 0.00026 * parseInt(pesoColombianoUser.value)
    dollarUser.value = conversion
})