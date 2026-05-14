const boxik = document.getElementById("boxik");

boxik.addEventListener("click", () => {
  boxik.textContent = "я уже красный кульутно к сожалению не получится";
  boxik.style.backgroundColor = "rgb(255,0,0)"});


const knopka = document.getElementById("knopka");

knopka.addEventListener("click", ()  => {
    knopka.textContent = "аххахахахах твоя мать сдохнет от рака";
});
const list = document.getElementById("list");
const hui = document.getElementById("hui");

const questionnaires = [
  "[suka?"
];

hui.addEventListener("click", () => {
  startQuestionnaire(questionnaires[0]);
});

function startQuestionnaire(questionnaire) {
  list.textContent = questionnaire;
}