class Personagem extends Animacao{
    constructor(matriz, imagem, x, pLargura, pAltura, tamanhoX, tamanhoY){
        super(matriz, imagem, x, pLargura, pAltura, tamanhoX, tamanhoY)
        
        this.yInicial = height - pAltura;
        this.y = this.yInicial;
        this.velpulo = 0;
        this.gravidade = 3;
    }

    pula(){
        // método para fazer o eixo y movimento -50, isto é, para cima:
        this.velpulo = -30;
    }

    aplicaGravidade(){
    // toda vez que o eixo y subir, ele precisa descer.
    // sendo assim, este método faz o personagem subir no eixo em que ele está + a velocidade (no caso 50)
    // e após isso temos a gravidade que é o valor que ele vai cair até chegar no seu eixo y original
        this.y += this.velpulo;
        this.velpulo += this.gravidade;

        // verificação para voltar ao eixo y original 
        if(this.y > this.yInicial){
            this.y = this.yInicial;
        }
    }

    colidindo(inimigo){
        const precisao = .7

        // usando a biblioteca pronta de colisão do ps5,
        // e passando os parametros:
        const colisao = collideRectRect(this.x, this.y, 
            this.pLargura * precisao, this.pAltura * precisao,
            inimigo.x, inimigo.y,
            inimigo.pLargura * precisao, inimigo.pAltura * precisao
            );
        return colisao;
    }
}
