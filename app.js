 const body = document.getElementById('body')
 const imageBox = document.querySelector('.image-box') 

 const textBox = document.querySelector('.text-box') 
  const textBoxTitle = document.querySelector('.text-box-title') 
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
  for (let i = 0; i <= 10; i++) {
    searchValue(value)
  }
   console.log(value)
})
 

  function searchValue(value) { 
  fetch(`http://www.omdbapi.com/?t=${value}&apikey=f96f3886
`)
.then(res => res.json())
.then(data => {
        console.log(data["Poster"])
        

        imageBox.innerHTML = `<img class="movie-image" src="${data.Poster}"> `                 
        textBoxTitle.innerHTML = `<h3>${data.Title}<h3>`
        textBoxAbout.innerHTML = `
        <p>${data.Year}</p>
        <p>${data.Genre}</p>        
        `
        textBoxPlot.innerHTML = `<p>${data.Plot}</p>`

    })
}    
