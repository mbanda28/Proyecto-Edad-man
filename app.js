const userDay = document.querySelector('.inp-day')  // inputs
const userMonth = document.querySelector('.inp-month')  // inputs
const userYear = document.querySelector('.inp-year')  //inputs

const daycontainer = document.querySelector('.day')
const monthcontainer = document.querySelector('.month')
const yearcontainer = document.querySelector('.year')

const day = document.querySelector('.r-day')  //resultado
const month = document.querySelector('.r-month')  //resultado
const year = document.querySelector('.r-year')  //resultado

const p = document.querySelector('.field')
const p2 = document.querySelector('.field1')
const p3 = document.querySelector('.field2')

const alertDay = document.querySelector('.alert-day')
const alertMonth = document.querySelector('.alert-month')
const alertYear = document.querySelector('.alert-year')



userDay.addEventListener("change", function(e) {
    const valor = userDay.value
    const dia = new Date()

    const diaNacimiento = Math.abs(valor - dia.getDate())
    
    if (valor <=31 && valor != String){
        day.textContent = diaNacimiento
        userDay.style.border= "2px solid var(--Light-grey)";
        p.classList.add('inactive')
        alertDay.style.color = "var(--grey)";
    } else {
        console.log("no es un numero valido")
        userDay.style.border= "2px solid var(--Light-red)";
        p.classList.remove('inactive')
        alertDay.style.color = "var(--Light-red)";
    }

})

userMonth.addEventListener("change", function(e) {
    const valor = userMonth.value
    const mes = new Date()
    const mesModificado = mes.getMonth();

    const diaNacimiento = (Math.abs(valor - mesModificado) +1)

    if (valor >0 && valor <=12 && valor != String){
        month.textContent = diaNacimiento
        userMonth.style.border= "2px solid var(--Light-grey)";
        p2.classList.add('inactive')
        alertMonth.style.color = "var(--grey)";
    } else {
        console.log("no es un numero valido")
        p2.classList.remove('inactive')
        userMonth.style.border= "2px solid var(--Light-red)";
        alertMonth.style.color = "var(--Light-red)";
    }
})

userYear.addEventListener("change", function(e) {
    const valor = userYear.value
    const anno = new Date()

    const diaNacimiento = Math.abs(valor - anno.getFullYear())

    if (valor >=1950 && valor != String){
        year.textContent = diaNacimiento
        userYear.style.border= "2px solid var(--Light-grey)";
        p3.classList.add('inactive')
        alertYear.style.color = "var(--grey)";
    } else {
        p3.classList.remove('inactive')
        userYear.style.border= "2px solid var(--Light-red)";
        alertYear.style.color = "var(--Light-red)";
    }
})
