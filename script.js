const pupils = document.getElementById('pupils');

document.addEventListener('mousemove', function(e) {
  // Find the center of the pupils image
  const rect = pupils.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Calculate which direction the mouse is
  const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

  // How far the pupils move (in pixels) — increase for more dramatic effect
  const maxMove = 5;

  const moveX = Math.cos(angle) * maxMove;
  const moveY = Math.sin(angle) * maxMove;

  // Move the pupils!
  pupils.style.transform = `translate(${moveX}px, ${moveY}px)`;
});