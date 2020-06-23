class Inimigo extends Animacao {
    constructor(matriz, imagem, x, pLargura, pAltura, tamanhoX, tamanhoY){
        super(matriz, imagem, x, pLargura, pAltura, tamanhoX, tamanhoY)
        
        this.velocidade = 10
    }
    
    // método para mover a gotinha,
    // definindo uma velocidade que iremos tirar do eixo x
    // subtraindo do eixo x consequentemente o elemento irá para esquerda
    move(){
        this.x -= this.velocidade

        // condição para quando a gotinha atravessar o lado esquerdo da tela
        // fazendo ela voltar para a direita resetando o valor de x
        if(this.x < -this.pLargura){
            this.x = width
        }
    }
}