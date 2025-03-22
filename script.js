document.addEventListener('DOMContentLoaded', () => {
    fetchLiveScores();
    fetchTeams();
    fetchPlayers();
});

function fetchLiveScores() {
    // Simulated data fetching
    const scores = [
        { match: "Team A vs Team B", score: "120/3" },
        { match: "Team C vs Team D", score: "150/5" }
    ];
    const liveScoresDiv = document.getElementById('live-scores');
    scores.forEach(score => {
        liveScoresDiv.innerHTML += `<p>${score.match}: ${score.score}</p>`;
    });
}

function fetchTeams() {
    const teams = ["Team A", "Team B", "Team C", "Team D"];
    const teamListDiv = document.getElementById('team-list');
    teams.forEach(team => {
        teamListDiv.innerHTML += `<p>${team}</p>`;
    });
}

function fetchPlayers() {
    const players = ["Player 1", "Player 2", "Player 3", "Player 4"];
    const playerListDiv = document.getElementById('player-list');
    players.forEach(player => {
        playerListDiv.innerHTML += `<p>${player}</p>`;
    });
}