var listOfFoodItems = document.querySelectorAll(".foodItemTitle");
var listOfFoodItemCalories = document.querySelectorAll(".foodItemCalories");
let itemCounter = 1;
let macroCounter = 0;

var addMacroButton = document.getElementById("addMacroButton");
addMacroButton.addEventListener("click", function () {
  let div = document.createElement("div");
  let label = document.createElement("input");
  let input = document.createElement("input");
  let combobox = document.createElement("select");
  let removeButton = document.createElement("button");

  let option = document.createElement("option");
  option.innerHTML = "Grams (g)";
  let option2 = document.createElement("option");
  option2.innerHTML = "Milligrams (mg)";
  let option3 = document.createElement("option");
  option3.innerHTML = "Ounces (oz)";
  let option4 = document.createElement("option");
  option4.innerHTML = "Cups (c)";
  let option5 = document.createElement("option");
  option5.innerHTML = "Tablespoons (tbsp)";
  let option6 = document.createElement("option");
  option6.innerHTML = "Teaspoons (tsp)";
  let option7 = document.createElement("option");
  option7.innerHTML = "Milliliters (ml)";
  let option8 = document.createElement("option");
  option8.innerHTML = "Fluid Ounces (fl oz)";
  let option9 = document.createElement("option");
  option9.innerHTML = "Micrograms (µg)";

  div.classList += "macroItemStat" + macroCounter;

  removeButton.id = "removeUserStat";
  removeButton.classList += "removeUserStat";
  removeButton.innerText = "Remove";
  removeButton.type = "button";

  removeButton.onclick = (function (macroCounter) {
    return function () {
      removeMacro(macroCounter);
    };
  })(macroCounter);

  label.placeholder = "Stat Title";
  label.classList += "form-control required statName";
  label.id += "required";
  input.classList += "form-control required statValue";
  input.id += "required";
  input.type = "number";
  input.placeholder = "Stat Value";
  div.classList += " newUserMacro";
  combobox.classList += "statMeasurement";

  macroCounter++;

  div.append(label);
  div.append(input);

  combobox.id = combobox.append(
    option,
    option2,
    option3,
    option4,
    option5,
    option6,
    option7,
    option8,
    option9
  );
  div.append(combobox);
  div.append(removeButton);

  document.getElementById("addToDiv").append(div);

  let requiredList = document.querySelectorAll(".required");
  requiredList.forEach((el) => {
    el.required = true;
  });
});

function removeItem(da) {
  console.log("Hello");
  var listItem = da.target.parentNode;
  listItem.remove();
}

document.getElementById("modalSubmit").addEventListener("click", function () {
  console.log(document.getElementById("usersItemName").value);
  console.log(document.getElementById("userItemCalories").value);
  console.log(document.getElementById("userItemServings").value);

  form = document.getElementById("userChoicesModalForm");
  if (!form.checkValidity()) {
    console.log("form not good");
    return;
  } else {
    console.log("Hi");
  }

  let statNames = [];
  let statValues = [];
  let statMeasurements = [];

  let itemName = document.getElementById("usersItemName").value;
  let itemCalories = document.getElementById("userItemCalories").value;
  let itemServings = document.getElementById("userItemServings").value;

  let itemNames = document.querySelectorAll(".statName");
  let statCounter = 0;
  itemNames.forEach((el) => {
    console.log(el.value);

    statNames[statCounter] = el.value;
    statCounter++;
  });

  let itemValues = document.querySelectorAll(".statValue");
  statCounter = 0;
  itemValues.forEach((el) => {
    console.log(el.value);

    statValues[statCounter] = el.value;
    statCounter++;
  });

  let itemMeasurement = document.querySelectorAll(".statMeasurement");
  statCounter = 0;
  itemMeasurement.forEach((el) => {
    console.log(el.value);

    statMeasurements[statCounter] = el.value;
    statCounter++;
  });

  let itemList = document.getElementById("itemGridContainer");
  itemList.insertAdjacentHTML(
    "beforeend",
    `<div id="foodItem" class="foodItem${itemCounter}">
        <h3 class="foodItemTitle"> ${itemName} </h3>
        <h3>Calories: ${itemCalories}</h3>
        <button id="foodItemMacroButton${itemCounter}" type="button" class="btn btn-primary"
        data-toggle="modal"
        data-target="#newModal${itemCounter}"> 
          <h3>Other Macros</h3>
        </button> <button onclick="removeItem(${itemCounter})"> Remove Item </button>
      </div>
      
      <div class="modal fade" id="newModal${itemCounter}">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${itemName} Macros:</h5>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div class="form-group" id="statField${itemCounter}">
                Servings: ${itemServings}<br>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>`
  );

  let statField = document.getElementById("statField" + itemCounter);

  console.log(statField);

  for (var i = 0; i < statNames.length; i++) {
    statField.insertAdjacentHTML(
      "beforeend",
      `<label>${statNames[i]}: ${statValues[i]} * ${itemServings} = ${
        statValues[i] * itemServings
      } ${statMeasurements[i]}</label><br>`
    );
  }

  itemCounter++;

  // statField.insertAdjacentHTML;
  // newItem.insertAdjacentHTML(
  //   "beforeend",
  //   `<li id="${counter}" class="CreatelistItem${counter}"> ${userInput} <button onclick="removeListItem(${counter})"> x </button> </li>`
  // );
});

// document
//   .getElementById("foodItemMacroButton")
//   .addEventListener("click", function () {
//     let macroButtonsList = document.querySelectorAll(".foodItemMacros");
//     macroButtonsList.forEach((el) => {
//       console.log(el.value);
//     });
//   });

function removeItem(e) {
  document.querySelector(`.foodItem${e}`).remove();
}

function removeMacro(e) {
  console.log("yo");
  document.querySelector(`.macroItemStat${e}`).remove();
}

// for (var i = 0; i < listOfFoodItems.length; i++) {
//   listOfFoodItems[i].addEventListener("click", function (e) {
//     console.log(e.target.innerText);

//     e.target.innerText = "";
//     e.target.console.log(e.target.innerText);
//   });

//   listOfFoodItems[i].addEventListener("keydown", function (e) {
//     console.log(e.target.innerText);
//     if (e.keyCode == 13) {
//       e.preventDefault();
//       e.target.setAttribute("contenteditable", true);
//     }

//     e.target.setAttribute("contenteditable", true);
//     console.log(listOfFoodItems[i]);
//   });
// }

// for (var i = 0; i < listOfFoodItemCalories.length; i++) {
//   listOfFoodItemCalories[i].addEventListener("click", function (e) {
//     console.log("Yp");
//     e.target.innerText == "";
//   });

//   listOfFoodItemCalories[i].addEventListener("keydown", function (e) {
//     console.log(e.target.innerText);
//     if (e.keyCode == 13) {
//       e.preventDefault();
//     }

//     if (
//       (e.keyCode >= 48 && e.keyCode <= 57) ||
//       (e.keyCode >= 96 && e.keyCode <= 105)
//     ) {
//       console.log("numnber");
//     }
//   });
// }

// DATE STUFF BELOW

document.getElementById("dayStart").addEventListener("click", function () {
  var currentDate = new Date();
  var settings = { weekday: "long" };
  if (document.getElementById("dayStart").innerText == "Click To Start") {
    document.getElementById("dayStart").innerText =
      currentDate.toLocaleDateString() +
      " - " +
      getRealHours() +
      ":" +
      getRealMinutes();
    document.getElementById("startButton");
  }
});

document.getElementById("dayEnd").addEventListener("click", function () {
  var currentDate = new Date();
  var settings = { weekday: "long" };
  if (
    document.getElementById("dayEnd").innerText == "Click To End Day" &&
    document.getElementById("dayStart").innerText != "Click To Start"
  ) {
    document.getElementById("dayEnd").innerText =
      currentDate.toLocaleDateString() +
      " - " +
      getRealHours() +
      ":" +
      getRealMinutes();
    document.getElementById("startButton");
  }
});

function getRealHours() {
  var currentDate = new Date();
  var settings = { weekday: "long" };
  if (currentDate.getHours() > 12) {
    // console.log(currentDate.getHours() - 12);
    return currentDate.getHours() - 12;
  } else {
    // console.log(currentDate.getHours());
    return currentDate.getHours();
  }
}

function getRealMinutes() {
  var currentDate = new Date();
  var settings = { weekday: "long" };
  if (currentDate.getMinutes() < 10) {
    var minutes = 0 + currentDate.getMinutes().toString();
    // console.log(0 + currentDate.getMinutes().toString());
    if (currentDate.getHours() > 12) {
      return minutes + " PM";
      // console.log(" PM");
    } else {
      return minutes + " AM";
      // console.log(" AM");
    }
  } else {
    // console.log(0 + currentDate.getMinutes());
    var minutes = currentDate.getMinutes();
    if (currentDate.getHours() > 12) {
      return minutes + " PM";
      // console.log(" PM");
    } else {
      // console.log(" AM");
      return minutes + " AM";
    }
  }
}
