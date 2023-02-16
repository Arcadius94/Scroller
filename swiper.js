// name of file swiper.js begin small letter cos its so called singleton
class Swiper {
  constructor() {
    this.initialY = null;
    this.initialX = null;

    document.addEventListener("touchstart", (event) => this.startTouch(event));
    document.addEventListener("touchmove", (event) => this.moveTouch(event));

    this.events = {
      swipeUp: new Event("swipeUp"),
      swipeDown: new Event("swipeDown"),
      swipeLeft: new Event("swipeLeft"),
      swipeRight: new Event("swipeRight"),
    };
  }
  startTouch(event) {
    // event.preventDefault();
    this.initialX = event.touches[0].clientX;
    this.initialY = event.touches[0].clientY;
  }
  moveTouch(event) {
    if (!this.initialX || !this.initialY) return;

    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;

    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentY;
    if (Math.abs(diffX) > Math.abs(diffY)) {
      // jestsmy w osi X
      if (diffX > 0) {
        // w lewo
        document.dispatchEvent(this.events.swipeLeft);
      } else {
        // w prawo
        document.dispatchEvent(this.events.swipeRight);
      }
    } else {
      //jestesmy w osi Y
      if (diffY > 0) {
        //do gory
        document.dispatchEvent(this.events.swipeUp);
      } else {
        //do dołu
        document.dispatchEvent(this.events.swipeDown);
      }
    }
    this.initialX = null;
    this.initialY = null;
  }
}
new Swiper();
