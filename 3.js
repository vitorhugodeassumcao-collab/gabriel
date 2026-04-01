algoritmo "Primeiro Programa"

var
  valor: real
  desconto: real
  pagamento: caractere

inicio

  escreval("Digite o valor do produto ")
  leia(valor)
  escreval("digite a forma de pagamento, 1 para dinheiro ou cheque, 2 para cartão a vista, 3 para parcela de duas vezes, 4 para parcela de 3 vezes")
  leia(pagamento)

  se pagamento = "1" entao
  escreval(valor-(valor*0.10))
  senao se pagamento = "2" entao
  escreval(valor-(valor*0.05))
  senao se pagamento = "3" entao
  escreval(valor)
  senao se pagamento = "4" entao
  escreval( valor+(valor*0.10))

  fimse
  fimse
  fimse
  fimse

fimalgoritmo