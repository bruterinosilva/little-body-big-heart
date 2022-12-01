function startQuiz() {
    var initQuiz = document.getElementById("initQuiz")
    var pergunta1 = document.getElementById("pergunta1")

    pergunta1.classList.add("active")
    initQuiz.remove()
}


function addOption1() {
    localStorage.setItem("respostaSelecionada", "Dollhouse");
    responder()
}
function addOption2() {
    localStorage.setItem("respostaSelecionada", "Cry Baby");
    responder()
}
function addOption3() {
    localStorage.setItem("respostaSelecionada", "Cry Baby Extra Clutter");
    responder()
}
function addOption4() {
    localStorage.setItem("respostaSelecionada", "K-12");
    responder()
}
function addOption5() {
    localStorage.setItem("respostaSelecionada", "After School");
    responder()
}


function responder() {
    console.log(localStorage.getItem("respostaSelecionada"));
    var opcaoSelecionada = ''
    if (localStorage.getItem("respostaSelecionada") == 'Dollhouse') {
        opcaoSelecionada = 'Dollhouse'
    } else if (localStorage.getItem("respostaSelecionada") == 'Cry Baby') {
        opcaoSelecionada = 'Cry Baby'
    } else if (localStorage.getItem("respostaSelecionada") == 'Cry Baby Extra Clutter') {
        opcaoSelecionada = 'Cry Baby Extra Clutter'
    } else if (localStorage.getItem("respostaSelecionada") == 'K-12') {
        opcaoSelecionada = 'K-12'
    } else if (localStorage.getItem("respostaSelecionada") == 'After School') {
        opcaoSelecionada = 'After School'
    }

    fetch("/usuarios/inserirQuiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            // nomeServer: nomeVar,
            respSelecionada: opcaoSelecionada

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            results()
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

    // results()
    return false;
}

function results(req, res) {
    console.log('vou exibir o resultado agora');
    // var grafico = document.getElementById("grafico")
    var votos_dollhouse
    var votos_crybaby
    var votos_extraclutter
    var votos_k12
    var votos_afterschool
    // grafico.classList.remove("inactive")

    fetch("/usuarios/exibirResultado", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(function (resposta) {
            console.log(resposta);
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                console.log('arroz',resposta);
                votos_crybaby = resposta[0].quantidade_votos
                votos_extraclutter = resposta[1].quantidade_votos
                votos_k12 = resposta[2].quantidade_votos
                votos_afterschool = resposta[3].quantidade_votos
                votos_dollhouse = resposta[4].quantidade_votos
                
                console.log(votos_dollhouse, 'batata');
                // finalizarAguardar();
            });
            if (resposta.ok) {
                console.log(res.json(resposta));
                console.log("resposta: ", resposta.body);
                res.json(resposta);

            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

   setTimeout(() => {
    const labels = [
        'Cry Baby',
        'Cry Baby Extra Clutter',
        'K-12',
        'After School',
        'Dollhouse',

    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Quantidade de votos',
            backgroundColor: [
                'rgb(177, 92, 78)',
                'rgb(142, 207, 215)',
                'rgb(189, 104, 189)',
                'rgb(236, 131, 163)',
                'rgb(131, 211, 236)',
            ],
            borderColor: 'rgb(255, 99, 132)',
            data: [votos_crybaby, votos_extraclutter, votos_k12, votos_afterschool, votos_dollhouse],
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
   }, 500);




}

