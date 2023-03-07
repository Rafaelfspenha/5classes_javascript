
class Dados {
    constructor(usuario,cidade_natal,trabalho,frase,curso){
        this.usuario = usuario
        this.cidade_natal = cidade_natal
        this.trabalho = trabalho
        this.frase = frase
        this.curso = curso
    }
    informacao1(idade){
        if (idade % 2 == 0)
            alert("Olá "+this.usuario+" sua idade é um número PAR.")
        else
            alert("Olá "+this.usuario+" sua idade é um número ÍMPAR.")
    }

    informacao2(cidade_atual){
        if(cidade_atual == "Rio de Janeiro")
            alert(this.usuario+", você MORA na sua cidade natal que é o "+this.cidade_natal)
        else
            alert(this.usuario+", você NÃO MORA na sua cidade natal que é o "+this.cidade_natal)
    }

    informacao3(profissao_futura){
        if(profissao_futura == "desenvolvedor")
            alert("trabalho atual: "+this.trabalho+", Trabalho futuro: Desenvolvedor")
        else
            alert("Profissão inexistente!")
    }

    informacao4(peso){
        if(peso < 70)
            alert(this.frase+" ,Você está com menos de 70kg é porque está abaixo do peso!")
        else if(peso < 80)
            alert(this.frase+" ,Você tem entre 70kg e 79kg e está dentro do peso!")
        else
            alert(this.frase+" ,Você tem mais de 80kg e está acima do peso!")
    }

    informacao5(pergunta){
        if(pergunta == "sim")
            alert("Você é um "+this.curso)
        else
            alert("Você não é um "+this.curso)
    }
}
let informacoes = new Dados('Rafael','Rio de Janeiro','desempregado','olá','Técnico em informática')
informacoes.informacao1(29)
informacoes.informacao2('Belford-Roxo')
informacoes.informacao3('desenvolvedor')
informacoes.informacao4(75)
informacoes.informacao5('sim')

