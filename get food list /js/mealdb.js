const searchFood = () => {
  const searchField = document.getElementById("inputField");
  const removeResult = document.getElementById("resultContainer");

  const searchText = searchField.value;
  if (searchText == "") {
    alert("Please Enter something ");
  } else {
    // delete search value from the form after searching
    searchField.value = "";

    //remove previous result
    removeResult.textContent = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayResult(data.meals));
  }
};

const displayResult = (meals) => {
  const resultContainer = document.getElementById("resultContainer");

  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.classList.add("shadow-lg");
    div.innerHTML = `
    <div class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            
         
            </div>
    </div>
    
    `;
    resultContainer.appendChild(div);
  });
};
