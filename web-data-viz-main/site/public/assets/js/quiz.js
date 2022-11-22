var Option1 = 0
var Option2 = 0
var Option3 = 0
var Option4 = 0
var Option5 = 0
var contador = 1

function startQuiz() {
    var initQuiz = document.getElementById("initQuiz")    
    var pergunta1 = document.getElementById("pergunta1")
    
    pergunta1.classList.add("active")    
    initQuiz.remove()
}


function addOption1() {
    Option1++
    responder()
}
function addOption2() {
    Option2++
    responder()
}
function addOption3() {
    Option3++
    responder()
}
function addOption4() {
    Option4++
    responder()
}
function addOption5() {
    Option5++
    responder()
}


function responder() {
    var quiz = document.getElementById("quiz")
    var perguntas = document.querySelectorAll(".pergunta")
    var qtdPerguntas = quiz.children.length
    var n = 0

    if (contador < qtdPerguntas) {

        
        while (n < perguntas.length) {
            perguntas[n].classList.remove("active")
            n++
        }
        
        quiz.children[contador].classList.add("active")
        contador++
    }else{
        quiz.innerHTML = 
        `
            <div class="quizResult">
                <h2 class="final">Votação finalizada</h2>
                <p>Clique no botão abaixo para exibir os resultados</p>
                <button class="finalizar" onclick="results()">Mostrar resultados</button>
            </div>
        `
    }
}

function results() {
    quiz.innerHTML = 
        `
            <div class="resultsBox">
                <h2 class="resultado">Resultado</h2>
                <div class="metricasBox">
                    <button value="${Option1}" id="Option1" class="metricas dollhouse">Dollhouse EP <br> ${Option1}</button>
                    <button value="${Option2}" id="Option2" class="metricas crybaby">Cry Baby Album <br>${Option2}</button>
                    <button value="${Option3}" id="Option3" class="metricas extra clutter">Cry Baby Extra Clutter EP <br>${Option3}</button>
                    <button value="${Option4}" id="Option4" class="metricas k12">K-12 Album <br>${Option4}</button>
                    <button value="${Option5}" id="Option5" class="metricas after school">After School EP: <br>${Option5}</button>
        
                </div>
            </div>
        
        
        `
        var grafico = document.getElementById("grafico")

        grafico.classList.remove("inactive")

        fetch("/usuarios/inserirQuiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                Option1: Option1,
                Option2: Option2,
                Option3: Option3,
                Option4: Option4,
                Option5: Option5,
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta.body);

            if (resposta.ok) {
        
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        const labels = [
            'Dollhouse',
            'Cry Baby',
            'Cry Baby Extra Clutter',
            'K-12',
            'After School',
    
        ];
    
        const data = {
            labels: labels,
            datasets: [{
                label: 'Quantidade de votos',
                backgroundColor: [
                'rgb(255, 74, 158)',
                'rgb(85, 85, 255)',
                'rgb(199, 0, 0)',
                'rgb(5, 194, 5)',
                'rgb(255, 117, 37)',
            ],
                borderColor: 'rgb(255, 99, 132)',
                data: [Option1, Option2, Option3, Option4, Option5],
            },
        ]
        };
    
        const config = {
            type: 'bar',
            data: data,
            options: {}
        };
    
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
        
       


}

