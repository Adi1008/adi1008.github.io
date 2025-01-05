// Get base URL for fetching data
const baseUrl = window.location.origin;

// Fetch exam data from JSON file
fetch(`${baseUrl}/files/exams.json`)
  .then(res => {
    console.log('Fetch response:', res); // Debug
    if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
    }
    return res.json();
  })
  .then(exams => {
    console.log('Fetched exams:', exams);

    // Get unique values for filters
    const seasons = [...new Set(exams.map(e => e.season))].sort().reverse();
    const tournaments = [...new Set(exams.map(e => e.tournament))];
    const events = [...new Set(exams.map(e => e.event))].sort();

    // Populate dropdowns
    populateSelect('season-select', seasons);
    populateSelect('tournament-select', tournaments); 
    populateSelect('event-select', events);

    // Add filter change listeners
    document.querySelectorAll('#season-select, #tournament-select, #event-select')
      .forEach(select => {
        select.addEventListener('change', () => buildResults(exams));
      });

    // Initial render
    buildResults(exams);
  })
  .catch(error => {
    console.error('Error loading exams:', error);
    document.getElementById('exams-container').innerHTML = 
      `<p>Error loading exam data. Please try refreshing the page.</p>`;
  });

function populateSelect(id, items) {
  const select = document.getElementById(id);
  select.innerHTML = ''; // Clear existing options
  items.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
}

function buildResults(exams) {
    const selectedSeasons = [...document.getElementById('season-select').selectedOptions].map(o => o.value);
    const selectedTournaments = [...document.getElementById('tournament-select').selectedOptions].map(o => o.value);
    const selectedEvents = [...document.getElementById('event-select').selectedOptions].map(o => o.value);
  
    const container = document.getElementById('exams-container');
    container.innerHTML = '';
  
    exams.filter(exam =>
      (selectedSeasons.length === 0 || selectedSeasons.includes(exam.season)) &&
      (selectedTournaments.length === 0 || selectedTournaments.includes(exam.tournament)) &&
      (selectedEvents.length === 0 || selectedEvents.includes(exam.event))
    ).forEach(exam => {
      const div = document.createElement('div');
      div.className = 'exam-entry';
      div.innerHTML = `
        <h3>${exam.tournament} ${exam.season}: ${exam.event}</h3>
        ${exam.notes ? `<p style="font-size:0.8em; color:gray;"><i>${exam.notes}</i></p>` : ''}
        <div class="links" style="font-size:0.9em;">
          ${exam.links.map(link => `
            <a href="${link.url}">[${link.label}]</a>
          `).join(' ')}
        </div>
      `;
      container.appendChild(div);
    });
  }