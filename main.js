// main.js
const teams = [
  { name: 'Manchester United', country: 'England' },
  { name: 'São Paulo FC', country: 'Brazil' },
  { name: 'Paris FC', country: 'France' },
  { name: 'Gamba Osaka', country: 'Japan' }
];

const menu = document.getElementById('menu');
const content = document.getElementById('content');

function renderMenu() {
  menu.innerHTML = '<h2>Select a Team to Manage</h2>';
  teams.forEach(team => {
    const btn = document.createElement('button');
    btn.textContent = `${team.name} (${team.country})`;
    btn.onclick = () => loadTeam(team);
    menu.appendChild(btn);
  });
}

function loadTeam(team) {
  content.innerHTML = `
    <h2>Managing ${team.name}</h2>
    <p>Country: ${team.country}</p>
    <p>Simulate match, edit squad, or check finances (features WIP)</p>
    <button onclick="renderMenu()">Back</button>
  `;
}

renderMenu();