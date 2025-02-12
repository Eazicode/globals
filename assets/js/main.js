$(document).ready(function(){
  $('.lister-seller').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        dotsEach: false,
        center: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
             600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1400: {
                items: 3
            },
            1920: {
                items: 4
            }
        }
    })  
});
const showImage = document.getElementById('showimage')
const myImage = document.getElementById('myimage')


if (myImage.style.display = 'none') {
    showImage.addEventListener('click', function() {
        myImage.style.display = 'block'
    })
}

function animateCounter(element, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    
    let timer = setInterval(() => {
      current += increment;
      element.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  let counterElement = document.getElementById("counter");
  animateCounter(counterElement, 2138, 3138, 0.0005);

  let counterElement1 = document.getElementById("counter1");
  animateCounter(counterElement1, 3295, 4295, 0.0005);

  let counterElement2 = document.getElementById("counter2");
  animateCounter(counterElement2, 11309479, 11310479, 0.0000000000005);

  let counterElement3 = document.getElementById("counter3");
  animateCounter(counterElement3, 85657323, 85658323, 0.0000000000005);

  