const TESTS = [
  {
    q: "Яка мова була попередником Української?",
    a: ["Слов'янська", "Білоруська", "Давньоруська"],
    r: 0,
  },
  {
    q: "Хто придумав першу Слов'янську абетку?",
    a: ["Народ", "Кирил і Мефодій", "Князь Олег"],
    r: 1,
  },
  {
    q: "Яку абеткову систему використовує наша мова?",
    a: ["Глаголиця", "Кирилиця", "Латиниця"],
    r: 1,
  },
  {
    q: "Яке письмо використовує наша мова?",
    a: ["Предметне", "Піктографічне", "Складове", "Ієрогліфічне", "Алфавітне"],
    r: 4,
  },
  {
    q: "Чим відома наша мова?",
    a: [
      "Тим, що вона співуча",
      'Тим що вона "міждународна"',
      "Тим що вона проста",
    ],
    r: 0,
  },
  {
    q: "Коли формувалася Українська мова?",
    a: [
      "VII ст. н. е. — середина XIV ст.",
      "Середина XIV ст. — 1569 р.",
      "1569 р. — 1667 р.",
      "1667 р. — XVIII ст.",
    ],
    r: 0,
  },
  {
    q: "Скільки приблизно слів налічує сучасна українська мова?",
    a: [
      "100 - 200 тисяч",
      "мільйон",
      "500 - 600",
      "200 - 300 тисяч",
      "750 - 850",
    ],
    r: 3,
  },
];
const testRef = document.querySelector("div.test_container");
const questionNumberRef = testRef?.querySelector("div.question_number");
const questionRef = testRef?.querySelector("h3.test_question");
const answersRef = testRef?.querySelector("div.test_answers");

let currentQuestion = 0;
let answers = new Array(TESTS.length);

const newQuestion = () => {
  questionNumberRef.textContent = `${currentQuestion + 1} / ${TESTS.length}`;
  questionRef.textContent = TESTS[currentQuestion].q;
  answersRef.innerHTML = "";
  TESTS[currentQuestion].a.forEach((answer, idx) => {
    let newAnswerRef = document.createElement("div");
    newAnswerRef.id = idx;
    newAnswerRef.textContent = answer;
    newAnswerRef.classList.add("test_answer");
    answersRef.appendChild(newAnswerRef);
  });
};

newQuestion();

const finishTest = () => {
  const rightyAnswers = TESTS.reduce(
    (res, test, idx) => (test.r === Number(answers[idx]) ? res + 1 : res),
    0,
  );
  testRef.innerHTML = "";
  testRef.classList.add("test_result_container");
  let resultRef = document.createElement("h3");
  resultRef.textContent = `Результат: ${rightyAnswers} / ${answers.length}.`;
  resultRef.classList.add("test_result");
  testRef.appendChild(resultRef);
};

const onClickAnswer = (event) => {
  if (event.target.id && currentQuestion < TESTS.length) {
    answers[currentQuestion] = event.target.id;
    currentQuestion++;
    currentQuestion < TESTS.length ? newQuestion() : finishTest();
  }
};

answersRef.addEventListener("click", onClickAnswer);
