// me mata aaaaaaaaaaaaa
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // points for the score
let placar = 0 // score

// aduio
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// question
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// answares
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article with class questions
let articleQuestoes = document.querySelector('.questoes')
// ol li with alternatives
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "qual é a maior crença dos indígenas?",
    alternativaA : "Fé bahá'i",
    alternativaB : "Zoroastrismo",
    alternativaC : "Iarsanismo",
    alternativaD : "Xamanismo",
    correta      : "Xamanismo",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "o que os índios trouxeram para a cultura brasileira?",
    alternativaA : "instrumentos",
    alternativaB : "redes de descanso e cama de rede",
    alternativaC : "medicinas com plantas nativas  e influência na língua",
    alternativaD : "desmatamento",
    correta      : "medicinas com plantas nativas  e influência na língua",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "quais são as suas heranças indígenas?",
    alternativaA : "banho, mandioca",
    alternativaB : "teatro, mitos",
    alternativaC : "socialização",
    alternativaD : "carnaval, erva - mate",
    correta      : "banho, mandioca",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "qual é a situação dos povos indígenas?",
    alternativaA : "736.000",
    alternativaB : "818.000",
    alternativaC : "537.000",
    alternativaD : "394.000",
    correta      : "818.000",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "qual a influência indígena na culinária?",
    alternativaA : "utilizando a mandioca para novos pratos e receitas",
    alternativaB : "usando a erva - mate para novos chás",
    alternativaC : "utilizaremos o açafrão para novos sabores de salada",
    alternativaD : "usaremos canela para aromatizar os pratos",
    correta      : "utilizando a mandioca para novos pratos e receitas",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Eram povos nativos do Brasil:",
    alternativaA : "Maias e Astecas",
    alternativaB : "Tupinambás e Guaranis",
    alternativaC : "Tupiniquim e Apaches",
    alternativaD : "Toltecas e Incas",
    correta      : "Tupinambás e Guaranis",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Dê onde vêm a genética dos povos indígenas?",
    alternativaA : "população asiáticas",
    alternativaB : "população europeia",
    alternativaC : "população Africana",
    correta      : "população asiáticas",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "o que são as tribos indígenas isolados?",
    alternativaA : "tribos que são civilizadas com a sociedade",
    alternativaB : "os homens brancos podem entrar sem permissão",
    alternativaC : "são aqueles que estão sem contato com a civilização",
    correta      : "são aqueles que estão sem contato com a civilização",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "como os indígenas cuidam da saúde?",
    alternativaA : "plantas disponíveis",
    alternativaB : "chamando o bombeiro",
    alternativaC : "chamando o SAMU",
    alternativaD : "ligaram para o hospital",
    correta      : "plantas disponíveis",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "qual dia é comemorado o dia do índio?",
    alternativaA : "02 - abril",
    alternativaB : "19 - abril",
    alternativaC : "30 - abril",
    alternativaD : "19 - maio",
    correta      : "19 - abril",
}

// constant with a array of objects with all the questions
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// ASSEMBLE THE 1st COMPLETE QUESTION, to start the Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD


// CONFIGURE THE INITIAL VALUE OF THE 1st COMPLETE QUESTION
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// TO ASSEMBLE THE NEXT QUESTIONS
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFY DOUBLE CLICK ON ALTERNATIVES
alternativas.addEventListener('dblclick', () => {
    //console.log('bouble click')
    pontos -= 10 // take 10 points in case of double click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + Chosen Answer)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Rigth")
        //answerThis.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("wrong!")
        //answerThis.textContent = "wrong! 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // update score
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // block the choice of options

    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // ocult article of question
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // reset the score
        //location.reload();
        instrucoes.classList.remove('placar')
        // reset the game
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}