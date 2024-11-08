
//1 - Escreva um programa que exiba "Olá, mundo!" no console.

let saldacao = "Olá, mundo!!!"

console.log(saldacao)

//----------------------------------------------------------------------

//2 - Escreva um programa que calcule a média de três números e exiba o resultado no console. - Para calcular a média você só precisa somar os 3 números e dividir por 3.

const valor1 = 25
const valor2 = 9
const valor3 = 41
const media = 3

console.log((valor1+valor2+valor3)/media)

//ou

const media2 = (41+9+25)/3

//----------------------------------------------------------------------

//3 - Escreva um programa que verifique se um número é maior que 10 e exiba o resultado no console.

const numero = 5

const maior = 10

if (numero > maior) {
    console.log("seu numero e maior que 10")
}

else {
    console.log("seu numero e menor que 10")
}

//4 - Escreva um programa que verifique se um número é positivo e exiba o resultado no console.

const numero1 = -5

const maior2 = 0

if (numero1 > maior2) {
    console.log("seu numero e positivo")
}

else {
    console.log("seu numero e negativo")
}

//5 - Escreva um programa que calcule a soma de dois números e exiba o resultado utilizando uma template string. Por exemplo, se os números forem 5 e 3, o programa deve exibir "A soma de 5 e 3 é igual a 8"

const numeroSoma = 3
const numeroSoma2 = 5

console.log(`A soma dos numeros ${numeroSoma} e a soma do ${numeroSoma2} é igual a ${numeroSoma + numeroSoma2}`)




