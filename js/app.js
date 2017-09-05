  var images = document.querySelectorAll('img');
  var showButton = document.querySelector('#showButton');
  var hideButton = document.querySelector('#hideButton');
  var input = document.querySelector('input');

  showButton.addEventListener('click', function(){

    var text = input.value;
    input.value = " ";

    for (var i = 0; i < images.length; i++) {
      if (images[i].dataset.tag.indexOf(text) >= 0){
        images[i].classList.remove("invisible");
      } else {
        images[i].classList.add("invisible");
      }
    }
  });

  hideButton.addEventListener('click', function(){

    var text = input.value;
    input.value = " ";

    for (var i = 0; i < images.length; i++) {
      if (images[i].dataset.tag.indexOf(text) >= 0){
        images[i].classList.add("invisible");
      } else {
        images[i].classList.remove("invisible");
      }
    }
  });
