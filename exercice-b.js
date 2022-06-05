const click = document.querySelector ("#btn");
const result = document.querySelector ("h2");

click.addEventListener ("click", function(e) {
    e.preventDefault();
    const word1 = document.getElementById ("box1").value;
    const word2 = document.getElementById ("box2").value;

    if ((word1.length)==(word2.length)) {
        result.textContent = "Resultado: As duas palavras tem o mesmo tamanho.";
    }

    else if ((word1.length)>(word2.length)) {
        result.textContent = "Resultado: A primeira palavra é maior que a segunda.";
    }

    else {
        result.textContent = "Resultado: A primeira palavra é menor que a segunda.";
    }
    });