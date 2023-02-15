function exec() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://trackapi.nutritionix.com/v2/natural/nutrients");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("x-app-id", "9b83d13d");
    xhr.setRequestHeader("x-app-key", "86e0199dea035b767c404cca36b44ac0");
    xhr.setRequestHeader("x-remote-user-id", "0");
    xhr.setRequestHeader("Content-Type", "application/json");
    let i = 0;
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        document.getElementById("t1").style.visibility = "visible";
        val = JSON.parse(xhr.responseText);
        return ret(val);
      }
    }
    console.log(name);
    const value = document.getElementById("val").value;
    let data = '{ "query": "' + value + '"}';
    xhr.send(data);
  }
  
  let j = 2;
  let calories = 0, cholesterol = 0, protein = 0, carbs = 0, fat = 0, sodium = 0, potassium = 0, fibre = 0;
  const total = document.getElementById("total");
  const tcal = document.getElementById("tcal");
  const tcho = document.getElementById("tcho");
  const tpro = document.getElementById("tpro");
  const tcarb = document.getElementById("tcarb");
  const tfat = document.getElementById("tfat");
  const tsod = document.getElementById("tsod");
  const tpot = document.getElementById("tpot");
  const tfib = document.getElementById("tfib");
  
  function ret(val) {
    const name = document.getElementById("name");
    const serv = document.getElementById("serv");
    const unit = document.getElementById("unit");
    const cal = document.getElementById("cal");
    const quan = document.getElementById("quan");
    const i = 0;
  
    while (i != undefined) {
      const tab = document.getElementById("tab");
      calories = parseFloat(calories) + parseFloat(val.foods[i].nf_calories);
      cholesterol = parseInt(cholesterol) + parseInt(val.foods[i].nf_cholesterol);
      protein = parseInt(protein) + parseInt(val.foods[i].nf_protein);
      carbs = parseInt(carbs) + parseInt(val.foods[i].nf_total_carbohydrate);
      fat = parseInt(fat) + parseInt(val.foods[i].nf_total_fat);
      sodium = parseInt(sodium) + parseInt(val.foods[i].nf_sodium);
      potassium = parseInt(potassium) + parseInt(val.foods[i].nf_potassium);
      fibre = parseInt(fibre) + parseInt(val.foods[i].nf_dietary_fiber);
      total.innerHTML = "Total Calories: " + Math.round(calories) + " Calories";
      tcal.innerHTML = "Calories: " + parseInt(calories) + "Calories";
      tcho.innerHTML = "Cholesterol: " + cholesterol + "mg";
      tpro.innerHTML = "Protein: " + protein + "g";
      tcarb.innerHTML = "Carbohydrates: " + carbs + "g";
      tfat.innerHTML = "Fat: " + fat + "g";
      tsod.innerHTML = "Sodium: " + sodium + "mg";
      tpot.innerHTML = "Potassium: " + potassium + "mg";
      tfib.innerHTML = "Fibre: " + fibre + "g";
      const row = `<tr id=${i}>
                    <td id="child"><img class="delele" src="https://img.icons8.com/material/24/000000/filled-trash.png" id="del${j}" onclick=rem(this.id)></img></td>
                    <td id="child"><img class="food" src="${val.foods[i].photo.thumb}"/></td>
                    <td id="child">${val.foods[i].food_name}</td>
                    <td id="child">${val.foods[i].serving_qty}</td>
                    <td id="child">${val.foods[i].serving_unit}</td>
                    <td id="child">${val.foods[i].nf_calories}</td>
                    <td id="child">${val.foods[i].serving_weight_grams}</td>
                    <td id="child" style="display:none">${val.foods[i].nf_cholesterol}</td>
                    <td id="child" style="display:none">${val.foods[i].nf_protein}</td>
                    <td id="child" style="display:none">${val.foods[i].nf_total_carbohydrate}</td>
                    <td id="child" style="display:none">${val.foods[i].nf_total_fat}</td>
                    <td id="child" style="display:none">${val.foods[i].nf_sodium}</td>
                    <td id="child" style="display:none">${val.foods[i].nf_potassium}</td>
                    <td id="child" style="display:none">${val.foods[i].nf_dietary_fiber}</td>
                  </tr>`;
      tab.innerHTML += row;
      i++;
      j++;
    }
   
  }