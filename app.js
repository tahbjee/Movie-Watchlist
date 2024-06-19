/*  const body = document.getElementById('body')
 const movieBox = document.getElementById('movie-box')
 const imageBox = document.querySelector('.image-box') 

 const mainContainer = document.querySelector(".movie-box-container")
 const textBox = document.querySelector('.text-box') 
 /*  const textBoxTitle = document.querySelector('.text-box-title') 
  const textBoxAbout = document.querySelector('.text-box-about') 
  const textBoxPlot = document.querySelector('.text-box-plot')  

let value



//tt0499549
//tt3896198
// http://www.omdbapi.com/?i=tt3896198&apikey=f96f3886

const button = document.querySelector(".button")
const searchBar = document.querySelector(".search-bar")



button.addEventListener("click", () => {
  
  value = searchBar.value 
    searchValue(value)
  
   console.log(value)
})
 

  function searchValue(value) { 
  fetch(`http://www.omdbapi.com/?s=${value}&apikey=f96f3886&page=3
`)
.then(res => res.json())
.then(data =>  {
  displayMovies(data)
  console.log(data)
})
}    

function displayMovies(movie) {
  const imageBox = document.createElement('div');
  const textBox = document.createElement('div');
  const textBoxTitle = document.createElement('div');
  const textBoxAbout = document.createElement('div');
  const textBoxPlot = document.createElement('div');
  const mainContainer = document.createElement('div');




  imageBox.classList.add("image-box")
  textBox.classList.add("text-box")
  textBoxTitle.classList.add("text-box-title")
  textBoxAbout.classList.add("text-box-about")
  textBoxPlot.classList.add("text-box-plot")
  mainContainer.classList.add("movie-box-container")



  imageBox.innerHTML = `<img class="movie-image" src="${movie.Poster}">`
  textBoxTitle.innerHTML = `<h3>${movie.Title}<h3>`

  textBoxAbout.innerHTML = `
  <p>${movie.Year}</p>
  <p>${movie.Genre}</p>        
  `
  textBoxPlot.innerHTML = `<p>${movie.Plot}</p>` 

  mainContainer.appendChild(imageBox)

movieBox.appendChild(mainContainer)
textBox.appendChild(textBoxTitle)
textBox.appendChild(textBoxAbout)
textBox.appendChild(textBoxPlot)
mainContainer.appendChild(textBox)

} */

document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.querySelector('.search-bar');
  const button = document.querySelector('.button');
  const movieBox = document.getElementById('movie-box');

  let value;

  button.addEventListener("click", () => {
      value = searchBar.value;
      searchValue(value);
      console.log(value);
  });

  function searchValue(value) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=c6218cc1b4506dda8872dbb8aec717cd&query=${value}`)
          .then(res => res.json())
          .then(data => {
              
              console.log(data.results);
              if(data.results.length === 0){ 

                movieBox.innerHTML = `<h3>Unable to find what you’re looking for. Please try another search.</h3>`
                } else {

                 displayMovies(data.results); 
                } 
              

          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }

  function displayMovies(movies) {
      // Clear previous results
      movieBox.innerHTML = '';

   
      movies.forEach(movie => {
          const imageBox = document.createElement('div');
          const textBox = document.createElement('div');
          const textBoxTitle = document.createElement('div');
          const textBoxAbout = document.createElement('div');
          const textBoxPlot = document.createElement('div');
          const mainContainer = document.createElement('div');

          imageBox.classList.add("image-box");
          textBox.classList.add("text-box");
          textBoxTitle.classList.add("text-box-title");
          textBoxAbout.classList.add("text-box-about");
          textBoxPlot.classList.add("text-box-plot");
          mainContainer.classList.add("movie-box-container");


          // Use TMDb's image URL structure
          const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'placeholder.png';

          imageBox.innerHTML = `<img class="movie-image" src="${posterUrl}" alt="Image not found">`;
          textBoxTitle.innerHTML = `
          <h3>${movie.title}</h3>
          <h3>⭐${movie.vote_average.toFixed(1)}</h3>
          `;
          textBoxAbout.innerHTML = `<h4>Release Date: ${movie.release_date}</h4>`;
          textBoxPlot.innerHTML = `<p>${movie.overview}</p>`;

          mainContainer.appendChild(imageBox);
          textBox.appendChild(textBoxTitle);
          textBox.appendChild(textBoxAbout);
          textBox.appendChild(textBoxPlot);
          mainContainer.appendChild(textBox);
          movieBox.appendChild(mainContainer);
      });
  }
});
