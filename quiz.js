const questions = [

    //desert questions
    {
        question: "What is the primary characteristic of a desert habitat?",
        answers: [
            { text: "Abundant water sources", correct: false },
            { text: "Extreme heat and aridity", correct: true },
            { text: "Lush vegetation", correct: false },
            { text: "Cold temperatures", correct: false },
        ]
    },
    {
        question: "Which animal is often referred to as the 'Ship of the Desert' due to its adaptation to desert life?",
        answers: [
            { text: "Cheetah", correct: false },
            { text: "Camel", correct: true },
            { text: "Lion", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "The desert kangaroo rat is known for its remarkable ability to:",
        answers: [
            { text: "Swim in desert oases", correct: false },
            { text: "Hibernate during the day", correct: true },
            { text: "Leap long distances", correct: false },
            { text: "Fly short distances", correct: false },
        ]
    },
    {
        question: "Which desert cat is a small, carnivorous feline found in North Africa and the Middle East?",
        answers: [
            { text: "Jaguar", correct: false },
            { text: "Leopard", correct: false },
            { text: "Cheetah", correct: false },
            { text: "Sand cat", correct: true },
        ]
    },
    {
        question: "The desert lark is a bird known for its distinctive songs and is adapted to desert life. What is its primary source of food in the desert?",
        answers: [
            { text: "Seeds and insects", correct: true },
            { text: "Fish", correct: false },
            { text: "Nectar from flowers", correct: false },
            { text: "Small mammals", correct: false },
        ]
    },

    // Rainforest questions
    {
        question: "Which of the following is a primary characteristic of a rainforest habitat?",
        answers: [
            { text: "Extreme cold and snowfall", correct: false },
            { text: "High annual rainfall and lush vegetation", correct: true },
            { text: "Sparse plant life and desert conditions", correct: false },
            { text: "Strong winds and arid climate", correct: false },
        ]
    },
    {
        question: "The okapi is a unique rainforest-dwelling animal with a resemblance to which other species?",
        answers: [
            { text: "Zebra", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Kangaroo", correct: false },
            { text: "Hippopotamus", correct: false },
        ]
    },
    {
        question: "Capybaras are social, herbivorous rodents native to rainforests. What is their primary source of food?",
        answers: [
            { text: "Insects and small prey", correct: false },
            { text: "Fruits and vegetation", correct: true },
            { text: "Fish and aquatic animals", correct: false },
            { text: "Birds and eggs", correct: false },
        ]
    },
    {
        question: "Hornbills are distinctive birds found in rainforests. What unique feature do they have?",
        answers: [
            { text: "Long tusks", correct: false },
            { text: "Horns on their heads", correct: false },
            { text: "Large, colorful beaks", correct: true },
            { text: "Flaming tails", correct: false },
        ]
    },
    {
        question: "The Burmese python is a large snake species often found in rainforest areas. What is their primary prey?",
        answers: [
            { text: "Plants and leaves", correct: false },
            { text: "Small insects", correct: false },
            { text: "Other snakes and reptiles", correct: false },
            { text: "Mammals and birds", correct: true },
        ]
    },

    // Arctic questions
    {
        question: "What is the primary characteristic of the Arctic habitat?",
        answers: [
            { text: "High temperatures and tropical climate", correct: false },
            { text: "Arid and desert-like conditions", correct: false },
            { text: "Extremely cold and icy environment", correct: true },
            { text: "Heavy rainfall and lush vegetation", correct: false },
        ]
    },
    {
        question: "Polar bears are well-adapted to the Arctic environment. What is their primary source of food in the wild?",
        answers: [
            { text: "Plants and berries", correct: false },
            { text: "Fish and aquatic creatures", correct: true },
            { text: "Insects and small prey", correct: false },
            { text: "Birds and small mammals", correct: false },
        ]
    },
    {
        question: "Seals are commonly found in the Arctic and Antarctic regions. What is their primary habitat within the Arctic?",
        answers: [
            { text: "Rainforests", correct: false },
            { text: "Mountain ranges", correct: false },
            { text: "Sea ice and icy waters", correct: true },
            { text: "Deserts", correct: false },
        ]
    },
    {
        question: "Penguins are well-known for their presence in the Antarctic, but they can also be found in the Arctic. What is their primary method of locomotion?",
        answers: [
            { text: "Flying", correct: false },
            { text: "Swimming", correct: true },
            { text: "Running", correct: false },
            { text: "Climbing trees", correct: false },
        ]
    },
    {
        question: "The Arctic fox is a native species to the Arctic regions. What does its fur change with the seasons?",
        answers: [
            { text: "It stays white throughout the year", correct: false },
            { text: "It changes color from brown in summer to white in winter", correct: true },
            { text: "It turns bright red in winter", correct: false },
            { text: "It remains gray all year round", correct: false },
        ]
    },

    // Ocean questions
    {
        question: "Which of the following best describes the ocean habitat?",
        answers: [
            { text: "Arid desert environment with extreme heat", correct: false },
            { text: "Cold, icy conditions with polar bears and seals", correct: false },
            { text: "High annual rainfall and lush rainforests", correct: false },
            { text: "Vast water bodies with diverse marine life", correct: true },
        ]
    },
    {
        question: "Orcas, also known as killer whales, are apex predators in the ocean. What is their primary diet?",
        answers: [
            { text: "Plants and algae", correct: false },
            { text: "Fish and other marine animals", correct: true },
            { text: "Small insects and krill", correct: false },
            { text: "Birds and land animals", correct: false },
        ]
    },
    {
        question: "The octopus is a highly intelligent and adaptable marine creature. How many arms does an octopus typically have?",
        answers: [
            { text: "6 arms", correct: false },
            { text: "8 arms", correct: true },
            { text: "10 arms", correct: false },
            { text: "12 arms", correct: false },
        ]
    },
    {
        question: "Seahorses are unique marine animals known for their distinctive appearance. Which of the following is true about seahorse reproduction?",
        answers: [
            { text: "Females lay eggs externally on the seafloor", correct: false },
            { text: "Males give birth to live young", correct: true },
            { text: "Both males and females carry eggs", correct: false },
            { text: "Seahorses reproduce asexually", correct: false },
        ]
    },
    {
        question: "Anglerfish are deep-sea creatures with a unique adaptation. What is the purpose of the bioluminescent lure found on some anglerfish?",
        answers: [
            { text: "To attract mates for mating rituals", correct: true },
            { text: "To ward off predators with a bright light", correct: false },
            { text: "To confuse prey by producing loud sounds", correct: false },
            { text: "To provide a source of food for other fish", correct: false },
        ]
    },

    // Grassland questions
    {
        question: "What is the primary characteristic of a grassland habitat?",
        answers: [
            { text: "Heavy rainfall and lush forests", correct: false },
            { text: "Arid and desert-like conditions", correct: false },
            { text: "Extremely cold and icy environment", correct: false },
            { text: "Vast plains with tall grasses and herbivores", correct: true },
        ]
    },
    {
        question: "Pronghorns are native to North American grasslands and are known for their speed. What is their top speed when running?",
        answers: [
            { text: "30 mph (48 km/h)", correct: false },
            { text: "50 mph (80 km/h)", correct: true },
            { text: "20 mph (32 km/h)", correct: false },
            { text: "10 mph (16 km/h)", correct: false },
        ]
    },
    {
        question: "Zebras are commonly found in African grasslands. What is the distinctive feature of their black-and-white stripes?",
        answers: [
            { text: "It helps them blend in with the environment", correct: false },
            { text: "It serves as camouflage in the grasslands", correct: false },
            { text: "It deters predators with a warning coloration", correct: false },
            { text: "It may confuse and deter biting insects", correct: true },
        ]
    },
    {
        question: "Giraffes are the tallest land animals on Earth. What is their primary source of food in the grasslands?",
        answers: [
            { text: "Small mammals and insects", correct: false },
            { text: "Fruits and leaves from tall trees", correct: true },
            { text: "Fish and aquatic plants", correct: false },
            { text: "Grass and shrubs near the ground", correct: false },
        ]
    },
    {
        question: "Bison, also known as American buffalo, are iconic in North American grasslands. What is their primary herbivorous diet composed of?",
        answers: [
            { text: "Fish and aquatic vegetation", correct: false },
            { text: "Small mammals and insects", correct: false },
            { text: "Grass and sedges", correct: true },
            { text: "Fruits and leaves from trees", correct: false },
        ]
    }
];




const questionElement = document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();


   
}

function showQuestion() {
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    // Update the current question number and total questions
    const currentQuestionSpan = document.getElementById("current-question");
    const totalQuestionsSpan = document.getElementById("total-questions");
    currentQuestionSpan.textContent = questionNo;
    totalQuestionsSpan.textContent = questions.length;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function  resetState() {
    nextButton.style.display="none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
    button.classList.add("correct");

    } button.disabled = true;
    });
    nextButton.style.display ="block";
}






function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
nextButton.innerHTML = "Play Again";

myFunction();
nextButton.style.display = "block";

}

function myFunction() {
    alert("Congratulations!");
  }

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
if(currentQuestionIndex < questions.length){
    handleNextButton();
} else {
    startQuiz();
}
});

startQuiz();

