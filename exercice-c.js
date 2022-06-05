const datecurrent = new Date (current);
const day = String(datecurrent.getDate()).padStart(2,'0');
const month = String(datecurrent.getMonth() + 1).padStart(2,'0');
const year = datecurrent.getFullYear();
const currentdate= `${day}/${month}/${year}`;
const click = document.querySelector ("#btn");
const result = document.querySelector ("h2");

click.addEventListener ("click", function(e) {
    e.preventDefault();
    const birth = document.getElementById ("box-date").value;
    let diffInTime = Math.abs(currentdate - birth)
    console.log(diffInTime);
});




// const day = String(data.getDate()).padStart(2,'0');
// const month = String(data.getMonth() + 1).padStart(2,'0');
// const year = data.getFullYear();
// const currentdate= `${day}/${month}/${year}`;


