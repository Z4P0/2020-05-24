// make some circles (set number, randomized?)
// the circles are offset from the center and different sizes

const svgParent = document.querySelector('svg');
const sizes = [80, 200];

for (var i = 0; i < 12; i++) {
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")

  circle.setAttribute('cx', 250);
  circle.setAttribute('cy', 250);
  circle.setAttribute('r',
    Math.floor(Math.random() * sizes[sizes.length-1]) + sizes[0]
  );

  svgParent.appendChild(circle);
}
