'use strict';

function watchForm() {
  $('form').submit(function(event) {
    event.preventDefault();
    console.log("submit");
    let text = $('.breedName').val();
    console.log(text);
    getDogImg(text);
  })
}

function getDogImg(text) {
  fetch(`https://dog.ceo/api/breed/${text}/images/random`)
  .then(res => res.json())
  .then(imgResult => { 
    displayImg(imgResult)
  })
  .catch(error => console.log(error)
  window.alert(imgResult.message))
}



function displayImg(imgResult) {
  console.log(imgResult)
  let html = '';
  html=`<img src="${imgResult.message}">`;
  $("section").html(html);
}

$(
  watchForm()
)