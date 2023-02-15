document.addEventListener("DOMContentLoaded", function () {
  const scroller = new Scroller((id = "root"));
  // console.log(scroller);
  // console.log("Hello world!");
  /*   const rootElement = document.getElementById("root");
  const sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;
  let isThrottlet = false; */

  // console.log([...sections]);
  document.addEventListener("mousewheel", scroller.listenScroll); /*{
     if (isThrottlet) return;
    isThrottlet = true;
    setTimeout(() => (isThrottlet = false), 1000);

    const direction = e.wheelDelta < 0 ? 1 : -1;

    scroll(direction);
 
    // console.log(currentSectionIndex);
  });*/

  // add Single-responsibility principle SRP
  /* function scroll(direction) {
    if (direction === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    currentSectionIndex += direction;
    scrollToCurrentSection();
  }

  function scrollToCurrentSection() {
    sections[currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } */
});
