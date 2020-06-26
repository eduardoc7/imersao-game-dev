class Jogo {
    // classe do jogo principal
    constructor(){
        this.cenario = new Cenario;
        this.personagem = new Personagem();
        this.pontuacao = new Pontuacao();
        this.inimigos = [];
        this.indice = 0;

        this.mapa = [
            { inimigo: 0, velocidade: 10 },
            { inimigo: 1, velocidade: 30 },
            { inimigo: 1, velocidade: 15 },
            { inimigo: 2, velocidade: 40 },
        ];
    }   
    setup(){
        this.cenario = new Cenario(imagemCenario, 5);
        this.personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 50, 110, 135, 220, 270);
        vida = new Vida(3, 3)
        
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 50, 52, 52, 104, 104, 10)
        const inimigoTroll = new Inimigo(matrizTroll, imagemTroll, width, 25, 200, 200, 400, 400, 10)
        const inimigoVoador = new Inimigo(matrizVoador, imagemVoador, width - 52, 200, 100, 75, 200, 150, 10)
        this.inimigos = [inimigo, inimigoTroll, inimigoVoador]

        gamesong.loop(); // deixar o som em looping
    }
    keyPressed(key){
        if(key === 'ArrowUp'){
            this.personagem.pula();
            // som do pulo a cada tecla:
            jumpSong.play()
        }
    }
    draw(){
        this.cenario.exibe();
        this.cenario.move();

        this.personagem.aplicaGravidade()
        this.personagem.exibe();

        const linhaAtual = this.mapa[this.indice]
        const inimigo = this.inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.pLargura;
        inimigo.velocidade = linhaAtual.velocidade;
        
        inimigo.exibe();
        inimigo.move();

        if(inimigoVisivel){
            this.indice++ ;
            inimigo.aparece()
            if(this.indice > this.mapa.length - 1){ 
                this.indice  = 0
            }
        }

        if(this.personagem.colidindo(inimigo)){            vida.perdeVida();
            this.personagem.tornaInvencivel();

            if(vida.vidas === 0){
                image(imagemGameover, width/2 - 200, height/2.5)
                noLoop()
            }
        }

        vida.draw();
        this.pontuacao.exibe();
        this.pontuacao.addPonto();
    }
}