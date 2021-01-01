import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

document.querySelector("#populationBigger").addEventListener("click", function(){
  const btn500 = data.filter(city => city.population > 500000);
  return createTableElements(btn500,"allcities");

});

document.querySelector("#landAreaLess").addEventListener("click", function(){
  const btn1000 = data.filter(city => city.landArea < 1000);
  return createTableElements(btn1000,"allcities");
});

/*- "Does any city has population less than 100.000?" butonuna tiklandiginda yes ya da no seklinde bir alert cikmali.*/

document.querySelector("#isPopulationLess").addEventListener("click", function(){
  const btn100_k = data.filter(city => city.population < 1000);
  if(btn100_k) {
    alert("Yes.")
  }
  else{
    alert("No")
  }
});

/* "Does every city has land area bigger than 100?" butonuna tiklandiginda kosula gore yes ya da no seklinde bir alert cikmali.*/

document.querySelector("#isLandBigger").addEventListener("click", function(){
  const isLandBigger = data.filter(city => city.landArea > 100);
    
  if(isLandBigger.length === data.length) {
    alert("Yes.")
  }
  else{
    alert("No")
  }
});

/*- Choose yazan selecti elimizdeki bulunan tum sehirlerin isimleriyle dolduralim.
*/

var selectcityEl = document.querySelector("#selectcity");
while(selectcityEl.hasChildNodes()){
  selectcityEl.removeChild(selectcityEl.firstChild);
};

let selected = document.createElement("option");
selected.textContent = "Choose..."
selected.defaultSelected = true ;
selectcityEl.appendChild(selected);



for (var i=0; i<data.length; i++) {
  let names = document.createElement("option");
  names.text  = data[i].name;
  names.value = data[i].name;
  selectcityEl.appendChild(names);
}

/*- Choose yazan select secim yapildiginda 2. tablo olan, found item tablosunu selectde secilen sehir ile dolduralim.
*/
selectcityEl.addEventListener("change", (e) => {
  const selectCities = data.filter(cities => e.target.value === cities.name);
  createTableElements(selectCities, "singlecity");
});