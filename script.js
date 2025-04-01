idade = prompt("Quantos anos você tem?")

if(idade >= 18){
  escolhaJogador = prompt("digite 1-Pedra, 2-Papel ou 3-Tesoura?")
  escolhaComputador= Math.floor(Math.random() * 3) + 1; 
  console.log("Escolha do computador: " + escolhaComputador)
  if (escolhaJogador == escolhaComputador){
    alert("Empate!")
  }
  
  if(escolhaJogador ==1){
    if(escolhaComputador == 2){
      alert("Computador venceu! Computador escolheu Papel")
    }
    
    if(escolhaComputador == 3){
      alert("Jogador venceu! Computador escolheu Tesouro")
    }
  }
  
  if(escolhaJogador ==2){
    if(escolhaComputador == 1){
      alert("Computador venceu! Computador escolheu Pedra")
    }
    
    if(escolhaComputador == 3){
      alert("Jogador venceu! Computador escolheu Tesouro")
    }
  }
  
  if(escolhaJogador ==3){
    if(escolhaComputador == 1){
      alert("Jogador venceu! Computador escolheu Pedra")
    }
    
    if(escolhaComputador == 2){
      alert("Computador venceu! Computador escolheu Papel")
    }
  }
  
}

else{
   alert("Você NÃO pode jogar jokepo!")
}