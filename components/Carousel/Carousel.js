

class Carousel {
  constructor(element) {
     this.element = element;
    this.right = this.element.querySelector(".right-button").addEventListener('click', ()=> this.rightBar())
    this.left = this.element.querySelector(".left-button").addEventListener('click', ()=> this.leftBar())
    this.images = this.element.querySelectorAll("img");
    this.currentImage = 0
    this.images[this.currentImage].style.display = 'block'
  }
  rightBar(){
    this.images[this.currentImage].style.display = 'none'
    if(this.currentImage >= this.images.length - 1 ){
        this.currentImage = 0
    }else{
      this.currentImage = this.currentImage  + 1  
    }
    TweenMax.from('.cImg', 1, {x: '1184px',opacity: 0})
     this.images[this.currentImage].style.display = 'block'
  }
  leftBar(){
    this.images[this.currentImage].style.display = 'none'
    if(this.currentImage <= 0){
        this.currentImage = this.images.length - 1
    }else{
      this.currentImage  = this.currentImage  - 1  
    }
    TweenMax.from('.cImg', 1, {x: '-1184px',opacity: 0})
    this.images[this.currentImage].style.display = 'block'
  }

}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
