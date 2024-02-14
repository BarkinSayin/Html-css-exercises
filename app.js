// HTML'den gerekli elementleri alır
const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");

// Düğmeye tıklama olayını algılar
searchButton.addEventListener("click", function () {
  // Arama kutusunun görünürlüğünü değiştirir
  searchBox.classList.toggle("hidden");
});
