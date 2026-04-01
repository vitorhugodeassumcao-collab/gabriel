algoritmo "inc"

var
  peso : real
  altura : real
  inc: real

inicio

  escreval("Digite seu peso: ")
  leia(peso)
  escreva("digite sua altura")
  leia(altura)
  inc <-peso / (altura*altura)

  se inc < 18.5 entao
  escreval("vc esta abaixo do peso")
  senao se inc < 25 e inc > 18.5 entao
  escreval("vc esta no peso ideal")
  senao se inc < 30 e inc > 25 entao
  escreval ("vc esta acima do peso")
  senao se 30 < inc entao
  escreval(" vc ta imenso para de comer pelo amor de deus")

fimse
fimse
fimse
fimse


fimalgoritmo