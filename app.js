//url api

const API =
  "https://gnews.io/api/v4/top-headlines?token=e6e3589416050f17d6f669dfcf8329ef&lang=es&max=4";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const llenarDatos = (data) => {
    let html = "";
    data.articles.forEach((news) => {
        html += `<div class="card" style="width: 18rem;">`;
        html += `<img src="${news.image}" class="card-img-top">`;
        html += `  <div class="card-body">`;
        html += `<h5 class="card-title">${news.title}</h5>`;
        html += ` <p class="card-text">${news.description}</p>`;
        html += "</div>";
        html += "</div>";
    });
    
    document.getElementById("news").innerHTML += html;
}

getData(API);
