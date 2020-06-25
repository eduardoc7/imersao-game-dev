function setup() {
  // função utilizada pra inicialização, rodando apenas uma vez
  createCanvas(windowWidth, windowHeight); // mudar o tamanho da tela, deixando responsivo
  frameRate(40); // velocidade que o frame será rodado, ou seja, a velocidade da tela
  jogo = new Jogo();
  jogo.setup();
}

function keyPressed(){
  // função para ficar ouvindo um evento, 
  // quando pressionada, chama o método
  jogo.keyPressed(key);
}

function draw() {
  // função utilizada para animações, repetindo várias vezes  
  jogo.draw()
}