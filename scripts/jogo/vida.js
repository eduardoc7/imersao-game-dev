class Vida {
    // classe para mostrar as vidas, tirar e colocar durante o jogo
    constructor(maxima, inicial){
        this.maxima = maxima;
        this.inicial = inicial;
        this.vidas = this.inicial;

        // variáveis para a posição e o tamanho da imagem:
        this.largura = 30;
        this.altura = 30;

        this.xInicial = 20;
        this.y = 20;
    }

    draw(){
        // for para ficar verificando qual a quantidade das vidas,
        // e ficar retirando ou aumentando essa quantidade
        for(let i = 0; i < this.vidas; i++){
            // margem para separar os corações da vida:
            const margem = i * 25;
            const posicao = this.xInicial * (1 + i)
            image(imagemVida, posicao + margem, this.y, this.largura, this.altura)
        }
    }

    ganhaVida(){
        if(this.vidas <= this.maxima){
            this.vidas++
        }
    }
    
    perdeVida(){
        this.vidas--
    }
}