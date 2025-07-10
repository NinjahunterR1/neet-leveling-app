import { useState } from "react";

const initialStats = {
  level: 1,
  xp: 0,
  INT: 5,
  FOC: 5,
  STR: 5,
  CAL: 5,
  WILL: 5,
};

const quests = [
  { name: "Attend Aakash Class", xp: 30, stat: "INT" },
  { name: "Revise Notes (1 subject)", xp: 20, stat: "FOC" },
  { name: "Solve 15 Numericals", xp: 25, stat: "CAL" },
  { name: "Read NCERT Bio 1hr", xp: 20, stat: "INT" },
  { name: "Make 5 Flashcards", xp: 15, stat: "FOC" },
  { name: "15 Push-ups/Squats", xp: 10, stat: "STR" },
  { name: "10 min Meditation", xp: 10, stat: "WILL" },
  { name: "No Social Media (2hrs)", xp: 10, stat: "WILL" },
];

function App() {
  const [stats, setStats] = useState(initialStats);

  const handleQuestComplete = (quest) => {
    let newXP = stats.xp + quest.xp;
    let newLevel = stats.level;
    let updatedStat = stats[quest.stat] + 1;

    if (newXP >= 100) {
      newXP -= 100;
      newLevel += 1;
    }

    setStats({
      ...stats,
      xp: newXP,
      level: newLevel,
      [quest.stat]: updatedStat,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 to-blue-300 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">NEET Leveling: Path of the Scholar</h1>

      <div className="max-w-xl mx-auto mb-6 bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">📊 Your Stats</h2>
        <ul className="grid grid-cols-2 gap-2">
          <li>🎓 INT: {stats.INT}</li>
          <li>🧠 FOC: {stats.FOC}</li>
          <li>💪 STR: {stats.STR}</li>
          <li>🧮 CAL: {stats.CAL}</li>
          <li>⚔️ WILL: {stats.WILL}</li>
          <li>🏅 Level: {stats.level}</li>
          <li>✨ XP: {stats.xp}/100</li>
        </ul>
      </div>

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">📋 Daily Quests</h2>
        <div className="space-y-3">
          {quests.map((quest, index) => (
            <button
              key={index}
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
              onClick={() => handleQuestComplete(quest)}
            >
              {quest.name} (+{quest.xp} XP | +1 {quest.stat})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
