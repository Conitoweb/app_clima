function searchClima(search="argentina" , day=7){
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=74b8079f7b5c4b5e9bb235409242506&q=${search}&days=${day}&aqi=yes&alerts=yes`)
    .then( res => res.json())
    .then(data => climaData(data)) 

}
searchClima()
const INPUT_PAIS = document.querySelector("#search__pais")
const BTN_SEARCH = document.querySelector("#btn__search")

BTN_SEARCH.addEventListener("click",()=>{
    let pais = INPUT_PAIS.value

    if(pais.trim() != ''){
        searchClima(pais)
        document.querySelector("#search__pais").value = ""
    }else{
        alert('ingresa un pais')
    }

})

function climaData(data){
    console.log(data);
    document.querySelector('.location__names > h1').textContent= data.location.country  
    document.querySelector('.location__names > h2').textContent= data.location.name 
    document.querySelector('.location__names > p').textContent= data.location.localtime
    // location info
    document.querySelector('.location__info > img').src= data.current.condition.icon
    document.querySelector('.location__info > h3').textContent= data.current.condition.text
}


























// function clima(data){
//     console.log(data)
//    const tiempoDias= data.forecast.forecastday
//    document.querySelector('.location__names').innerHTML=`<h1> ${data.location.country} </h1>
//    <h2> ${data.location.name} </h2>
//    <img src="${data.current.condition.icon}"> br
//    <h3> ${data.current.condition.text} </h3>`
// }

