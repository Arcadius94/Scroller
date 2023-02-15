class Scroller {
  constructor(id) {
    const rootElement = document.getElementById(id);
    this.sections = [...document.querySelectorAll("section")];
    // previous longer method
    // const sectionsArr = Array.prototype.slice.call(this.sections);

    //math.max - protection against minus current section
    this.currentSectionIndex = Math.max(
      this.sections.findIndex(this.isScrolledInToView),
      0
    );
    this.isThrottlet = false;
  }

  isScrolledInToView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = Math.floor(rect.top);
    const elemBottom = Math.floor(rect.bottom);
    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVisible;
  }
  listenScroll = (e) => {
    if (this.isThrottlet) return;
    this.isThrottlet = true;
    setTimeout(() => (this.isThrottlet = false), 1000);

    const direction = e.wheelDelta < 0 ? 1 : -1;
    this.scroll(direction);
  };
  scroll(direction) {
    if (direction === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = this.currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    this.currentSectionIndex += direction;
    this.scrollToCurrentSection();
  }

  scrollToCurrentSection() {
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
