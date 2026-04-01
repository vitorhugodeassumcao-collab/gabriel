algoritmo "calculo"

var
n1: real
n2: real
op:caractere

inicio

escreval("digite o primeito numero")
leia(n1)
escreval("digite o segundo numero")
leia(n2)
escreval("digite a operação (+-/*)")
leia(op)

se op = "+" entao
escreva(n1+n2)
senao se op = "-" entao
escreva(n1-n2)
senao se op = "*" entao
escreva(n1*n2)
senao se op = "/" entao
escreva(n1/n2) 
fimse
fimse
fimse
fimse

fimalgoritmo