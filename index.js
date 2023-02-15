document.addEventListener("DOMContentLoaded", function () {
  // console.log("Hello world!");
  const rootElement = document.getElementById("root");
  const sections = document.querySelectorAll("section");
  // console.log([...sections]);
  document.addEventListener("mousewheel", function (e) {
    console.log(e.wheelDelta);
  });
});
