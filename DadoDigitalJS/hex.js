const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

const btn = document.querySelector(".btn")
const number = document.querySelector(".number")

btn.addEventListener('click', () =>{
    let dado = numberRandom()
    number.textContent = dado
});
function numberRandom(){
    return Math.floor(Math.random()* numbers.length+1)
}