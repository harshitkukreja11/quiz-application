function Leaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  
    return (
      <div>
        <h1>Leaderboard</h1>
        {leaderboard.length === 0 ? (
          <p>No results available yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.sort((a, b) => b.score - a.score).map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  
  export default Leaderboard;
  