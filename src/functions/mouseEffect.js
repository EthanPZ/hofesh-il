export default function mouseEffect(e) {
  const dot = document.querySelector(".dot");
  dot.style.opacity = 1;

  if (e.toElement.closest(".holiday")) {
    dot.style.width = "50px";
    dot.style.height = "50px";
    dot.style.opacity = 0.5;
  } else {
    dot.style.width = "20px";
    dot.style.height = "20px";
  }

  const x =
    e.pageX - parseFloat(getComputedStyle(dot).getPropertyValue("width")) / 2;

  const y =
    e.pageY - parseFloat(getComputedStyle(dot).getPropertyValue("height")) / 2;

  dot.animate(
    {
      transform: `translate(${x}px, ${y}px)`,
    },
    {
      duration: 800,
      fill: "forwards",
    }
  );
}
