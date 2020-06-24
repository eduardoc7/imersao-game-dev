class Animacao {
    // uma classe genérica para exibição e animação dos personagens
    // definindo: como é exibido na tela, em que posição e tamanho
    // e definindo: como ele é animado, percorrendo com o frame no mapa da imagem

    constructor(matriz, imagem, x, variacaoY, pLargura, pAltura, tamanhoX, tamanhoY){
        this.matriz = matriz;
        this.imagem = imagem;
        this.pLargura = pLargura; 
        this.pAltura = pAltura;
        this.x = x;
        this.variacaoY = variacaoY;
        this.y = height - this.pAltura - this.variacaoY;
        this.tamanhoX = tamanhoX;
        this.tamanhoY = tamanhoY;

        this.frameAtual = 0
    }
    exibe(){
        image(this.imagem, 
            this.x, this.y, // define os eixos x e y que irão aparecer na tela
            this.pLargura, this.pAltura, // define o tamanho da imagem pra aparecer na tela
            this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], // mapeia dentro da imagem o frame da animação
            this.tamanhoX, this.tamanhoY); // mantém o tamanho original da imagem, pra ocorrer o mapeamento

        this.anima();
    }

    // método para trocarmos a animação a cada 16 frames e também zera o frame (ficando em loop).
    // 1 frame = a cada imagem do nosso mapa 
    anima(){
        this.frameAtual++;

        if(this.frameAtual >= this.matriz.length - 1){
            this.frameAtual = 0;
        }
    }
}