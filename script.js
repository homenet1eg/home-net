function showOffers(company) {

  const offersDiv = document.getElementById("offers");

  let data = [];

  if (company === "vodafone") {
    data = [
      "فليكس 5200 - 125 جنيه",
      "فليكس 10400 - 230 جنيه"
    ];
  }

  else if (company === "orange") {
    data = [
      "نت 14 جيجا - 320 جنيه",
      "نت 20 جيجا - 420 جنيه"
    ];
  }

  offersDiv.innerHTML = "";

  data.forEach(item => {
    offersDiv.innerHTML += "<p>" + item + "</p>";
  });
}
