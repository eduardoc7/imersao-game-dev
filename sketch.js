// variaveis do cenario:
let imagemCenario;
let cenario;

// variaveis do personagem:
let imagemPersonagem;
let personagem

//variaveis dos sons:
let gameSong;


// função para carregar arquivos na memória, roda antes da função setup
function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  gamesong = loadSound('sons/trilha_jogo.mp3')
}

// função utilizada pra inicialização, rodando apenas uma vez
function setup() {
  createCanvas(windowWidth, windowHeight); // mudar o tamanho da tela
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  gamesong.loop();
}

// função utilizada para animações, repetindo várias vezes
function draw() {
  cenario.exibe()
  cenario.move()

  personagem.exibe();
}