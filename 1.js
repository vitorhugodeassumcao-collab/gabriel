algoritmo "idade para votar"

var
  nascimento: inteiro
  anoatual: inteiro
  resto: inteiro


inicio

  escreval("Digite o ano que vc nasceu: ")
  leia(nascimento)

  anoatual <- 2026
  resto <- anoatual-nascimento
  escreval("sua idade" resto)
  se resto > 18 entao
  escreval("vc possui idade suficiente pra votar e pra dirigir")
  senao
  escreval("vc não possui idade suficiente para votar e dirigir")

  fimse

  
fimalgoritmo