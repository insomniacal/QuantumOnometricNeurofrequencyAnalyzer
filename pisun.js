const questions = [
  {
    question: "любишь парней?",
    answer: true,
    image: "https://iv.okcdn.ru/getVideoPreview?id=7315983764203&idx=2&type=39&tkn=557h26cQCLnaVDQUl5PebGaaihs&fn=vid_x"
  },
  {
    question: "дрочишь на женщин?",
    answer: false,
    image: "https://images.steamusercontent.com/ugc/2301969478603184329/ED862B8FB36DCA804AB8EFC5B062FC71126E8E4C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
  },
  {
    question: "считаешь что дотеров долбят в анус?",
    answer: true,
    image: "https://upload.wikimedia.org/wikipedia/ru/0/02/%D0%93%D0%B0%D1%87%D0%B8%D0%BC%D1%83%D1%87%D0%B8.jpg"
  },
  {
    question: "в твоем очке не вместятся 20 хуев?",
    answer: false,
    image: "https://images.steamusercontent.com/ugc/1698404501993834937/A25800CABADE539FA2C95B68605F172B57EB2F27/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
  },
  {
    question: "твой друг такой же ебырь как и ты",
    answer: true,
    image: "https://img-webcalypt.ru/uploads/admin/images/meme-templates/GpdrRkSuPrz3eugTy5J98ARkemhxpONo.jpg"
  }
];

const boxik = document.getElementById("boxik");
const knopka = document.getElementById("knopka");
const startBtn = document.getElementById("hui");
const testImage = document.querySelector(".test-image");
const testDiv = document.getElementById("test");
const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
  testImage.src = questions[currentQuestion].image;
}

function handleAnswer(userAnswer) {
  if (userAnswer === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    if (score >= 3) {
      window.location.href = "good.html";
    } else {
      window.location.href = "bad.html";
    }
  }
}

startBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  testImage.style.display = "block";
  yesBtn.style.display = "inline-block";
  noBtn.style.display = "inline-block";
  testDiv.style.display = "flex";
  showQuestion();
});

yesBtn.addEventListener("click", () => handleAnswer(true));
noBtn.addEventListener("click", () => handleAnswer(false));

testDiv.addEventListener("click", (e) => {
  if (e.target === testDiv) {
    testDiv.style.display = "none";
  }
});

boxik.addEventListener("click", () => {
  boxik.textContent = "я уже красный";
  boxik.style.backgroundColor = "red";
});

knopka.addEventListener("click", () => {
  knopka.textContent = "хахахаххаха твоя мама умрет от рака";
});