class Jogo {
    // classe do jogo principal
    constructor(){
        this.cenario = new Cenario;
        this.personagem = new Personagem();
        this.pontuacao = new Pontuacao();
        this.inimigos = [];
        this.inimigoAtual = 0;
        
    }
    setup(){
        this.cenario = new Cenario(imagemCenario, 3);
        this.personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 50, 110, 135, 220, 270);
      
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 50, 52, 52, 104, 104, 10, 100)
        const inimigoTroll = new Inimigo(matrizTroll, imagemTroll, width, 25, 200, 200, 400, 400, 10, 100)
        const inimigoVoador = new Inimigo(matrizVoador, imagemVoador, width - 52, 200, 100, 75, 200, 150, 10, 100)
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

        const inimigo = this.inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.pLargura;

        inimigo.exibe();
        inimigo.move();

        if(inimigoVisivel){
            this.inimigoAtual++ ;
            if(this.inimigoAtual > this.inimigos.length - 1){ 
                this.inimigoAtual  = 0
            }
            inimigo.velocidade = parseInt(random(10, 30))
        }

        if(this.personagem.colidindo(inimigo)){
            image(imagemGameover, width/2 - 200, height/2.5)
            // noLoop();
        }

        this.pontuacao.exibe()
        this.pontuacao.addPonto()
    }
}