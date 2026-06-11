// Micro-lesson loading screen
// New behavior: 20s countdown, lazy-load the video thumbnail, and rotate facts
// Simple 20s loader that swaps the skeleton for an embedded YouTube iframe, plus rotating facts
(function(){
  const DURATION = 20; // seconds before swapping to the embedded video
  const videoEl = document.getElementById('video');
  const factEl = document.getElementById('fact-text');

  const facts = [
    'The first computer bug was an actual moth stuck in a relay (1947).',
    'The term "bug" for defects predates computers and was used in engineering.',
    'More than 90% of the world\'s currency exists only in digital form.',
    'The first high-level programming language was Fortran (1957).',
    'The original Macintosh had 128 KB of RAM.'
  ];

  let factIndex = 0;

  function rotateFacts(){
    factEl.textContent = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length;
    setTimeout(rotateFacts, 5000);
  }

  function loadYoutube(){
    // Replace with an embedded YouTube player
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = 'https://www.youtube.com/embed/iaRj5xGHCuE?autoplay=0';
    iframe.title = 'Lesson video';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.setAttribute('frameborder','0');
    iframe.setAttribute('allowfullscreen','');
    // ensure iframe fills the ratio container
    iframe.style.border = '0';
    videoEl.innerHTML = '';
    videoEl.appendChild(iframe);
    // hide the inline video facts smoothly
    const factsInline = videoEl.querySelector('.video-facts');
    if(factsInline){
      setTimeout(()=> factsInline.classList.add('facts-hidden'), 300);
      // remove from DOM after animation
      setTimeout(()=> factsInline.remove(), 800);
    }
  }

  // Start rotating facts immediately and schedule the video swap
  rotateFacts();
  setTimeout(loadYoutube, DURATION * 1000);

})();
