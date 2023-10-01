/*
-Exercício proposto por professor Gustavo com a seguinte resolução:

::: Leia valores A e B. Trocar os valores
 entre as duas variáveis, a variável A passa
  a possuir o valor da variável B e a
 variável B passa a possuir <br> o valor da variável A.:::

- Os comentários abaixo são referentes a minha experiência em realizar a tarefa de "cabeça"/
- Tentei resolver o exercício abaixo com a solução de criar um If porém "quebrei a cabeça";
- Vi a resulção e conclui que o modelo proposto foi bem mais simples e fácil para resolver
- Para quem quiser tentar fazer o execício é só seguir a instrução ou mesmo cópiar tudo abaixo fazendo 
seu próprio passo a passo.

*/




function inserido(){
    var criarA = document.getElementById('valorA').value;
    //alert("O valor inserido por A foi "+ criarA );//acertei

    var criarB = document.getElementById('valorB').value;
    //alert("O valor inserido por A foi " + criarA + " O valor inserido por B foi "+ criarB );//errei

    var criarC = criarB;
    var criarB = criarA;
    var criarA = criarC;


    console.log('Variável A: ' + criarA)
    console.log('Variável B ' + criarB)

}

/*if (criarA != criarB) {

    criarA = criarB
    
}*/