const houseplants = [
  "Pothos",
  "Philodendron",
  "Monstera Deliciosa",
  "Bird of Paradise",
  "Peace Lily",
  "ZZ plant",
  "Bromeliad",
  "Fiddle Leaf Fig",
  "Anthurium",
  "Money tree",
  "Dracaena",
  "Rubber plant",
  "Spider plant",
  "Cast Iron plant",
  "Snake plant",
  "Lucky Bamboo",
  "Aloe Vera",
];

const plantList = document.querySelector(".list");
const button = document.querySelector(".reveal-list");
const totalCount = document.querySelector(".total-count");

button.addEventListener("click", function () {
  plantList.classList.remove("hide");
  button.classList.add("hide");
  plantNames(houseplants);
});

totalCount.innerText = `${houseplants.length} of our favorite houseplants!`;

const plantNames = function (list) {
  // access the value & index position of each plant
  list.forEach(function (plant, index) {
    let li = document.createElement("li");
    li.classList.add("plant");
    li.innerHTML = `<span class="plant-number">#${index + 1}</span> ${plant}`;
    plantList.append(li);
  });
};
