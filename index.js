const FACTS = [
  {
    fact: "Пам’ятники відомому українському поетові Тарасу Шевченку встановлені в 1500 місцях по всьому світу",
    image: "img1.png",
  },
  {
    fact: "Найбільший та найпотужніший у світі літак Побудовано в Україні",
    image: "img2.png",
  },
  {
    fact: "Станція метро «Арсенальна» найглибша в світі",
    image: "img3.png",
  },
  {
    fact: "Людвіг ван Бетховен присвятив дві симфонії українцеві",
    image: "img4.png",
  },
  {
    fact: "В Україні є пустеля. I вона займає 210 000 га",
    image: "img5.png",
  },
  {
    fact: "«Южмаш» виробляє найекологічніші ракетоносії в усьому світі",
    image: "img6.png",
  },
  {
    fact: "Перший університет Східної Європи - Острозька академія",
    image: "img7.png",
  },
  {
    fact: "Найдовший у світі музичний інструмент – українська трембіта",
    image: "img8.png",
  },
  {
    fact: "Шлях «із варяг у греки» Висла проходив Україною",
    image: "img9.png",
  },
  {
    fact: "Оноре де Бальзак одружився в Україні",
    image: "img10.png",
  },
  {
    fact: "Хрещатик — одна з найкоротших головних вулиць країн",
    image: "img11.png",
  },
  {
    fact: "Новорічну пісню українського композитора співає весь світ",
    image: "img12.png",
  },
  {
    fact: "Українці створили найбільший у світі у келих шампанського",
    image: "img13.png",
  },
  {
    fact: "Гасову лампу винайшли в Україні",
    image: "img14.png",
  },
  {
    fact: "Програмістів найбільше саме в Україні",
    image: "img15.png",
  },
];

const factRef = document.querySelector("div.button_fact");
const factTextRef = document.querySelector("p.fact_text");
const factImgRef = document.querySelector("img.fact_img");
factTextRef.textContent = FACTS[0].fact;
factImgRef.setAttribute("src", FACTS[0].image);

const onClickFacts = () => {
  const randomFact = Math.floor(Math.random() * FACTS.length);
  factTextRef.textContent = FACTS[randomFact].fact;
  factImgRef.setAttribute("src", FACTS[randomFact].image);
}

factRef.addEventListener("click", onClickFacts);
