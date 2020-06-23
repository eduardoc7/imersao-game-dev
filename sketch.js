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

// variáveis do inimigo:
let imagemInimigo;
let inimigo;
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

function preload(){
  // função para carregar arquivos na memória, roda antes da função setup

  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  gamesong = loadSound('sons/trilha_jogo.mp3')
  jumpSong = loadSound('sons/somPulo.mp3')
}

function setup() {
  // função utilizada pra inicialização, rodando apenas uma vez

  createCanvas(windowWidth, windowHeight); // mudar o tamanho da tela, deixando responsivo
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 104, 104)
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

  if(personagem.colidindo(inimigo)){
    console.log('colidiu')
    noLoop();
  }
}