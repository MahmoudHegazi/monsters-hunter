const element = document.getElementById('some-element-you-want-to-animate');
let start;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;

  // `Math.min()` is used here to make sure that the element stops at exactly 200px.
  element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

  if (elapsed < 2000) { // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
