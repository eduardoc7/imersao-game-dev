function preload(){
    // função para carregar arquivos na memória, roda antes da função setup
  
    imagemCenario = loadImage('imagens/cenario/cenario2.png');
    imagemGameover = loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png')
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
    imagemTroll = loadImage('imagens/inimigos/troll.png')
    imagemVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
    gamesong = loadSound('sons/trilha_jogo.mp3')
    jumpSong = loadSound('sons/somPulo.mp3')
  }