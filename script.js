
let key = 'dc79fcb48f0f494265c0201d81bbf739'

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = dados.main.humidity + "% Umidade do ar"
    document.querySelector('img-previsao').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}
async function buscarCidade(cidade) {
    
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    key + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarDadosNaTela(dados)    
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
