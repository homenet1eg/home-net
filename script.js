const offersDiv = document.getElementById("offers");

function showOffers(company) {

  let data = [];

  if (company === "vodafone") {
    data = [
      { title: "فودافون فليكس", text: "5200 فليكس - 125 جنيه" },
      { title: "فودافون فليكس", text: "10400 فليكس - 230 جنيه" }
    ];
  }

  else if (company === "orange") {
    data = [
      { title: "أورانج نت", text: "14 جيجا - 320 جنيه" },
      { title: "أورانج نت", text: "20 جيجا - 420 جنيه" }
    ];
  }

  render(data);
}

function render(data) {
  offersDiv.innerHTML = "";

  data.forEach(item => {
    offersDiv.innerHTML += `
      <div class="card">
        <h2>${item.title}</h2>
        <p>${item.text}</p>
      </div>
    `;
  });
}

// تشغيل أول ما الصفحة تفتح
showOffers("vodafone");
