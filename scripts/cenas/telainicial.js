class TelaInicial {
    constructor(){

    }

    draw(){
       // image(imagemInicial, 0, 0, width, height)
       this._botao()
       this._texto()
    }

    _imagemFundo(){
       // image(imagemInicial, 0, 0, width, height)
    }

    _texto(){
        textFont(fontTelaInicial)
        textAlign(CENTER)
        textSize(50)
        text('As aventuras de', width / 2.0, height / 3);
        textSize(150)
        text('Hipsta', width / 2.0, height / 5 * 3)
    }

    _botao(){
        botaoGerenciador.y = height / 7 * 5;
        botaoGerenciador.draw();
    }
}