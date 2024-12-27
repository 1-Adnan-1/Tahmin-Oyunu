"use strict";
let secretNumber = Math.trunc(Math.random() * 10) + 1; // Sayıyı 1 ile 10 arasında oluştur
console.log("Gizli Sayı: " + secretNumber);
let score = 3; // Başlangıçta 3 hakkınız var
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Skorları güncelleyen bir fonksiyon
const updateScore = function () {
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highscore;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  console.log(secretNumber, typeof secretNumber);

  if (!guess) {
    displayMessage("Bir sayı giriniz !! ");
  } else if (guess === secretNumber) {
    displayMessage("Tebrikler doğru tahmin 👏🏻 ");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      updateScore(); // Skor ve en yüksek skoru günceller
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Çok yüksek" : "Çok düşük");
      score--;
      updateScore(); // Skor güncelleniyor
    } else {
      displayMessage("Bilemedin! Oyun bitti.");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#dd1010"; // Haklar bitince body kırmızı olsun
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 3; // Yeniden 3 hakkı veriyoruz
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  console.log("Gizli Sayı: " + secretNumber);

  displayMessage("Tahmin ediliyor...");
  updateScore(); // Skor ve en yüksek skoru günceller
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = ""; // Inputu boşaltıyoruz

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
