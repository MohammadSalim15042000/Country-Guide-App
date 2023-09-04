const btn = document.querySelector(".btn");
const inputValue = document.querySelector("#inputValue");
const lower = document.querySelector(".lower")
const card = document.querySelector(".card")


btn.addEventListener("click",()=>{
const userValue = inputValue.value
const url = `https://restcountries.com/v3.1/name/${userValue}?fullText=true`;
fetch(url)
.then((response)=> response.json())
.then((data)=> {
    console.log(data)
const flag = data[0].flags.png
const name = data[0].name.common
const capital = data[0].capital[0]
const continent = data[0].continents[0]
const population = data[0].population
const currencies = Object.keys(data[0].currencies)
const languages = Object.values(data[0].languages).toString().split(",").join(" , ")
console.log(flag)
console.log(name)
console.log(continent)
console.log(population)
console.log(currencies)
console.log(languages)
card.style.height = "90vh"
lower.innerHTML = `
<div class="flagSection"> 
<img  src="${flag}"  class="flag-img" /img>
<h4> ${name} </h4>
</div>
<div class="contentSection">
<h4>Capital: <span class="heading"> ${capital} </span> </h4>
<h4>Continent: <span class="heading"> ${continent} </span></h4>
<h4>Population: <span class="heading"> </span><span class="heading">${population} </span></h4>
<h4>Currency: <span class="heading"> ${currencies} </span></h4>
<h4>Common Languages: <span class="heading"> ${languages}</span></h4>
</div>
`
} )


})