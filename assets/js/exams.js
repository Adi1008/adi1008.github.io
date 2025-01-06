// Get base URL for fetching data
const baseUrl = window.location.origin;

// Event(s) that should appear first (will depend on the year)
const priorityEvents = ["Reach for the Stars"];

// Fetch exam data from JSON file
fetch(`${baseUrl}/files/exams.json`)
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
    }
    return res.json();
  })
  .then(exams => {
    // Get unique values for filters
    const seasons = ['All seasons', ...new Set(exams.map(e => e.season))].sort().reverse();
    const tournaments = ['All tournaments', ...new Set(exams.map(e => e.tournament))].sort();
    const events = ['All events', ...new Set(exams.map(e => e.event))].sort();

    // Populate dropdowns
    populateSelect('season-select', seasons);
    populateSelect('tournament-select', tournaments);
    populateSelect('event-select', events);

    // Add filter change listeners
    document.querySelectorAll('#season-select, #tournament-select, #event-select')
      .forEach(select => {
        select.addEventListener('change', () => buildResults(exams));
      });

    // Initial build
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
    if (item.startsWith('All ')) {
      option.selected = true;
    }
    select.appendChild(option);
  });
}

function buildResults(exams) {
  const selectedSeasons = [...document.getElementById('season-select').selectedOptions].map(o => o.value);
  const selectedTournaments = [...document.getElementById('tournament-select').selectedOptions].map(o => o.value);
  const selectedEvents = [...document.getElementById('event-select').selectedOptions].map(o => o.value);

  const container = document.getElementById('exams-container');
  container.innerHTML = '';

  // Filter exams based on selection
  const filteredExams = exams.filter(exam =>
    (selectedSeasons.includes('All seasons') || selectedSeasons.includes(exam.season)) &&
    (selectedTournaments.includes('All tournaments') || selectedTournaments.includes(exam.tournament)) &&
    (selectedEvents.includes('All events') || selectedEvents.includes(exam.event))
  );

  // Group exams by event
  const examsByEvent = filteredExams.reduce((groups, exam) => {
    if (!groups[exam.event]) {
      groups[exam.event] = [];
    }
    groups[exam.event].push(exam);
    return groups;
  }, {});

  // Create output for each event
  Object.entries(examsByEvent)
    .sort(([eventA], [eventB]) => {
      const indexA = priorityEvents.indexOf(eventA);
      const indexB = priorityEvents.indexOf(eventB);
      
      // If both events are in priority list, sort by priority order
      if (indexA >= 0 && indexB >= 0) {
        return indexA - indexB;
      }
      // If only eventA is in priority list, it comes first
      if (indexA >= 0) return -1;
      // If only eventB is in priority list, it comes first
      if (indexB >= 0) return 1;
      // If neither are in priority list, sort alphabetically
      return eventA.localeCompare(eventB);
    })
    .forEach(([event, eventExams]) => {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'event-group';
    
    // Add event header
    eventDiv.innerHTML = `<h2>${event}${priorityEvents.includes(event) ? ' (★)' : ''}</h2>`;

    // Sort exams by season (newest first) and tournament
    eventExams.sort((a, b) => {
      const seasonDiff = b.season.localeCompare(a.season);
      return seasonDiff !== 0 ? seasonDiff : a.tournament.localeCompare(b.tournament);
    });

    // Add each exam under the event
    eventExams.forEach(exam => {
      const examDiv = document.createElement('div');
      examDiv.className = 'exam-entry';
      examDiv.innerHTML = `
        <h3>${exam.tournament} ${exam.season}</h3>
        ${exam.notes ? `<span style="font-size:0.8em; color:gray; display:block; margin: 8px 0;"><i>${exam.notes}</i></span>` : ''}
        <div class="links" style="font-size:0.9em;">
          ${exam.links.map(link => `<a href="${link.url}">[${link.label}]</a>`).join(' ')}
        </div>
      `;
      eventDiv.appendChild(examDiv);
    });

    container.appendChild(eventDiv);
  });
}