const container = document.querySelector(".box-container");

let array = [["nada", "algo"],["nada", "algo"]]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    container.innerHTML += 
    `<div class="box"><a href="${array[index][0]}" target="_blank">${array[index][1]}</a></div>`
}