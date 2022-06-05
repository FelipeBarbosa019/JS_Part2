const click = document.querySelector ("#btn");
const result = document.querySelector ("h2");

click.addEventListener ("click", function(e) {
    e.preventDefault();
    const number1 = document.getElementById ("box1").value;
    const number2 = document.getElementById ("box2").value;

    if (Number(number1)==Number(number2)) {
        result.textContent = "Resultado: Os números são iguais.";
    }

    else if (number1<number2) {
        result.textContent = "Resultado: O primeiro número é menor que o segundo.";
    }

    else {
        result.textContent = "Resultado: O primeiro número é maior que o segundo.";
    }
});