algoritmo "investimento"

var
  valor: real
  qual: caractere
  

inicio

  escreval("qual valor ")
  leia(valor)
  escreval("qual tipo , 1 para poupança, 2 para fundo de renda fixa")
  leia(qual)
  

  se qual = "1" entao
  escreval(valor+(valor*0.03))
  senao se qual = "2" entao
  escreval(valor+(valor*0.04))
  
  fimse
  fimse

fimalgoritmo