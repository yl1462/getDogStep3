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
  .catch(error => console.log(error))
}



function displayImg(imgResult) {
  console.log(imgResult);
  if (imgResult.status == "error" && imgResult.code == "404") {
    $("section").html(`<p>Sorry, please check the breed name and try again.</p>`)
  } else {
  let html = `<img src="${imgResult.message}">`;
  $("section").html(html);
  }
}

$(
  watchForm()
)