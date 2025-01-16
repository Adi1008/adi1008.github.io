document.addEventListener("DOMContentLoaded", () => {
    fetch('/files/quotes.json')
      .then(response => response.json())
      .then(quotes => {
        const carousel = document.querySelector('.carousel');
        quotes.forEach((quote, index) => {
          const quoteDiv = document.createElement('div');
          quoteDiv.classList.add('quote');
          if (index === 0) quoteDiv.classList.add('active');
          quoteDiv.textContent = `"${quote.quote}"`;
          carousel.appendChild(quoteDiv);
        });
  
        let currentIndex = 0;
        let intervalId;
  
        function updateQuote(next = true) {
          const quotes = document.querySelectorAll(".quote");
          quotes[currentIndex].classList.remove("active");
          currentIndex = next ? (currentIndex + 1) % quotes.length : (currentIndex - 1 + quotes.length) % quotes.length;
          quotes[currentIndex].classList.add("active");
        }
  
        function startCarousel() {
          intervalId = setInterval(updateQuote, 5000);
        }
  
        function stopCarousel() {
          clearInterval(intervalId);
        }
  
        // Start the carousel initially
        startCarousel();
  
        // Add event listeners for buttons
        document.getElementById('pause-resume-btn').addEventListener('click', function() {
          if (this.querySelector('i').classList.contains('fa-pause')) {
            stopCarousel();
            this.querySelector('i').classList.remove('fa-pause');
            this.querySelector('i').classList.add('fa-play');
          } else {
            startCarousel();
            this.querySelector('i').classList.remove('fa-play');
            this.querySelector('i').classList.add('fa-pause');
          }
        });
  
        document.getElementById('next-btn').addEventListener('click', function() {
          stopCarousel();
          updateQuote(true);
          startCarousel();
        });
  
        document.getElementById('back-btn').addEventListener('click', function() {
          stopCarousel();
          updateQuote(false);
          startCarousel();
        });
      })
      .catch(error => console.error('Error loading quotes:', error));
  });