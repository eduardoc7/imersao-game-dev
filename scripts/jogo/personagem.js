class Personagem {
    constructor(imagem){
        this.imagem = imagem;
        this.tamanhoX = 220;
        this.tamanhoY = 270;
        this.pAltura = 135;
        this.pLargura = 110;
        
        // matriz para navegar dentro do nosso mapa de imagens
        // a primeira coluna dessa matriz seria o eixo x
        // e a segunda coluna seria o eixo y
        // com a variavel frameAtual nós podemos percorrer dentro desse array 
        this.matriz = [
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
        this.frameAtual = 0;
    }

    // método para exibir a imagem no personagem na tela
    // exibindo a cada iteração uma posição da imagem
    // define como a imagem deve aparecer na tela
    exibe(){
        image(this.imagem, 
            0, height - this.pAltura, // define os eixos x e y que irão aparecer na tela
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