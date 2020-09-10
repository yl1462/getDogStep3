'use strict';

function watchForm() {
  $('form').submit(function(event) {
    event.preventDefault();
    console.log("submit");
    let text = $('.breedName').string();
    console.log(text);
    getDogImg(text);
  })
}

function getDogImg(text) {
  fetch(`https://dog.ceo/api/breed/hound/images/${text}`)
  .then(res => res.json())
  .then(imgResult => { 
    displayImg(imgResult)
  })
  .catch(error => console.log(error))
}



function displayImg(imgResult) {
  console.log(imgResult.message)
  let html = '';
  imgResult = imgResult.message;
  for (let i = 0; i < imgResult.length; i++) {
    console.log(imgResult[i])
    html+=`<img src="${imgResult[i]}">`
  }
  $("section").html(html)
}

$(
  watchForm()
)