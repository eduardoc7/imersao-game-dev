class Pontuacao {
    constructor(){
        this.pontos = 0;
    }
    exibe(){
        this.score = 'SCORE ' + parseInt(this.pontos);
        textAlign(RIGHT)
        fill('#fff')
        textSize(50);
        text(this.score, width - 30, 50);
    }
    addPonto(){ 
        this.pontos += 0.2
    }
}