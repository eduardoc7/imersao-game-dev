class Botao {
    constructor(text, x, y){
        this.text = text;
        this.x = x;
        this.y = y;
        this.botao = createButton(this.text);
        this.botao.mousePressed(() => this._alteraCena())
        this.botao.addClass('botao-tela-inicial');
    }

    draw(){
        this.botao.position(this.x, this. y)
        this.botao.center('horizontal')
    }

    _alteraCena(){
        this.botao.remove();
        cenaAtual = 'jogo'
    }
}