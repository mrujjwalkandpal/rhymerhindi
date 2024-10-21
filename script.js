const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Temporary search function for rhyming words
searchBtn.addEventListener('click', () => {
  const word = document.getElementById('search-input').value.toLowerCase();
  let results = '';

  switch (word) {
    case 'kabbadi':
      results = 'Rhymes with: addi, haddi, ghadi, chhadi';
      break;
    case 'dosti':
      results = 'Rhymes with: posti, hosti, sasti';
      break;
    case 'pyaar':
      results = 'Rhymes with: yaar, bazaar, intezaar';
      break;
    default:
      results = 'No rhymes found, try a different word.';
  }

  resultsDiv.textContent = results;
});
