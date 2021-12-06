const addBtn = document.getElementById("add-btn");
const ulEl = document.getElementById("gallery");

function addDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      //this turns the string data received back into an object
      return response.json();
    })
    .then(function (data) {
      const newImg = document.createElement("img");
      newImg.src = data.message;
      newImg.style.maxWidth = "10vmax";
      newImg.style.height = "auto";
      ulEl.appendChild(newImg);
    })
    .catch(function (error) {
      console.log(`Error: ${error}`);
    });
}
addBtn.addEventListener("click", addDog);
