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
    } else if (localStorage.getItem("respostaSelecionada") == 'Cry Baby'){
        opcaoSelecionada = 'Cry Baby'
    } else if (localStorage.getItem("respostaSelecionada") == 'Cry Baby Extra Clutter'){
        opcaoSelecionada = 'Cry Baby Extra Clutter'
    } else if (localStorage.getItem("respostaSelecionada") == 'K-12'){
        opcaoSelecionada = 'K-12'
    } else if (localStorage.getItem("respostaSelecionada") == 'After School'){
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
        console.log(`#BATATA: ${resposta}`);
        // finalizarAguardar();
    });
    
    // results()
    return false;
}

function results(req, res) {
   console.log('vou exibir o resultado agora');
        // var grafico = document.getElementById("grafico")

        // grafico.classList.remove("inactive")

        fetch("/usuarios/exibirResultado", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(function (resposta) {

            
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

        // const labels = [
        //     'Dollhouse',
        //     'Cry Baby',
        //     'Cry Baby Extra Clutter',
        //     'K-12',
        //     'After School',
    
        // ];
    
        // const data = {
        //     labels: labels,
        //     datasets: [{
        //         label: 'Quantidade de votos',
        //         backgroundColor: [
        //         'rgb(255, 74, 158)',
        //         'rgb(85, 85, 255)',
        //         'rgb(199, 0, 0)',
        //         'rgb(5, 194, 5)',
        //         'rgb(255, 117, 37)',
        //     ],
        //         borderColor: 'rgb(255, 99, 132)',
        //         data: [Option1, Option2, Option3, Option4, Option5],
        //     },
        // ]
        // };
    
        // const config = {
        //     type: 'bar',
        //     data: data,
        //     options: {}
        // };
    
        // const myChart = new Chart(
        //     document.getElementById('myChart'),
        //     config
        // );
        
       


}

