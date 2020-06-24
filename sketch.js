// variáveis do cenario:
let imagemCenario;
let cenario;

// variáveis do personagem:
let imagemPersonagem;
let personagem;

// matriz para navegar dentro do nosso mapa de imagens
// a primeira coluna dessa matriz seria o eixo x
// e a segunda coluna seria o eixo y
// com a variavel frameAtual nós podemos percorrer dentro desse array:
const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

//variáveis dos sons:
let gameSong;
let jumpSong;

// variáveis dos inimigos:
let imagemInimigo;
let inimigo;
let imagemTroll;
let inimigoTroll;
let imagemVoador;
let inimigoVoador;
const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]
const matrizTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

function preload(){
  // função para carregar arquivos na memória, roda antes da função setup

  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  imagemTroll = loadImage('imagens/inimigos/troll.png')
  imagemVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
  gamesong = loadSound('sons/trilha_jogo.mp3')
  jumpSong = loadSound('sons/somPulo.mp3')
}

function setup() {
  // função utilizada pra inicialização, rodando apenas uma vez

  createCanvas(windowWidth, windowHeight); // mudar o tamanho da tela, deixando responsivo
  cenario = new Cenario(imagemCenario, 4);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 200)
  inimigoTroll = new Inimigo(matrizTroll, imagemTroll, width, 0, 200, 200, 400, 400, 10, 2500)
  inimigoVoador = new Inimigo(matrizVoador, imagemVoador, width - 52, 200, 100, 75, 200, 150, 10, 1500)
  frameRate(40); // velocidade que o frame será rodado, ou seja, a velocidade da tela
  gamesong.loop(); // deixar o som em looping
}

function keyPressed(){
  // função para ficar ouvindo um evento, 
  // quando pressionada, chama o método
  if(key === 'ArrowUp'){
    personagem.pula();
  // som do pulo a cada tecla:
  jumpSong.play()
  }
}

function draw() {
  // função utilizada para animações, repetindo várias vezes

  cenario.exibe();
  cenario.move();

  personagem.aplicaGravidade()
  personagem.exibe();

  inimigo.move();
  inimigo.exibe();

  inimigoTroll.exibe();
  inimigoTroll.move();

  inimigoVoador.exibe();
  inimigoVoador.move();


  if(personagem.colidindo(inimigo)){
    console.log('colidiu')
    // noLoop();
  }
}