const questions = [
    
    {
        text: "O que significa a sigla 'CO2' em termos ambientais?",
        answers: [
            { text: "Ciclo de oxigênio 2", correct: false },
            { text: "Carbono 2", correct: false },
            { text: "Dióxido de carbono", correct: true },
            { text: "Componente orgânico 2", correct: false }
        ]
    },
    {
        text: "Qual é a principal vantagem da agricultura orgânica em relação à convencional?",
        answers: [
            { text: "Uso intensivo de pesticidas", correct: false },
            { text: "Baixa biodiversidade", correct: false },
            { text: "Menor impacto ambiental", correct: true },
            { text: "Produção em larga escala", correct: false }
        ]
    },
    {
        text: "O que é a pegada de carbono?",
        answers: [
            { text: "Uma marca de calçados sustentáveis", correct: false },
            { text: "A quantidade total de gases de efeito estufa emitidos por uma pessoa, organização ou produto", correct: true },
            { text: "Um tipo de planta que absorve muito carbono", correct: false },
            { text: "Uma técnica de sequestro de carbono", correct: false }
        ]
    },
    {
        text: "Qual é a principal fonte de poluição plástica nos oceanos?",
        answers: [
            { text: "Embalagens de alimentos", correct: false },
            { text: "Resíduos industriais", correct: false },
            { text: "Microplásticos de produtos de higiene pessoal", correct: false },
            { text: "Resíduos plásticos descartados inadequadamente", correct: true }
        ]
    },
    
    {
        text: "Qual é a importância da biodiversidade?",
        answers: [
            { text: "Aumentar a produção de resíduos", correct: false },
            { text: "Reduzir a eficiência dos ecossistemas", correct: false },
            { text: "Melhorar a qualidade do ar", correct: false },
            { text: "Contribuir para a estabilidade ecológica e a saúde dos ecossistemas", correct: true }
        ]
    },
    
   
    {
        text: "O que é a compostagem?",
        answers: [
            { text: "Descarte de resíduos em aterros sanitários", correct: false },
            { text: "Processo de decomposição anaeróbica de resíduos orgânicos", correct: false },
            { text: "Transformação de resíduos orgânicos em um material rico em nutrientes para o solo", correct: true },
            { text: "Processo de incineração de resíduos", correct: false }
        ]
    }
];

const successMessages = {
    positive: [
        "Ao buscar maneiras mais sustentáveis de viver, você contribui para a redução do consumo e para um planeta mais equilibrado.",
        "Cada escolha consciente que você faz ajuda a diminuir o consumo de recursos naturais.",
        "A sustentabilidade é o meio de garantir o suprimento das necessidades atuais da sociedade sem comprometer o das gerações futuras"
    ],
    negative: [
        "A jornada para a redução do consumo começa com pequenos passos. Continue aprendendo e fazendo escolhas conscientes.",
        "Erros são oportunidades de aprendizado. Considere cada resposta incorreta como uma chance de crescer em sua compreensão sobre a importância da redução do consumo.",
        "Não foi dessa vez, mas suas tentativas são valiosas para conscientização sobre a necessidade de redução do consumo para a sustentabilidade do nosso planeta."
    ]
};






let currentQuestionIndex = 0;
let score = 0;

function init() {
    displayQuestion();
}

// ...

function displayQuestion() {
    const questionNumberElement = document.getElementById("question-number");
    const questionTextElement = document.getElementById("question-text");
    const answersBoxElement = document.getElementById("answers-box");
    const nextButtonElement = document.getElementById("next-btn");
    const sustainabilityInfoElement = document.getElementById("sustainability-info");

    // Remover os botões de resposta antes de exibir a próxima pergunta
    removeAnswerButtons();

    nextButtonElement.classList.add("hide");
    sustainabilityInfoElement.classList.add("hide");

    const currentQuestion = questions[currentQuestionIndex];
    questionNumberElement.textContent = `Pergunta ${currentQuestionIndex + 1}`;
    questionTextElement.textContent = currentQuestion.text;

    currentQuestion.answers.forEach((answer, index) => {
        const answerButton = document.createElement("button");
        answerButton.textContent = answer.text;
        answerButton.addEventListener("click", () => handleAnswerClick(answer.correct));
        answersBoxElement.appendChild(answerButton);
    });
}

function removeAnswerButtons() {
    const answersBoxElement = document.getElementById("answers-box");
    answersBoxElement.innerHTML = "";
}




function handleAnswerClick(isCorrect) {
    const nextButtonElement = document.getElementById("next-btn");
    const sustainabilityInfoElement = document.getElementById("sustainability-info");

    // Remover os botões de resposta
    removeAnswerButtons();

    if (isCorrect) {
        score++;
        const positiveMessages = successMessages.positive;
        const randomMessage = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
        sustainabilityInfoElement.textContent = randomMessage;
    } else {
        const negativeMessages = successMessages.negative;
        const randomMessage = negativeMessages[Math.floor(Math.random() * negativeMessages.length)];
        sustainabilityInfoElement.textContent = randomMessage;
    }

    sustainabilityInfoElement.classList.remove("hide");
    nextButtonElement.classList.remove("hide");
}



function showSuccessMessage() {
    hideOrShowQuizz();

    // Trocar dados da tela de sucesso
    const successMessage = document.querySelector("#success-message");
    const nextQuestionButton = document.querySelector("#next-question-btn");
    const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];

    successMessage.textContent = randomMessage;

    // Limpar perguntas e alternativas
    const questionText = document.querySelector("#question-text");
    questionText.textContent = "";

    const answersBox = document.querySelector("#answers-box");
    answersBox.innerHTML = "";

    // Exibir mensagem de sucesso e botão de próxima pergunta
    successMessage.classList.remove("hide");
    nextQuestionButton.classList.remove("hide");

    // Adicionar evento de clique ao botão de próxima pergunta
    nextQuestionButton.addEventListener("click", function () {
        successMessage.classList.add("hide");
        nextQuestionButton.classList.add("hide");
        nextQuestion();
    });
}


function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        const sustainabilityInfoElement = document.getElementById("sustainability-info");
        sustainabilityInfoElement.textContent = `Você acertou ${score} de ${questions.length} perguntas! Parabéns!`;
        sustainabilityInfoElement.classList.remove("hide");
        
        // Remover as alternativas
        const answersBoxElement = document.getElementById("answers-box");
        answersBoxElement.innerHTML = "";

        // Esconder o botão "Próxima Pergunta"
        const nextButtonElement = document.getElementById("next-btn");
        nextButtonElement.classList.add("hide");

        // Esconder o número da questão
        const questionNumberElement = document.getElementById("question-number");
        questionNumberElement.textContent = "";

        

    }
}

init();

