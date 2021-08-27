const loadCountryData = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => DisplayData(data));
};

const DisplayData = (data) => {
  const countryContainer = document.getElementById("countryContainer");
  data.forEach((cdata) => {
    const div = document.createElement("div");
    div.innerHTML = `
        Country name is ${cdata.name}<br/>
       <img width="200px" src="${cdata.flag}" />
    
      `;
    countryContainer.appendChild(div);
  });
};
