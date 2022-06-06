const CurrentDate = new Date ()
const day = String(CurrentDate.getDate()).padStart(2,'0')
const month = String(CurrentDate.getMonth() + 1).padStart(2,'0')
const year = CurrentDate.getFullYear()
const currentdate= `${day}/${month}/${year}`
const click = document.querySelector ("#btn")
const span = document.querySelector ('h2 > span')


click.addEventListener ("click", function(e) {
    e.preventDefault()
    const birth = document.getElementById ("box-date").value
    const birthday = new Date (birth)
    let diffInTime = Math.abs(CurrentDate.getTime() - birthday.getTime())
    DaysLife = diffInTime / (1000*60*60*24)
    var genre = document.querySelector (".genre:checked")
    if (genre.value == "M") {
        DaysRemaining = Math.ceil((73.1*365) - DaysLife)  
    }
    else {
        DaysRemaining = Math.ceil((80.1*365) - DaysLife) 
    }
    span.innerHTML = DaysRemaining
});

