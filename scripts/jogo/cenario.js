class Cenario {
    constructor(imagem, velocidade){
      this.imagem = imagem;
      this.velocidade = velocidade;
      this.x1 = 0;
      this.x2 = width;
    }
    // método pra mostrar o cenário na tela:
    exibe(){
      image(this.imagem, this.x1, 0, width, height);
      image(this.imagem, this.x2, 0, width, height);
    }
    // método para movimento o cenário:
    move(){
      this.x1 -= this.velocidade;
      this.x2 -= this.velocidade;
  
      // verificar se o cenário 1 ja acabou para receber uma nova largura da tela
      if(this.x1 < -width){
        this.x1 = width;
      }
      if(this.x2 < -width){
        this.x2 = width;
      }
    }
  }