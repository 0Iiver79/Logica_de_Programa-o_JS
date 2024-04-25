function alternarModo() {
    let body = document.body;
    body.classList.toggle("modo-claro");
}
function abrirFacCat() {
    document.getElementById("conteudoPrincipal").style.display = "none";
    document.getElementById("conteudoExercicios").style.display = "block";
}
function abrirMazano() {
    document.getElementById("conteudoPrincipal").style.display = "none";
    document.getElementById("conteudoExerciciosMazano").style.display = "block";
}

function voltarMazano() {
    document.getElementById("conteudoPrincipal").style.display = "block";
    document.getElementById("conteudoExerciciosMazano").style.display = "none";
}
function voltarFacCat() {
    document.getElementById("conteudoPrincipal").style.display = "block";
    document.getElementById("conteudoExercicios").style.display = "none";
}

function exercicio1() {
    let valor, antecessor;

    valor = parseInt(prompt("Digite um valor: "));

    antecessor = valor - 1;

    alert("O antecessor de " + valor + " é: " + antecessor);

}

function exercicio2() {
    let base = parseInt(prompt("Digite a base do retângulo: "));
    let altura = parseInt(prompt("Digite a altura do retângulo: "));

    let area = base * altura;

    alert("A área do retângulo é: " + area);
}

function exercicio3() {
    let anos = parseInt(prompt("Digite a idade em anos: "));
    let meses = parseInt(prompt("Digite a idade em meses: "));
    let dias = parseInt(prompt("Digite a idade em dias: "));
    let idadeEmDias = (anos * 365) + (meses * 30) + dias;

    alert("A idade expressa em dias é: " + idadeEmDias);
}
function exercicio4() {

    let totalEleitores = parseInt(prompt("Digite o número total de eleitores: "));
    let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
    let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
    let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

    let percentualBrancos = (votosBrancos * 100.0) / totalEleitores;
    let percentualNulos = (votosNulos * 100.0) / totalEleitores;
    let percentualValidos = (votosValidos * 100.0) / totalEleitores;

    alert("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%\n" +
        "Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%\n" +
        "Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");

}
function exercicio5() {
    let salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário: "));
    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%): "));

    let novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100);

    alert("O novo salário do funcionário é: R$ " + novoSalario.toFixed(2));
}

function exercicio6() {
    let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));
    let percentualDistribuidor = 0.28;
    let impostos = 0.45;

    let custoConsumidor = custoFabrica + (custoFabrica * percentualDistribuidor) + (custoFabrica * impostos);

    alert("O custo final do carro ao consumidor é: R$ " + custoConsumidor.toFixed(2));
}

function exercicio7() {

    let numeroCarrosVendidos, valorTotalVendas, salarioFixo, valorPorCarro, salarioFinal;

    numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos pelo vendedor: "));
    valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas realizadas pelo vendedor: "));
    salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "));
    valorPorCarro = parseFloat(prompt("Digite o valor que o vendedor recebe por carro vendido: "));

    salarioFinal = salarioFixo + (valorPorCarro * numeroCarrosVendidos) + (0.05 * valorTotalVendas);

    alert("O salário final do vendedor é: " + salarioFinal.toFixed(2));

}

function exercicio8() {
    let valor;
    valor = parseFloat(prompt("Digite um Valor: "));

    if (valor > 10) {
        alert("é maior que 10!");
    } else {

        alert("não é maior que 10!");
    }
}

function exercicio9() {
    let valor;
    valor = parseFloat(prompt("Digite um Valor: "));

    if (valor >= 0) {
        alert("O valor é positivo.");
    } else {

        alert("O valor é negativo.");
    }
}

function exercicio10() {
    let numeroMacas, custoTotal;

    numeroMacas = parseInt(prompt("Digite o número de maçãs compradas:"));

    if (numeroMacas < 12) {
        custoTotal = numeroMacas * 1.30;
    } else {
        custoTotal = numeroMacas * 1.00;
    }

    alert("O custo total da compra é: R$ " + custoTotal.toFixed(2));

}

function exercicio11() {
    let nota1, nota2, media;

    nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação: "));
    nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação: "));
    media = (nota1 + nota2) / 2;
    if (media >= 6) {
        alert("Parabéns! Você foi aprovado com média: " + media.toFixed(2));
    } else {
        alert("Infelizmente você não foi aprovado. Sua média foi: " + media.toFixed(2));
    }
}

function exercicio12() {
    let Fahrenheit, Celsius;


    Fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));


    Celsius = (Fahrenheit - 32) * 5 / 9;


    alert("A temperatura em Celsius é: " + Celsius + "°C");
}
function exercicio13() {
    let n1, n2, n3, media;


    n1 = parseFloat(prompt("Digite a Primeira nota:"));
    n2 = parseFloat(prompt("Digite a Segunda nota:"));
    n3 = parseFloat(prompt("Digite a Terceira nota:"));


    media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;


    alert("A média final do aluno é: " + media);
}
function exercicio14() {
    let anoAtual, anoNascimento, idade;


    anoAtual = parseInt(prompt("Digite o ano atual:"));
    anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));


    idade = anoAtual - anoNascimento;


    if (idade >= 16) {
        alert("Você poderá votar este ano.");
    } else {
        alert("Você não poderá votar este ano.");
    }
}
function exercicio15() {
    let valor1, valor2, maior;

    valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    valor2 = parseFloat(prompt("Digite o segundo valor:"));

    if (valor1 > valor2) {
        maior = valor1;
    } else {
        maior = valor2;
    }

    alert("O maior valor é: " + maior);

}
function exercicio16() {
    let valor1, valor2, maior;

    valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    valor2 = parseFloat(prompt("Digite o segundo valor:"));

    if (valor1 > valor2) {
        maior = valor1;
    } else {
        maior = valor2;
    }

    alert("O maior valor é: " + maior);

}
function exercicio17() {
    let valor1, valor2, menor, maior;

    valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    valor2 = parseFloat(prompt("Digite o segundo valor:"));

    if (valor1 < valor2) {
        menor = valor1;
        maior = valor2;
    } else {
        menor = valor2;
        maior = valor1;
    }

    alert("Os valores em ordem crescente são: " + menor + " e " + maior);

}



function exercicioMazano1() {
    let valor1, valor2, diferenca;

    valor1 = parseInt(prompt("Digite o primeiro valor: "));
    valor2 = parseInt(prompt("Digite o segundo valor: "));

    if (valor1 > valor2) {
        diferenca = valor1 - valor2;
    } else {
        diferenca = valor2 - valor1;
    }

    alert("A diferença entre os valores é: " + diferenca);

}
function exercicioMazano2() {
    let numero;
    numero = parseInt(prompt("Digite um número inteiro: "));
    if (numero < 0) {
        numero *= 1;
    }
    alert("O valor absoluto do número é: " + numero)
}
function exercicioMazano3() {
    let nota1, nota2, nota3, nota4, media;

    nota1 = parseFloat(prompt("Digite a primeira nota: "));
    nota2 = parseFloat(prompt("Digite a segunda nota: "));
    nota3 = parseFloat(prompt("Digite a terceira nota: "));
    nota4 = parseFloat(prompt("Digite a quarta nota: "));

    media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 5) {
        alert("O aluno foi aprovado com média " + media);
    } else {
        alert("O aluno não foi aprovado com média " + media);
    }
}
function exercicioMazano4() {
    let nota1, nota2, nota3, nota4, media, notaExame, novaMedia;
    nota1 = parseFloat(prompt("Digite a primeira nota: "));
    nota2 = parseFloat(prompt("Digite a segunda nota: "));
    nota3 = parseFloat(prompt("Digite a terceira nota: "));
    nota4 = parseFloat(prompt("Digite a quarta nota: "));

    media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) {
        alert("O aluno foi aprovado com média " + media);
    } else {
        notaExame = parseFloat(prompt("Digite a nota do exame: "));

        novaMedia = (media + notaExame) / 2;

        if (novaMedia >= 5) {
            alert("O aluno foi aprovado em exame com média: " + novaMedia);
        } else {
            alert("O aluno não foi aprovado com média: " + novaMedia);
        }
    }
}
function exercicioMazano5() {
    let A, B, C, temp;
    A = parseFloat(prompt("Digite o Valor de A: "));
    B = parseFloat(prompt("Digite o Valor de B: "));
    C = parseFloat(prompt("Digite o Valor de C: "));
    if (A > B) {
        temp = A;
        A = B
        B = temp
    }
    if (B = C) {
        temp = B;
        B = C;
        C = temp;
    }
    if (A > B) {
        temp = A;
        A = B;
        B = temp;
    }
    alert("Os valores em ordem crescente são: " + A + ", " + B + ", " + C);
}
function exercicioMazano6() {
    let valor;
    valor = parseInt(prompt("Digite um valor inteiro: "));
    if (valor <= 3) {
        alert("O valor digitado é: " + valor);
    } else {
        alert("O valor digitado é maior que tres!");
    }
}
function exercicioMazano7() {
    let numero, resultado, contador;

    numero = parseInt(prompt("Digite um número para gerar a tabuada de multiplicação: "));

    for (contador = 1; contador <= 10; contador++) {
        resultado = numero * contador;
        console.log(numero + " x " + contador + " = " + resultado);
    }

}
function exercicioMazano8() {
    let soma;
    soma = (1 + 100) * 100 / 2;
    alert("A soma dos cem primeiros números inteiros é: " + soma);
}
function exercicioMazano9() {
    let somatorio = 0;

    for (let numero = 1; numero <= 500; numero++) {
        if (numero % 2 === 0) {
            somatorio += numero;
        }
    }

    alert("O somatório dos valores pares de 1 até 500 é: " + somatorio);
}
function exercicioMazano10() {
    for (let numero = 0; numero <= 20; numero++) {
        if (numero % 2 !== 0) {
            console.log(numero);
        }
    }
}
function exercicioMazano11() {
    let resultado = 1;

    for (let expoente = 0; expoente <= 15; expoente++) {
        console.log("3 elevado a", expoente, "é", resultado);
        resultado *= 3;
    }
}
function exercicioMazano12() {
    let soma = 0;
    let contador;
    
    for (contador = 1; contador <= 10; contador++) {
        let valor = parseFloat(prompt("Digite o valor, " + contador + ":"));
        soma += valor;
    }
    
    let media = soma / 10;
    
    console.log("O total do somatório é: ", soma);
    console.log("A média aritmética é: ", media);
}
function exercicioMazano13() {
    let numero = 15;
    alert("Olhe o console para ver o Resultado.")

    while (numero <= 200) {
        const quadrado = numero * numero;
        console.log(quadrado);
        numero++;
    }
}
