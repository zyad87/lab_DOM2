let trin = document.getElementsByClassName('trin')[0];
console.log(trin);

setInterval(() => {
  let positionx = Math.random() * 50;
  let positiony = Math.random() * 50;
  trin.style.left = `${positionx}px`;
  trin.style.bottom = `${positiony}px`;
  trin.style.right = `${positionx}px`;
  trin.style.top = `${positiony}px`;
  trin.style.backgroundColor =
    '#' + (((1 << 24) * Math.random()) || 0).toString(16).padStart(6, '0');
  trin.style.width = `${Math.random() * 200}px`;
  trin.style.height = `${Math.random() * 200}px`;
  trin.style.opacity = Math.random();
}, 2000);
